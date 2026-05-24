'use client';
import { useEffect, useRef, useState } from 'react';
import { Heart, RefreshCw, Loader2 } from 'lucide-react';

/* ── Plan IDs — one per monthly tier ── */
const PLAN_MAP = {
  '₹99':  'plan_StIew6XpMk9h2P',   // Supporter
  '₹249': 'plan_StIfm8tpZFZiP9',   // Champion
  '₹499': 'plan_StIgY8yxYoyq1v',   // Patron
  '₹999': 'plan_StIhlmXTzBCaPs',   // Guardian
};

/* ─── Generate & download a professional PDF receipt ─── */
async function generateReceipt({ paymentId, amountRupees, date, isSubscription }) {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();

  const RED   = [212, 43, 43];
  const DARK  = [30, 30, 30];
  const GREY  = [110, 110, 110];
  const LGREY = [235, 235, 235];
  const WHITE = [255, 255, 255];
  const TEAL  = [0, 120, 120];

  // Header band
  doc.setFillColor(...RED);
  doc.rect(0, 0, W, 40, 'F');

  try {
    const resp = await fetch('/images/logo.png');
    const blob = await resp.blob();
    const reader = new FileReader();
    await new Promise(resolve => { reader.onloadend = resolve; reader.readAsDataURL(blob); });
    doc.setFillColor(...WHITE);
    doc.roundedRect(10, 7, 36, 26, 4, 4, 'F');
    doc.addImage(reader.result, 'PNG', 12, 9, 32, 22);
  } catch (_) {
    doc.setFont('helvetica', 'bold'); doc.setFontSize(13); doc.setTextColor(...WHITE);
    doc.text('NexZen', 14, 18); doc.text('Foundation', 14, 26);
  }

  doc.setTextColor(...WHITE);
  doc.setFont('helvetica', 'bold'); doc.setFontSize(18);
  doc.text('NexZen Foundation', 54, 19);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
  doc.text('Empowering Communities Through Education, Healthcare & Social Development', 54, 27);
  doc.setFontSize(7.5);
  doc.text('Reg: IV-1901-01209-2025  |  NGO Darpan: WB/2025/0892907  |  80G: AAFTN1149JF20261', 54, 35);

  // Title strip
  doc.setFillColor(248, 248, 248);
  doc.rect(0, 40, W, 18, 'F');
  doc.setDrawColor(...LGREY);
  doc.line(0, 58, W, 58);
  doc.setTextColor(...DARK);
  doc.setFont('helvetica', 'bold'); doc.setFontSize(14);
  doc.text(isSubscription ? 'MONTHLY SUBSCRIPTION RECEIPT' : 'DONATION RECEIPT', W / 2, 51, { align: 'center' });
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...GREY);
  doc.text(`Date: ${date}`, W / 2, 57, { align: 'center' });

  // Detail card
  const cardX = 16, cardW = W - 32;
  let y = 66;

  const words = toIndianWords(Number(amountRupees));
  const formatted = `Rs. ${Number(amountRupees).toLocaleString('en-IN')}${isSubscription ? '/month' : ''}`;

  doc.setFillColor(252, 252, 252);
  doc.setDrawColor(...LGREY);
  doc.roundedRect(cardX, y, cardW, 78, 3, 3, 'FD');
  doc.setFillColor(...RED);
  doc.rect(cardX, y, 3, 78, 'F');

  const label = (txt, yy) => {
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...GREY);
    doc.text(txt, cardX + 10, yy);
  };
  const value = (txt, yy, color = DARK, size = 11) => {
    doc.setFont('helvetica', 'bold'); doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
    doc.text(txt, cardX + 10, yy);
  };

  label(isSubscription ? 'Subscription / Payment ID' : 'Payment / Transaction ID', y + 10);
  value(paymentId, y + 17);

  doc.setDrawColor(...LGREY);
  doc.line(cardX + 8, y + 22, cardX + cardW - 8, y + 22);

  label(isSubscription ? 'Monthly Amount' : 'Amount Donated', y + 30);
  value(formatted, y + 38, RED, 15);
  doc.setFont('helvetica', 'italic'); doc.setFontSize(9); doc.setTextColor(...GREY);
  doc.text(`(${words}${isSubscription ? ' per month' : ''})`, cardX + 10, y + 46);

  doc.setDrawColor(...LGREY);
  doc.line(cardX + 8, y + 50, cardX + cardW - 8, y + 50);

  label('Donated To', y + 58);
  value('NexZen Foundation', y + 65);

  label('Purpose', y + 72);
  value(isSubscription ? 'Monthly Recurring Charitable Donation' : 'Charitable Donation — Education & Social Development', y + 78, DARK, 9);

  y += 88;

  // Thank You
  doc.setFillColor(255, 246, 246);
  doc.setDrawColor(220, 150, 150);
  doc.roundedRect(cardX, y, cardW, 26, 3, 3, 'FD');
  doc.setFillColor(...RED);
  doc.rect(cardX, y, 3, 26, 'F');

  doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(...RED);
  doc.text('Thank You for Your Generosity!', cardX + 10, y + 10);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...DARK);
  doc.text(
    isSubscription
      ? 'Your monthly subscription is now active. Funds will be auto-debited each month from your account.'
      : 'Your donation directly empowers students, patients, and communities across West Bengal.',
    cardX + 10, y + 19, { maxWidth: cardW - 20 }
  );

  y += 35;

  // 80G section
  doc.setFillColor(241, 254, 254);
  doc.setDrawColor(150, 200, 200);
  doc.roundedRect(cardX, y, cardW, 40, 3, 3, 'FD');
  doc.setFillColor(TEAL[0], TEAL[1], TEAL[2]);
  doc.rect(cardX, y, 3, 40, 'F');

  doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(TEAL[0], TEAL[1], TEAL[2]);
  doc.text('80G Tax Exemption Receipt', cardX + 10, y + 10);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...DARK);
  doc.text(
    'To receive your official 80G tax exemption receipt (Form 10BE), please email us your\nFull Name, PAN Number, and Postal Address at:',
    cardX + 10, y + 19, { maxWidth: cardW - 20 }
  );
  doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(...RED);
  doc.text('donation@nexzenfoundation.in', cardX + 10, y + 34);

  y += 50;

  // Legal strip
  doc.setDrawColor(...LGREY);
  doc.line(cardX, y, cardX + cardW, y);
  y += 7;

  doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...GREY);
  [
    'NexZen Foundation is a registered charitable trust under the Indian Trusts Act.',
    'Reg No: IV-1901-01209-2025  |  NGO Darpan: WB/2025/0892907  |  80G Cert: AAFTN1149JF20261',
    'This is a computer-generated receipt and does not require a physical signature.',
  ].forEach((line, i) => doc.text(line, W / 2, y + i * 5, { align: 'center' }));

  // Footer
  doc.setFillColor(...RED);
  doc.rect(0, H - 14, W, 14, 'F');
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...WHITE);
  doc.text('www.nexzenfoundation.in  |  donation@nexzenfoundation.in', W / 2, H - 6, { align: 'center' });

  doc.save(`NexZen_${isSubscription ? 'Subscription' : 'Donation'}_Receipt_${paymentId}.pdf`);
}

/* ─── Indian words converter ─── */
function toIndianWords(n) {
  if (n === 0) return 'Zero Rupees Only';
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const two  = n => n < 20 ? ones[n] : tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
  const three = n => n >= 100 ? ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + two(n % 100) : '') : two(n);
  let r = '', rem = n;
  if (rem >= 10000000) { r += three(Math.floor(rem / 10000000)) + ' Crore '; rem %= 10000000; }
  if (rem >= 100000)   { r += three(Math.floor(rem / 100000))   + ' Lakh ';  rem %= 100000;  }
  if (rem >= 1000)     { r += three(Math.floor(rem / 1000))     + ' Thousand '; rem %= 1000; }
  if (rem > 0)         { r += three(rem); }
  return r.trim() + ' Rupees Only';
}

/* ─── After-payment actions ─── */
function afterPayment({ paymentId, amountRupees, date, isSubscription }) {
  generateReceipt({ paymentId, amountRupees, date, isSubscription });
  setTimeout(() => {
    const msg = encodeURIComponent(
      `I just ${isSubscription ? 'set up a monthly donation' : 'donated'} ₹${Number(amountRupees).toLocaleString('en-IN')}${isSubscription ? '/month' : ''} to NexZen Foundation — an NGO empowering students and communities in West Bengal.\n\nEvery contribution matters. Join me: https://www.nexzenfoundation.in/donate`
    );
    const share = window.confirm('Thank you! Would you like to share on WhatsApp and inspire others?');
    if (share) window.open(`https://wa.me/?text=${msg}`, '_blank');
  }, 1500);
}

/* ─── One-time Payment Button ─── */
export function OneTimeButton({ amount }) {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    const existing = document.getElementById('razorpay-checkout-js');
    if (existing) { scriptLoaded.current = true; return; }
    const script = document.createElement('script');
    script.id = 'razorpay-checkout-js';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => { scriptLoaded.current = true; };
    document.body.appendChild(script);
  }, []);

  const numericRupees  = amount ? parseInt(amount.replace(/[₹,]/g, ''), 10) : null;
  const amountInPaise  = numericRupees && numericRupees >= 1 ? numericRupees * 100 : null;

  const openCheckout = () => {
    if (!amountInPaise) { alert('Please select or enter a donation amount first.'); return; }

    const options = {
      key: 'rzp_live_StGuTXsWa2VD8P',
      amount: amountInPaise,
      currency: 'INR',
      name: 'NexZen Foundation',
      description: 'Charitable Donation',
      image: '/images/logo.png',
      notes: { purpose: 'Charitable Donation', trust_reg: 'IV-1901-01209-2025', '80g_cert': 'AAFTN1149JF20261' },
      theme: { color: '#D42B2B' },
      handler: function (response) {
        const date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
        afterPayment({ paymentId: response.razorpay_payment_id, amountRupees: numericRupees, date, isSubscription: false });
      },
      modal: { backdropclose: false, escape: true },
    };

    const openRzp = () => {
      if (window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', resp => alert(`Payment failed. Reason: ${resp.error.description}`));
        rzp.open();
      } else { setTimeout(openRzp, 500); }
    };
    openRzp();
  };

  const btnLabel = numericRupees && numericRupees >= 1
    ? `Donate ₹${numericRupees.toLocaleString('en-IN')}`
    : 'Donate Now';

  return (
    <DonateBtn onClick={openCheckout} active={!!amountInPaise} monthly={false}>
      <Heart size={17} fill="white"/> {btnLabel}
    </DonateBtn>
  );
}

/* ─── Recurring Subscription Button ─── */
export function SubscriptionButton({ amount }) {
  const [loading, setLoading] = useState(false);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    const existing = document.getElementById('razorpay-checkout-js');
    if (existing) { scriptLoaded.current = true; return; }
    const script = document.createElement('script');
    script.id = 'razorpay-checkout-js';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => { scriptLoaded.current = true; };
    document.body.appendChild(script);
  }, []);

  const planId       = amount ? PLAN_MAP[amount] : null;
  const numericRupees = amount ? parseInt(amount.replace(/[₹,]/g, ''), 10) : null;
  const active = !!planId;

  const openSubscription = async () => {
    if (!planId) { alert('Please select a monthly plan first.'); return; }
    setLoading(true);

    try {
      // Call our secure server-side API to create the subscription
      const res = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId }),
      });

      const data = await res.json();

      if (!res.ok || !data.subscription_id) {
        alert(`Could not create subscription. ${data.error || 'Please try again.'}`);
        setLoading(false);
        return;
      }

      const openRzp = () => {
        if (!window.Razorpay) { setTimeout(openRzp, 500); return; }

        const options = {
          key: 'rzp_live_StGuTXsWa2VD8P',
          subscription_id: data.subscription_id,   // ← real subscription, NOT amount
          name: 'NexZen Foundation',
          description: `Monthly Donation — ₹${numericRupees}/month`,
          image: '/images/logo.png',
          theme: { color: '#D42B2B' },
          handler: function (response) {
            setLoading(false);
            const date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
            afterPayment({
              paymentId: response.razorpay_payment_id || response.razorpay_subscription_id,
              amountRupees: numericRupees,
              date,
              isSubscription: true,
            });
          },
          modal: {
            backdropclose: false,
            escape: true,
            ondismiss: () => setLoading(false),
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', resp => {
          setLoading(false);
          alert(`Payment failed. Reason: ${resp.error.description}`);
        });
        rzp.open();
      };

      openRzp();
    } catch (err) {
      console.error(err);
      alert('Network error. Please check your connection and try again.');
      setLoading(false);
    }
  };

  const btnLabel = loading
    ? 'Setting up...'
    : (numericRupees ? `Give ₹${numericRupees.toLocaleString('en-IN')}/month` : 'Select a Plan');

  return (
    <DonateBtn onClick={openSubscription} active={active && !loading} monthly={true}>
      {loading ? <Loader2 size={17} style={{ animation: 'spin 1s linear infinite' }}/> : <RefreshCw size={17}/>}
      {' '}{btnLabel}
    </DonateBtn>
  );
}

/* ─── Shared button shell ─── */
function DonateBtn({ children, onClick, active, monthly }) {
  const bg = active
    ? (monthly ? 'linear-gradient(135deg,#059669,#047857)' : 'linear-gradient(135deg,#D42B2B,#a81e1e)')
    : 'linear-gradient(135deg,#aaa,#888)';
  const shadow = active
    ? (monthly ? '0 4px 15px rgba(5,150,105,0.35)' : '0 4px 15px rgba(212,43,43,0.35)')
    : 'none';
  return (
    <button onClick={onClick} style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', background:bg, color:'white', border:'none', borderRadius:'50px', padding:'0.9rem 2rem', fontSize:'1rem', fontWeight:700, cursor:active?'pointer':'not-allowed', boxShadow:shadow, transition:'transform 0.2s,box-shadow 0.2s', marginTop:'0.5rem', width:'100%', letterSpacing:'0.3px', opacity:active?1:0.6 }}
      onMouseEnter={e => { if (!active) return; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow=monthly?'0 8px 24px rgba(5,150,105,0.4)':'0 8px 24px rgba(212,43,43,0.4)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow=shadow; }}>
      {children}
    </button>
  );
}

/* ─── Default export (backwards compat) ─── */
export default function RazorpayButton({ amount, mode = 'once' }) {
  if (mode === 'monthly') return <SubscriptionButton amount={amount}/>;
  return <OneTimeButton amount={amount}/>;
}

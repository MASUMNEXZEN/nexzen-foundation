'use client';
import { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

/* ─── Generate & download a professional PDF receipt ─── */
async function generateReceipt({ paymentId, amountRupees, date }) {
  // Dynamically import jsPDF (client-side only)
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();

  // ── Brand colours ──
  const RED    = [212, 43, 43];
  const DARK   = [30, 30, 30];
  const GREY   = [100, 100, 100];
  const LGREY  = [240, 240, 240];
  const WHITE  = [255, 255, 255];
  const TEAL   = [0, 128, 128];

  // ── Header band ──
  doc.setFillColor(...RED);
  doc.rect(0, 0, W, 38, 'F');

  // Try to embed the logo
  try {
    const resp = await fetch('/images/logo.png');
    const blob = await resp.blob();
    const reader = new FileReader();
    await new Promise(resolve => {
      reader.onloadend = resolve;
      reader.readAsDataURL(blob);
    });
    // Place logo (white bg pill behind it)
    doc.setFillColor(...WHITE);
    doc.roundedRect(10, 6, 36, 26, 4, 4, 'F');
    doc.addImage(reader.result, 'PNG', 12, 8, 32, 22);
  } catch (_) {
    // Fallback: text logo
    doc.setFontSize(14);
    doc.setTextColor(...WHITE);
    doc.setFont('helvetica', 'bold');
    doc.text('NexZen', 14, 18);
    doc.text('Foundation', 14, 25);
  }

  // ── Foundation name & tagline in header ──
  doc.setTextColor(...WHITE);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('NexZen Foundation', 54, 18);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Empowering Communities Through Education, Healthcare & Social Development', 54, 25);
  doc.setFontSize(8);
  doc.text('Reg: IV-1901-01209-2025  |  NGO Darpan: WB/2025/0892907  |  80G: AAFTN1149JF20261', 54, 32);

  // ── DONATION RECEIPT title ──
  doc.setFillColor(...LGREY);
  doc.rect(0, 38, W, 14, 'F');
  doc.setTextColor(...DARK);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('DONATION RECEIPT', W / 2, 47, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...GREY);
  doc.text(`Date: ${date}`, W / 2, 53, { align: 'center' });

  // ── Receipt detail card ──
  let y = 68;
  const cardX = 18;
  const cardW = W - 36;

  // Card border
  doc.setDrawColor(...LGREY);
  doc.setFillColor(252, 252, 252);
  doc.roundedRect(cardX, y - 6, cardW, 62, 3, 3, 'FD');

  // Red left accent
  doc.setFillColor(...RED);
  doc.rect(cardX, y - 6, 3, 62, 'F');

  const rowY = (n) => y + n * 13;
  const drawRow = (label, value, n, highlight = false) => {
    doc.setFontSize(9);
    doc.setTextColor(...GREY);
    doc.setFont('helvetica', 'normal');
    doc.text(label, cardX + 10, rowY(n));

    doc.setFontSize(highlight ? 14 : 11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(highlight ? RED[0] : DARK[0], highlight ? RED[1] : DARK[1], highlight ? RED[2] : DARK[2]);
    doc.text(value, cardX + 10, rowY(n) + 6);
  };

  drawRow('Payment / Transaction ID', paymentId, 0);
  drawRow('Amount Donated', `\u20b9 ${Number(amountRupees).toLocaleString('en-IN')}`, 1, true);
  drawRow('Donated To', 'NexZen Foundation', 2);
  drawRow('Purpose', 'Charitable Donation — Education & Social Development', 3);

  y += 70;

  // ── Thank-you message ──
  doc.setFillColor(255, 245, 245);
  doc.setDrawColor(...RED);
  doc.roundedRect(cardX, y, cardW, 26, 3, 3, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...RED);
  doc.text('\u2764  Thank You for Your Generosity!', cardX + 8, y + 10);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...DARK);
  doc.text(
    'Your donation directly empowers students, patients, and communities across West Bengal.',
    cardX + 8, y + 19,
    { maxWidth: cardW - 16 }
  );

  y += 36;

  // ── 80G section ──
  doc.setFillColor(240, 255, 255);
  doc.setDrawColor(...TEAL);
  doc.roundedRect(cardX, y, cardW, 36, 3, 3, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(TEAL[0], TEAL[1], TEAL[2]);
  doc.text('80G Tax Exemption Receipt', cardX + 8, y + 10);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...DARK);
  doc.text(
    'To receive your official 80G tax exemption receipt (Form 10BE), please email us\nyour Full Name, PAN Number, and Postal Address at:',
    cardX + 8, y + 18,
    { maxWidth: cardW - 16 }
  );
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...RED);
  doc.setFontSize(10);
  doc.text('donation@nexzenfoundation.in', cardX + 8, y + 31);

  y += 46;

  // ── Divider ──
  doc.setDrawColor(...LGREY);
  doc.line(cardX, y, cardX + cardW, y);
  y += 8;

  // ── Legal / trust info ──
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...GREY);
  const trustLines = [
    'NexZen Foundation is a registered charitable trust under the Indian Trusts Act.',
    'Registration No: IV-1901-01209-2025  |  NGO Darpan ID: WB/2025/0892907  |  80G Certificate: AAFTN1149JF20261',
    'This is a computer-generated receipt and does not require a physical signature.',
  ];
  trustLines.forEach((line, i) => {
    doc.text(line, W / 2, y + i * 5.5, { align: 'center' });
  });

  // ── Footer band ──
  doc.setFillColor(...RED);
  doc.rect(0, H - 14, W, 14, 'F');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...WHITE);
  doc.text('www.nexzenfoundation.in  |  donation@nexzenfoundation.in', W / 2, H - 6, { align: 'center' });

  // ── Save ──
  doc.save(`NexZen_Donation_Receipt_${paymentId}.pdf`);
}


/* ─── Main Component ─── */
export default function RazorpayButton({ amount }) {
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

  const numericRupees = amount
    ? parseInt(amount.replace(/[₹,]/g, ''), 10)
    : null;

  const amountInPaise = numericRupees && numericRupees >= 1
    ? numericRupees * 100
    : null;

  const openCheckout = () => {
    if (!amountInPaise) {
      alert('Please select or enter a donation amount first.');
      return;
    }

    const options = {
      key: 'rzp_live_StGuTXsWa2VD8P',
      amount: amountInPaise,
      currency: 'INR',
      name: 'NexZen Foundation',
      description: 'Charitable Donation',
      image: '/images/logo.png',
      notes: {
        purpose: 'Charitable Donation',
        trust_reg: 'IV-1901-01209-2025',
        '80g_cert': 'AAFTN1149JF20261',
      },
      theme: { color: '#D42B2B' },
      handler: function (response) {
        // Generate & auto-download PDF receipt
        const now = new Date();
        const date = now.toLocaleDateString('en-IN', {
          day: '2-digit', month: 'long', year: 'numeric',
        });
        generateReceipt({
          paymentId: response.razorpay_payment_id,
          amountRupees: numericRupees,
          date,
        });
      },
      modal: {
        backdropclose: false,
        escape: true,
      },
    };

    const openRzp = () => {
      if (window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (resp) {
          alert(`Payment failed. Please try again.\nReason: ${resp.error.description}`);
        });
        rzp.open();
      } else {
        setTimeout(openRzp, 500);
      }
    };

    openRzp();
  };

  const btnLabel = numericRupees && numericRupees >= 1
    ? `Donate \u20b9${numericRupees.toLocaleString('en-IN')}`
    : 'Donate Now';

  return (
    <button
      onClick={openCheckout}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        background: amountInPaise
          ? 'linear-gradient(135deg, #D42B2B, #a81e1e)'
          : 'linear-gradient(135deg, #aaa, #888)',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        padding: '0.9rem 2rem',
        fontSize: '1rem',
        fontWeight: 700,
        cursor: amountInPaise ? 'pointer' : 'not-allowed',
        boxShadow: amountInPaise ? '0 4px 15px rgba(212,43,43,0.35)' : 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        marginTop: '0.5rem',
        width: '100%',
        letterSpacing: '0.3px',
        opacity: amountInPaise ? 1 : 0.6,
      }}
      onMouseEnter={e => {
        if (!amountInPaise) return;
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,43,43,0.4)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = amountInPaise
          ? '0 4px 15px rgba(212,43,43,0.35)'
          : 'none';
      }}
    >
      <Heart size={17} fill="white" />
      {btnLabel}
    </button>
  );
}

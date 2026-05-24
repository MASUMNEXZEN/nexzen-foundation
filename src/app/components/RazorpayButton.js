'use client';
import { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

export default function RazorpayButton({ amount }) {
  const scriptLoaded = useRef(false);

  // Load Razorpay Checkout.js once
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

  // Parse selected amount → paise (Razorpay uses paise, 1 INR = 100 paise)
  const numericRupees = amount
    ? parseInt(amount.replace(/[₹,]/g, ''), 10)
    : null;

  const amountInPaise = numericRupees && numericRupees >= 1
    ? numericRupees * 100
    : null;

  const openCheckout = () => {
    // Guard: don't open without a valid amount
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
        alert(
          `🙏 Thank you for your donation!\n\nPayment ID: ${response.razorpay_payment_id}\n\nYou will receive your 80G receipt within 7 working days.`
        );
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
    ? `Donate ₹${numericRupees.toLocaleString('en-IN')}`
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
        boxShadow: amountInPaise
          ? '0 4px 15px rgba(212,43,43,0.35)'
          : 'none',
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

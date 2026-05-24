'use client';
import { Heart } from 'lucide-react';

export default function RazorpayButton({ amount }) {
  // Parse the selected amount to a number (strip ₹ and commas)
  const numericAmount = amount && amount !== 'custom'
    ? parseInt(amount.replace(/[₹,]/g, ''), 10)
    : null;

  // Razorpay Payment Page ID (from your dashboard)
  const PAYMENT_PAGE_ID = 'pl_Ssp8Bd08o10mVS';

  const handleClick = () => {
    // Build the Razorpay hosted payment page URL
    // Razorpay Payment Pages accept `amount` as a query param (in rupees)
    let url = `https://rzp.io/l/${PAYMENT_PAGE_ID}`;
    if (numericAmount) {
      url += `?amount=${numericAmount}`;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        background: 'linear-gradient(135deg, #D42B2B, #a81e1e)',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        padding: '0.9rem 2rem',
        fontSize: '1rem',
        fontWeight: 700,
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(212,43,43,0.35)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        marginTop: '0.5rem',
        width: '100%',
        letterSpacing: '0.3px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,43,43,0.4)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(212,43,43,0.35)';
      }}
    >
      <Heart size={17} fill="white" />
      {numericAmount ? `Donate ₹${numericAmount.toLocaleString('en-IN')}` : 'Donate Now'}
    </button>
  );
}

'use client';
import { useEffect, useRef } from 'react';

export default function RazorpayButton() {
  const formRef = useRef(null);

  useEffect(() => {
    // Ensure the script is only injected once
    if (formRef.current && formRef.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.setAttribute('data-payment_button_id', 'pl_Ssp8Bd08o10mVS');
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
      <form ref={formRef}></form>
    </div>
  );
}

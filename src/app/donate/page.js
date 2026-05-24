'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Heart, Building, QrCode, ShieldCheck, ArrowRight, CreditCard, BadgeCheck, FileText, Plus } from 'lucide-react';
import RazorpayButton from '../components/RazorpayButton';

const donationTiers = [
  { amount: '₹500', impact: 'Provides stationery kits to 5 students' },
  { amount: '₹1,000', impact: 'Sponsors a student\'s month of coaching' },
  { amount: '₹5,000', impact: 'Funds a student\'s monthly living stipend' },
  { amount: '₹10,000', impact: 'Powers a rural health camp for 50+ patients' },
];

const donateFAQs = [
  { q: 'Is my donation tax-deductible?', a: 'Yes! NexZen Foundation is certified under Section 80G of the Income Tax Act (Certificate No. AAFTN1149JF20261). You will receive an official receipt and Form 10BE for your tax filing.' },
  { q: 'How quickly will I receive a receipt?', a: 'A digital receipt is sent to your email within 24 hours of your donation. Physical copies are dispatched within 7 working days on request.' },
  { q: 'Can I sponsor a specific student or programme?', a: 'Yes! Reach out to us at info@nexzenfoundation.in with your intent and we will coordinate a dedicated sponsorship agreement for you.' },
  { q: 'Do you accept cheque or DD donations?', a: 'Yes. Cheques and Demand Drafts should be drawn in favour of "NexZen Foundation" and mailed to our Murshidabad office. Please inform us at info@nexzenfoundation.in after sending.' },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/hero_donate.png")', minHeight: '45vh' }}>
        <div className="page-hero-overlay"></div>
        <div className="container text-center page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>MAKE AN IMPACT</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>Support Our Mission</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '550px', margin: '0 auto 1.5rem', animationDelay: '0.3s', opacity: 0 }}>
            Your contribution directly empowers a student, treats a patient, or builds a smart classroom.
          </p>
          <div className="animate-fade-in" style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', animationDelay: '0.45s', opacity: 0 }}>
            <span style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)' }}>
              <ShieldCheck size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />80G Certified · AAFTN1149JF20261
            </span>
            <span style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)' }}>
              <FileText size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />Reg. IV-1901-01209-2025
            </span>
          </div>
        </div>
      </section>

      <section className="container section-padding">
        <div className="about-section-grid">
          {/* Left — Why Donate */}
          <div className="reveal">
            <div className="section-label">WHY DONATE</div>
            <h2 className="section-title">Your Donation's Real Impact</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
              We operate with minimal administrative overhead — maximum funds reach the ground. Every rupee you give directly funds a programme.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {donationTiers.map(tier => (
                <ImpactItem key={tier.amount} title={tier.amount} text={tier.impact} />
              ))}
            </div>

            {/* Fundraising Progress */}
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--nex-charcoal)' }}>FY 2025–26 Impact Fund</span>
                <span style={{ color: 'var(--nex-red)', fontWeight: 700 }}>Growing</span>
              </div>
              <div className="fundraising-bar-wrap">
                <div className="fundraising-bar-fill"></div>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--nex-grey-500)', marginTop: '0.5rem' }}>
                Every contribution helps us reach more students and communities this year.
              </p>
            </div>

            {/* Trust signals */}
            <div className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', borderLeft: '4px solid var(--nex-teal)' }}>
              <ShieldCheck size={32} color="var(--nex-teal)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--nex-charcoal)', display: 'block', fontSize: '1rem' }}>Tax Deduction Under Sec. 80G</strong>
                <span style={{ color: 'var(--nex-grey-500)', fontSize: '0.95rem' }}>Cert. No. AAFTN1149JF20261 · You'll receive Form 10BE within 7 days</span>
              </div>
            </div>
          </div>

          {/* Right — Payment Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Razorpay Card */}
            <div className="card reveal" style={{ padding: '2.5rem', border: '2px solid var(--nex-red)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--nex-red), #FF6B6B)' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--nex-red)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CreditCard size={24} color="white" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Pay Online Instantly</h3>
                  <span style={{ color: 'var(--nex-grey-500)', fontSize: '0.875rem' }}>Credit/Debit Card · Net Banking · UPI · Wallets</span>
                </div>
              </div>

              {/* Amount selector */}
              <div style={{ marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--nex-grey-700)', marginBottom: '0.75rem' }}>Select Amount</p>
                <div className="donation-amounts">
                  {['₹500', '₹1,000', '₹5,000', '₹10,000'].map(amt => (
                    <button
                      key={amt}
                      className={`donation-amount-btn ${selectedAmount === amt ? 'selected' : ''}`}
                      onClick={() => setSelectedAmount(amt)}
                    >
                      {amt}
                    </button>
                  ))}
                  <button
                    className={`donation-amount-btn ${selectedAmount === 'custom' ? 'selected' : ''}`}
                    onClick={() => setSelectedAmount('custom')}
                  >
                    Custom
                  </button>
                </div>
                {selectedAmount && donationTiers.find(t => t.amount === selectedAmount) && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--nex-teal)', fontWeight: 500, marginTop: '0.5rem' }}>
                    ✓ {donationTiers.find(t => t.amount === selectedAmount)?.impact}
                  </p>
                )}
              </div>

              <RazorpayButton />
            </div>

            {/* Bank Transfer */}
            <div className="card reveal reveal-delay-1" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--nex-red-light)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building size={24} color="var(--nex-red)" />
                </div>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Bank Transfer (NEFT / RTGS)</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <DetailRow label="Account Name" value="NexZen Foundation" />
                <DetailRow label="Account No." value="8218788698" />
                <DetailRow label="Bank" value="Indian Bank" />
                <DetailRow label="Branch" value="Eroali" />
                <DetailRow label="IFSC" value="IDIB000E509" />
              </div>
            </div>

            {/* UPI Payment */}
            <div className="card reveal reveal-delay-2" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--nex-red-light)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <QrCode size={24} color="var(--nex-red)" />
                </div>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>UPI Payment</h3>
              </div>
              <div className="responsive-flex-row" style={{ alignItems: 'flex-start' }}>
                <img
                  src="/images/qr_upi.png"
                  alt="UPI QR Code — NexZen Foundation"
                  style={{ width: '140px', height: '140px', borderRadius: 'var(--radius-md)', border: '2px solid var(--nex-grey-200)', flexShrink: 0, objectFit: 'cover' }}
                />
                <div>
                  <p style={{ color: 'var(--nex-grey-500)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Scan the QR code, or pay using our UPI ID:</p>
                  <div style={{ background: 'var(--nex-grey-50)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--nex-grey-200)', fontWeight: 700, fontSize: '1rem', color: 'var(--nex-charcoal)', fontFamily: 'monospace' }}>
                    nexzenfoundation@indianbk
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--nex-grey-400)', marginTop: '0.5rem' }}>Works with Google Pay, PhonePe, Paytm & all UPI apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--nex-grey-50)', padding: '5rem 0', borderTop: '1px solid var(--nex-grey-200)' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <div className="section-label" style={{ paddingLeft: 0 }}>COMMON QUESTIONS</div>
            <h2 className="section-title">Donation FAQs</h2>
          </div>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <FAQAccordion faqs={donateFAQs} />
          </div>
        </div>
      </section>
    </>
  );
}

function ImpactItem({ title, text }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <div style={{ background: 'var(--nex-red-light)', minWidth: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Heart size={18} color="var(--nex-red)" />
      </div>
      <div>
        <strong style={{ fontSize: '1.05rem', color: 'var(--nex-charcoal)', display: 'block' }}>{title}</strong>
        <span style={{ color: 'var(--nex-grey-500)', fontSize: '0.95rem' }}>{text}</span>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--nex-grey-100)' }}>
      <span style={{ color: 'var(--nex-grey-500)' }}>{label}</span>
      <strong style={{ color: 'var(--nex-charcoal)' }}>{value}</strong>
    </div>
  );
}

export function FAQAccordion({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            {faq.q}
            <div className="faq-icon"><Plus size={16} /></div>
          </button>
          <div className="faq-answer"><p>{faq.a}</p></div>
        </div>
      ))}
    </div>
  );
}

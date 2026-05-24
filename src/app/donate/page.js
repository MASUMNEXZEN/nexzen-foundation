import Link from 'next/link';
import RazorpayButton from '../components/RazorpayButton';
import { Heart, Building, QrCode, ShieldCheck, ArrowRight, CreditCard } from 'lucide-react';

export default function Donate() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/hero_donate.png")', minHeight: '45vh' }}>
        <div className="page-hero-overlay"></div>
        <div className="container text-center page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>MAKE AN IMPACT</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>Support Our Mission</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '550px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            Your contribution directly empowers a student, treats a patient, or builds a community.
          </p>
        </div>
      </section>

      <section className="container section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {/* Left — Why Donate */}
          <div className="reveal">
            <div className="section-label">WHY DONATE</div>
            <h2 className="section-title">Your Impact</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              We operate with minimum administrative overhead, ensuring that maximum funds reach the ground. By donating, you are investing in the future of Bengal.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <ImpactItem title="₹5,000" text="Sponsors a student's monthly living stipend under the Savitribai Phule Scholarship." />
              <ImpactItem title="₹10,000" text="Funds a rural health camp providing free medicines for 50+ patients." />
              <ImpactItem title="₹50,000" text="Provides a complete digital classroom setup for a rural school." />
            </div>
            
            <div className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', borderLeft: '4px solid var(--nex-teal)' }}>
              <ShieldCheck size={32} color="var(--nex-teal)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--nex-charcoal)', display: 'block', fontSize: '1rem' }}>Tax Exemption Available</strong>
                <span style={{ color: 'var(--nex-grey-500)', fontSize: '0.95rem' }}>Donations exempt under Section 80G of the Income Tax Act, 1961.</span>
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
                  <h3 style={{ fontSize: '1.35rem', margin: 0 }}>Pay Online instantly</h3>
                  <span style={{ color: 'var(--nex-grey-500)', fontSize: '0.9rem' }}>Credit Card, Debit Card, Netbanking, UPI</span>
                </div>
              </div>
              
              <RazorpayButton />
            </div>
            <div className="card reveal reveal-delay-1" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--nex-red-light)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building size={24} color="var(--nex-red)" />
                </div>
                <h3 style={{ fontSize: '1.35rem', margin: 0 }}>Bank Transfer</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <DetailRow label="Account Name" value="NexZen Foundation" />
                <DetailRow label="Account No." value="8218788698" />
                <DetailRow label="Bank" value="Indian Bank" />
                <DetailRow label="Branch" value="Eroali" />
                <DetailRow label="IFSC" value="IDIB000E509" />
              </div>
            </div>

            <div className="card reveal reveal-delay-2" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--nex-red-light)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <QrCode size={24} color="var(--nex-red)" />
                </div>
                <h3 style={{ fontSize: '1.35rem', margin: 0 }}>UPI Payment</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ width: '130px', height: '130px', background: 'var(--nex-grey-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)', border: '2px dashed var(--nex-grey-200)', flexShrink: 0 }}>
                  <QrCode size={56} color="var(--nex-grey-400)" />
                </div>
                <div>
                  <p style={{ color: 'var(--nex-grey-500)', marginBottom: '0.75rem' }}>Scan the QR or use our UPI ID:</p>
                  <div style={{ background: 'var(--nex-grey-50)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--nex-grey-200)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--nex-charcoal)', fontFamily: 'monospace' }}>
                    nexzenfoundation@indianbk
                  </div>
                </div>
              </div>
            </div>
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

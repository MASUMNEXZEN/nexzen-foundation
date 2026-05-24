import { ShieldCheck, Landmark, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Leadership() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561431_121.jpg")', minHeight: '45vh' }}>
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.7) 100%)' }}></div>
        <div className="container text-center page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>OUR PEOPLE</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>Leadership & Governance</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '550px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            Guided by experience, driven by compassion.
          </p>
        </div>
      </section>

      {/* Board */}
      <section className="container section-padding text-center">
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <div className="section-label" style={{ paddingLeft: 0 }}>BOARD OF TRUSTEES</div>
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle centered">
            Eminent personalities from academia, law, medicine, and social service who provide strategic direction.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          <ProfileCard name="Mansur Habibullah" role="President" desc="Provides visionary leadership and strategic direction to the foundation." delay="1" />
          <ProfileCard name="Md Shah Nawaz" role="Secretary" desc="Oversees operations, administration, and implementation of core initiatives." delay="2" />
          <ProfileCard name="Sk Imtiaj Ahmed" role="Treasurer" desc="Manages financial planning, governance, and transparent fund utilization." delay="3" />
          <ProfileCard name="Abdul Aziz" role="Trustee" desc="Key advisor supporting grassroots initiatives and community outreach." delay="4" />
        </div>
      </section>

      {/* Governance */}
      <section style={{ background: 'linear-gradient(180deg, var(--nex-grey-50) 0%, white 100%)', padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <div className="section-label" style={{ paddingLeft: 0 }}>ACCOUNTABILITY</div>
            <h2 className="section-title">Commitment to Transparency</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <GovCard icon={<ShieldCheck size={28} />} title="Audit & Compliance" text="Our accounts are audited annually by reputed statutory auditors. Fully compliant with all state and central trust regulations." delay="1" />
            <GovCard icon={<Landmark size={28} />} title="Tax Exemption" text="Registered under Section 80G and 12A of the Income Tax Act, 1961, providing tax benefits to our donors." delay="2" />
            <GovCard icon={<Users size={28} />} title="Impact Reporting" text="Detailed quarterly impact reports and financial disclosures maintain absolute transparency." delay="3" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--nex-charcoal)', padding: '5rem 0' }}>
        <div className="container text-center">
          <h2 className="reveal" style={{ color: 'white', fontSize: '2.25rem', marginBottom: '1rem' }}>Want to Join Our Team?</h2>
          <p className="reveal reveal-delay-1" style={{ color: 'var(--nex-grey-400)', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
            We are always looking for passionate people to join our cause.
          </p>
          <Link href="/contact" className="reveal reveal-delay-2 btn-primary">Contact Us <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}

function ProfileCard({ name, role, desc, delay }) {
  return (
    <div className={`card reveal reveal-delay-${delay}`} style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--nex-grey-100), var(--nex-grey-200))',
        margin: '0 auto 1.5rem auto',
        border: '3px solid white',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        color: 'var(--nex-grey-400)',
        fontFamily: 'var(--font-serif)',
      }}>
        {name.charAt(0)}
      </div>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{name}</h3>
      <div style={{ color: 'var(--nex-red)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{role}</div>
      <p style={{ color: 'var(--nex-grey-500)', fontSize: '0.95rem', lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

function GovCard({ icon, title, text, delay }) {
  return (
    <div className={`card card-accent reveal reveal-delay-${delay}`} style={{ padding: '2.5rem' }}>
      <div style={{ marginBottom: '1.5rem', background: 'var(--nex-red-light)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--nex-red)' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: 'var(--nex-grey-500)', lineHeight: 1.7 }}>{text}</p>
    </div>
  );
}

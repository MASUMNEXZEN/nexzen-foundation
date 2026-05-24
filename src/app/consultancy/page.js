'use client';
import Link from 'next/link';

import { GraduationCap, Building2, ChevronRight, Star, ShieldCheck, Zap } from 'lucide-react';


export default function ConsultancyLanding() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561429_121.jpg")', minHeight: '52vh' }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content text-center" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0, justifyContent: 'center' }}>NEXZEN CONSULTANCY</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.1s', opacity: 0 }}>
            Empowering Minds.<br />Transforming Institutions.
          </h1>
          <p className="animate-fade-in" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto', animationDelay: '0.25s', opacity: 0 }}>
            Evidence-based advisory for every aspirant and every institution. Choose your path below.
          </p>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="container" style={{ padding: '5rem 0' }}>
        <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}>Who are you consulting for?</h2>
          <p style={{ color: 'var(--nex-grey-500)', fontSize: '1.05rem' }}>Pick your path — each is tailored specifically for you.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', maxWidth: '900px', margin: '0 auto' }}>

          {/* Individual Card */}
          <Link href="/consultancy/individual" style={{ textDecoration: 'none' }}>
            <div className="card reveal" style={{ padding: '3rem 2.5rem', textAlign: 'center', border: '2px solid transparent', cursor: 'pointer', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--nex-red)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: 'linear-gradient(90deg, var(--nex-red), #FF6B6B)' }} />
              <div style={{ background: 'var(--nex-red-light)', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.75rem', color: 'var(--nex-red)' }}>
                <GraduationCap size={40} />
              </div>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--nex-charcoal)' }}>I am a Student / Individual</h2>
              <div style={{ display: 'inline-block', background: 'var(--nex-red)', color: 'white', fontSize: '0.8rem', fontWeight: 800, padding: '0.25rem 0.9rem', borderRadius: '50px', marginBottom: '0.75rem', letterSpacing: '0.5px' }}>COMPLETELY FREE</div>
              <p style={{ color: 'var(--nex-grey-500)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Career mapping, college selection, board advisory, entrance exam strategy, scholarship guidance — personalised for your journey.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem', textAlign: 'left' }}>
                {['Personalised Career Mapping', 'College Selection (Govt & Private)', 'NEET / WBJEE / CLAT / JENPAS Strategy', 'Board & Distance Education Advisory', 'Scholarship & Financial Aid Research'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <ChevronRight size={15} color="var(--nex-red)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--nex-grey-700)' }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, var(--nex-red), #a81e1e)', color: 'white', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem' }}>
                Get Individual Guidance <ChevronRight size={16} />
              </div>
            </div>
          </Link>

          {/* Institutional Card */}
          <Link href="/consultancy/institutional" style={{ textDecoration: 'none' }}>
            <div className="card reveal" style={{ padding: '3rem 2.5rem', textAlign: 'center', border: '2px solid transparent', cursor: 'pointer', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: 'linear-gradient(90deg, #2563EB, #60A5FA)' }} />
              <div style={{ background: '#EFF6FF', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.75rem', color: '#2563EB' }}>
                <Building2 size={40} />
              </div>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--nex-charcoal)' }}>I represent an Institution</h2>
              <p style={{ color: 'var(--nex-grey-500)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Digital transformation, academic systems, compliance, student development, and institutional branding — comprehensive support for your school or college.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem', textAlign: 'left' }}>
                {['Smart Campus & Digital Upgradation', 'NAAC / Accreditation Advisory', 'Student Counselling Programmes', 'POCSO & Safety Compliance', 'Institutional Branding & Rankings'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <ChevronRight size={15} color="#2563EB" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--nex-grey-700)' }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #2563EB, #1e40af)', color: 'white', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem' }}>
                Get Institutional Support <ChevronRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Trust signals */}
      <section style={{ background: 'var(--nex-grey-50)', padding: '3rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: <ShieldCheck size={22} />, text: 'Zero Commission Policy — we never accept institutional referral fees' },
            { icon: <Star size={22} />, text: 'Initial consultation is always complimentary, no commitment required' },
            { icon: <Zap size={22} />, text: 'Income-sensitive fees — no student is turned away for financial reasons' },
          ].map(t => (
            <div key={t.text} className="reveal" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--nex-red)', flexShrink: 0, marginTop: '2px' }}>{t.icon}</div>
              <p style={{ margin: 0, fontSize: '0.925rem', color: 'var(--nex-grey-700)', lineHeight: 1.7 }}>{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

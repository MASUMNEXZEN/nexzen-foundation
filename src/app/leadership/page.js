import Link from 'next/link';
import { ShieldCheck, Landmark, Users, ArrowRight, Award } from 'lucide-react';

export const metadata = {
  metadataBase: new URL('https://www.nexzenfoundation.in'),
  title: 'Leadership | NexZen Foundation | Founders & Trustees West Bengal NGO',
  description: 'Meet the leadership team of NexZen Foundation — the founders, trustees, and advisors driving free education consultancy, scholarships, healthcare, and community welfare across West Bengal.',
  keywords: 'NexZen Foundation leadership, NGO founders West Bengal, NexZen trustees, charitable trust leadership India, NGO management West Bengal',
  alternates: { canonical: 'https://www.nexzenfoundation.in/leadership' },
  openGraph: {
    title: 'Leadership | NexZen Foundation West Bengal',
    description: 'Meet the founders and trustees of NexZen Foundation driving community empowerment across West Bengal.',
    url: 'https://www.nexzenfoundation.in/leadership',
    siteName: 'NexZen Foundation',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Leadership | NexZen Foundation', description: 'Founders and trustees of West Bengal NGO NexZen Foundation.' },
  title: 'Leadership & Governance | NexZen Foundation',
  description: 'Meet the Board of Trustees guiding NexZen Foundation — experienced leaders from academia, law, and social service.',
};

const leaders = [
  {
    name: 'Mansur Habibullah',
    role: 'President',
    desc: 'Provides visionary leadership and strategic direction to the foundation. Oversees long-term planning and institutional partnerships.',
    gradient: 'linear-gradient(135deg, #D42B2B, #FF6B6B)',
    ring: '#D42B2B',
    badgeBg: '#FDE8E8',
    badgeColor: '#D42B2B',
  },
  {
    name: 'Md Shah Nawaz',
    role: 'Secretary',
    desc: 'Oversees day-to-day operations, administration, and implementation of all core initiatives across 8 districts.',
    gradient: 'linear-gradient(135deg, #0D9488, #5EEAD4)',
    ring: '#0D9488',
    badgeBg: '#E6FAF8',
    badgeColor: '#0D9488',
  },
  {
    name: 'Sk Imtiaj Ahmed',
    role: 'Treasurer',
    desc: 'Manages financial planning, governance, compliance, and transparent fund utilization for every programme.',
    gradient: 'linear-gradient(135deg, #C09000, #FCD34D)',
    ring: '#C09000',
    badgeBg: '#FEF9E7',
    badgeColor: '#92700C',
  },
  {
    name: 'Abdul Aziz',
    role: 'Trustee',
    desc: 'Key advisor supporting grassroots field initiatives, community outreach, and local partnership development.',
    gradient: 'linear-gradient(135deg, #4338CA, #818CF8)',
    ring: '#4338CA',
    badgeBg: '#EEF2FF',
    badgeColor: '#4338CA',
  },
];

export default function Leadership() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561431_121.jpg")', minHeight: '45vh' }}>
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.72) 100%)' }}></div>
        <div className="container text-center page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>OUR PEOPLE</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>Leadership & Governance</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: '550px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            Guided by experience, driven by compassion, united by purpose.
          </p>
        </div>
      </section>

      {/* Board */}
      <section className="container section-padding text-center">
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <div className="section-label" style={{ paddingLeft: 0 }}>BOARD OF TRUSTEES</div>
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle centered">
            Eminent personalities from academia, law, medicine, and social service who provide strategic direction to NexZen Foundation.
          </p>
        </div>

        <div className="grid-4-col">
          {leaders.map((l, i) => (
            <div key={l.name} className={`card reveal reveal-delay-${i + 1}`} style={{ padding: '2.5rem 2rem', textAlign: 'center', transition: 'transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out)' }}>
              {/* Avatar with gradient ring */}
              <div
                className="leader-avatar"
                style={{ background: l.gradient, '--ring-color': l.ring }}
              >
                {l.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--nex-charcoal)' }}>{l.name}</h3>
              <div className="leader-role-badge" style={{ '--badge-bg': l.badgeBg, '--badge-color': l.badgeColor }}>
                {l.role}
              </div>
              <p style={{ color: 'var(--nex-grey-500)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Governance */}
      <section style={{ background: 'linear-gradient(180deg, var(--nex-grey-50) 0%, white 100%)', padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <div className="section-label" style={{ paddingLeft: 0 }}>ACCOUNTABILITY</div>
            <h2 className="section-title">Commitment to Transparency</h2>
            <p className="section-subtitle centered">
              We hold ourselves to the highest standards of governance and public accountability.
            </p>
          </div>
          <div className="grid-3-col">
            <GovCard icon={<ShieldCheck size={28} />} title="Audit & Compliance" text="Annual accounts independently audited. Fully compliant with all state and central trust regulations. First audit scheduled Q1 2026." delay="1" color="var(--nex-red)" />
            <GovCard icon={<Landmark size={28} />} title="Tax Exemption (80G)" text="Registered under Section 80G (Cert. AAFTN1149JF20261) and Section 12A of the Income Tax Act, providing tax benefits to all donors." delay="2" color="var(--nex-teal)" />
            <GovCard icon={<Users size={28} />} title="Impact Reporting" text="Detailed quarterly impact reports and full financial disclosures published on our Transparency page for public scrutiny." delay="3" color="var(--nex-gold)" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--nex-charcoal), #1a1a2e)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(212,43,43,0.06)' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(212,43,43,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
            <Award size={28} color="var(--nex-red)" />
          </div>
          <h2 className="reveal" style={{ color: 'white', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>Want to Join Our Team?</h2>
          <p className="reveal reveal-delay-1" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '500px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem' }}>
            We are always looking for passionate individuals — volunteers, advisors, and partners — to join our cause.
          </p>
          <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get Involved <ArrowRight size={18} /></Link>
            <Link href="/donate" className="btn-secondary">Support Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function GovCard({ icon, title, text, delay, color }) {
  return (
    <div className={`card reveal reveal-delay-${delay}`} style={{ padding: '2.5rem', borderTop: `4px solid ${color}`, transition: 'transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out)' }}>
      <div style={{ marginBottom: '1.5rem', background: color === 'var(--nex-red)' ? 'var(--nex-red-light)' : color === 'var(--nex-teal)' ? '#E6FAF8' : '#FEF9E7', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.85rem', color: 'var(--nex-charcoal)' }}>{title}</h3>
      <p style={{ color: 'var(--nex-grey-500)', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>{text}</p>
    </div>
  );
}

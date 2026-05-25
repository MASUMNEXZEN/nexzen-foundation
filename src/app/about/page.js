import Link from 'next/link';
import { BadgeCheck, ShieldCheck, FileText, Eye, Lightbulb, Heart, Globe, BookOpen } from 'lucide-react';

export const metadata = {
  metadataBase: new URL('https://www.nexzenfoundation.in'),
  title: 'About NexZen Foundation | Registered NGO West Bengal | Trust Reg IV-1901-01209-2025',
  description: 'NexZen Foundation is a registered charitable trust (Reg: IV-1901-01209-2025) established in West Bengal. Empowering communities through free education consultancy, scholarships, healthcare camps, and social welfare across West Bengal since 2025.',
  keywords: 'NexZen Foundation about, NGO West Bengal, charitable trust West Bengal, registered NGO India, education NGO West Bengal, free consultancy NGO, 80G certified NGO, NexZen Foundation history',
  alternates: { canonical: 'https://www.nexzenfoundation.in/about' },
  openGraph: {
    title: 'About NexZen Foundation | Registered NGO West Bengal',
    description: 'Learn about NexZen Foundation - a registered charitable trust empowering communities through free education, healthcare, and social welfare in West Bengal.',
    url: 'https://www.nexzenfoundation.in/about',
    siteName: 'NexZen Foundation',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'About NexZen Foundation | NGO West Bengal', description: 'Registered charitable trust empowering West Bengal communities through education and healthcare.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561432_121.jpg")', minHeight: '50vh' }}>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>ABOUT US</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>Who We Are</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', animationDelay: '0.3s', opacity: 0 }}>
            A new-generation charitable trust building bridges between potential and opportunity in West Bengal.
          </p>
        </div>
      </section>

      {/* Trust Credentials Banner */}
      <div style={{ background: 'linear-gradient(135deg, var(--nex-charcoal), #1a1a2e)', padding: '1.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
            <TrustBadge icon={<FileText size={16} />} label="Trust Reg. No." value="IV-1901-01209-2025" />
            <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.12)' }}></div>
            <TrustBadge icon={<BadgeCheck size={16} />} label="NGO Darpan ID" value="WB/2025/0892907" />
            <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.12)' }}></div>
            <TrustBadge icon={<ShieldCheck size={16} />} label="80G Certificate" value="AAFTN1149JF20261" />
            <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.12)' }}></div>
            <TrustBadge icon={<Globe size={16} />} label="Established" value="12 August 2025" />
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="container section-padding">
        <div className="about-section-grid">
          <div className="reveal">
            <div className="section-label">OUR JOURNEY</div>
            <h2 className="section-title">Our Story</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              The NexZen Foundation was born out of a simple yet profound realization: potential is equally distributed, but opportunity is not. We serve those whom no other institution consistently reaches — rural families, minority communities, and first-generation learners.
            </p>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: 'var(--nex-grey-500)' }}>
              Registered on 12th August 2025 in Murshidabad, we began with a singular focus: to ensure that geography, economic background, and social identity are no longer barriers to quality education and professional advancement.
            </p>
            <p style={{ color: 'var(--nex-grey-500)' }}>
              Our goal is to ensure that educational access translates into proportionate professional mobility and economic agency for every community we serve.
            </p>
          </div>

          <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
            <img src="/images/6093388120406561431_121.jpg" alt="Foundation in action" style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', position: 'relative', zIndex: 2 }} />
            <div style={{ position: 'absolute', top: '-16px', right: '-16px', bottom: '16px', left: '16px', border: '3px solid var(--nex-teal)', borderRadius: 'var(--radius-xl)', zIndex: 1, opacity: 0.3 }}></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: 'var(--nex-grey-50)', padding: '6rem 0', borderTop: '1px solid var(--nex-grey-200)' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ paddingLeft: 0 }}>OUR PURPOSE</div>
            <h2 className="section-title">Mission & Vision</h2>
          </div>
          <div className="grid-2-col">
            <div className="card reveal" style={{ padding: '3rem', borderLeft: '4px solid var(--nex-red)' }}>
              <div style={{ marginBottom: '1.5rem', background: 'var(--nex-red-light)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Lightbulb size={28} color="var(--nex-red)" />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--nex-grey-700)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                To democratize access to quality education, professional training, and essential social services, empowering individuals — especially female and first-generation learners — to break the cycle of poverty and achieve self-reliance.
              </p>
            </div>
            <div className="card reveal reveal-delay-2" style={{ padding: '3rem', borderLeft: '4px solid var(--nex-teal)' }}>
              <div style={{ marginBottom: '1.5rem', background: '#E6FAF8', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Eye size={28} color="var(--nex-teal)" />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--nex-grey-700)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                An educated, self-reliant West Bengal — where every community, regardless of its social or economic starting point, participates fully and confidently in the opportunities of a modern State.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="container section-padding">
        <div className="about-section-grid">
          <div className="reveal">
            <div className="section-label">OUR MILESTONES</div>
            <h2 className="section-title">Foundation Timeline</h2>
            <p style={{ color: 'var(--nex-grey-500)', marginBottom: '3rem' }}>
              Young in years, but purposeful in every step we have taken since Day One.
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">August 2025</div>
                <div className="timeline-title">Foundation Registered</div>
                <p className="timeline-text">NexZen Foundation formally registered as a Charitable Trust (Reg. IV-1901-01209-2025) in Murshidabad, West Bengal.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">September 2025</div>
                <div className="timeline-title">NGO Darpan Registration</div>
                <p className="timeline-text">Registered on NGO Darpan portal (ID: WB/2025/0892907), establishing official government recognition.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">2025</div>
                <div className="timeline-title">80G Certification Granted</div>
                <p className="timeline-text">Received 80G certification (AAFTN1149JF20261) enabling donors to claim tax deductions, building long-term donor trust.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" style={{ borderColor: 'var(--nex-teal)' }}></div>
                <div className="timeline-year" style={{ color: 'var(--nex-teal)' }}>Coming Soon</div>
                <div className="timeline-title">First Scholarship Round</div>
                <p className="timeline-text">Savitri Bai Phule Shiksha Scholarship 2026 — first cohort of beneficiaries to be announced across 8 districts.</p>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="section-label">CORE VALUES</div>
            <h2 className="section-title">What Drives Us</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              <ValueItem num="01" title="Equity First" text="We prioritize those with the least access to opportunity — not those who are easiest to serve." color="var(--nex-red)" />
              <ValueItem num="02" title="Radical Transparency" text="Our financials, operations, and outcomes are open for public scrutiny. Trust is earned through disclosure." color="var(--nex-teal)" />
              <ValueItem num="03" title="Community Co-Design" text="Programmes are built with communities, not just for them. Local insight drives every decision." color="var(--nex-gold)" />
              <ValueItem num="04" title="Long-term Impact" text="We reject short-term metrics. We measure success in careers built, families lifted, and generations transformed." color="var(--nex-charcoal)" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--nex-charcoal), #1a1a2e)', padding: '5rem 0' }}>
        <div className="container text-center">
          <h2 className="reveal" style={{ color: 'white', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>Be Part of This Movement</h2>
          <p className="reveal reveal-delay-1" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
            Whether you donate, volunteer, or simply spread the word — every act of support counts.
          </p>
          <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/donate" className="btn-primary">Donate Now ♥</Link>
            <Link href="/contact" className="btn-secondary">Get Involved</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustBadge({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
        {icon} {label}
      </div>
      <div style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>{value}</div>
    </div>
  );
}

function ValueItem({ num, title, text, color }) {
  return (
    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, color, opacity: 0.4, lineHeight: 1, flexShrink: 0, width: '2.5rem' }}>{num}</div>
      <div>
        <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem', color: 'var(--nex-charcoal)' }}>{title}</h4>
        <p style={{ color: 'var(--nex-grey-500)', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>{text}</p>
      </div>
    </div>
  );
}



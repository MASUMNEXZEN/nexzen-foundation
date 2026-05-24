import Link from 'next/link';
import {
  ArrowRight, GraduationCap, HeartPulse, Building2, ChevronRight,
  Activity, Users, Globe2, Sparkles, HeartHandshake, School,
  ShieldCheck, BadgeCheck, FileText, Quote, BookOpen
} from 'lucide-react';

export const metadata = {
  title: 'NexZen Foundation | Empowering Communities, Transforming Futures',
  description: 'NexZen Foundation is a registered charitable trust empowering rural West Bengal through education, healthcare, and community development across 8 districts.',
};

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url("/images/hero_school.png")',
            backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,26,26,0.93) 0%, rgba(26,26,26,0.75) 100%)' }} />

        <div className="container hero-content text-center">
          <div className="hero-badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="pulse-dot"></span> Empowering Rural West Bengal Since 2025
          </div>

          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Building <span className="text-highlight">Brighter</span> Futures, Together
          </h1>

          <p className="hero-desc animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            NexZen Foundation is a registered charitable trust transforming lives through equitable education, accessible healthcare, and holistic community development across 8 districts of West Bengal.
          </p>

          <div className="hero-cta-group animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <Link href="/programmes" className="btn-primary">
              Our Programmes <ArrowRight size={18} />
            </Link>
            <Link href="/donate" className="btn-secondary">
              Support Our Cause
            </Link>
          </div>
        </div>

        <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.55s', opacity: 0 }}>
          <div className="container">
            <div className="hero-stats-grid">
              <div className="stat-card">
                <div className="stat-icon-wrap" style={{ color: 'var(--nex-red)' }}><Activity size={22} /></div>
                <div className="stat-number" data-count="8">0</div>
                <div className="stat-label">Districts Covered</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrap" style={{ color: 'var(--nex-teal)' }}><Users size={22} /></div>
                <div className="stat-number" data-count="1500+">0</div>
                <div className="stat-label">Lives Impacted</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrap" style={{ color: 'var(--nex-gold)' }}><Globe2 size={22} /></div>
                <div className="stat-number" data-count="6">0</div>
                <div className="stat-label">Core Programmes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST CREDENTIALS STRIP ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--nex-charcoal), #1a1a2e)', padding: '1.25rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
            <TrustItem icon={<FileText size={14} />} label="Trust Reg." value="IV-1901-01209-2025" />
            <Divider />
            <TrustItem icon={<BadgeCheck size={14} />} label="Darpan ID" value="WB/2025/0892907" />
            <Divider />
            <TrustItem icon={<ShieldCheck size={14} />} label="80G Cert." value="AAFTN1149JF20261" />
          </div>
        </div>
      </section>

      {/* ── INTRO / MISSION ── */}
      <section className="container section-padding">
        <div className="grid-2-col" style={{ alignItems: 'center' }}>
          <div className="reveal">
            <div className="section-label">OUR MISSION</div>
            <h2 className="section-title">Rooted in Compassion, Driven by Action.</h2>
            <p style={{ color: 'var(--nex-grey-500)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Established on 12th August 2025 in Murshidabad, NexZen Foundation aims to bridge the gap between potential and opportunity in rural West Bengal — ensuring geography, economic background, and social identity are never barriers to a better future.
            </p>
            <p style={{ color: 'var(--nex-grey-500)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              From scholarships for meritorious students to free medical camps for the underserved, our work is guided by transparency, equity, and sustainable impact.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Tax Exempt Donations (80G Certified)',
                'Grassroots Focus in Murshidabad & Beyond',
                'Transparent Fund Utilization & Reporting'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500, color: 'var(--nex-charcoal)' }}>
                  <div style={{ background: 'var(--nex-red-light)', color: 'var(--nex-red)', borderRadius: '50%', padding: '0.35rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sparkles size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="link-arrow">Read our full story <ArrowRight size={18} /></Link>
          </div>

          <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
            <img src="/images/hero_social.png" alt="NexZen Foundation — Community Outreach" style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }} />
            <div className="floating-card-abs" style={{ position: 'absolute', bottom: '-1.25rem', left: '-1.25rem', background: 'white', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', zIndex: 2 }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--nex-red)', lineHeight: 1, fontFamily: 'var(--font-serif)' }}>2025</div>
              <div style={{ fontWeight: 600, color: 'var(--nex-charcoal)', fontSize: '0.85rem' }}>Foundation Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES ── */}
      <section style={{ background: 'var(--nex-grey-50)' }} className="section-padding">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <div className="section-label" style={{ paddingLeft: 0 }}>WHAT WE DO</div>
            <h2 className="section-title">Our Areas of Impact</h2>
            <p className="section-subtitle centered">
              Six targeted programmes designed to create measurable, sustainable change in rural West Bengal.
            </p>
          </div>

          <div className="grid-3-col">
            <FocusCard
              icon={<GraduationCap size={30} />}
              title="Scholarships"
              desc="Financial aid including Savitri Bai Phule & NTSE scholarships for meritorious rural students."
              link="/programmes/scholarships"
              delay="1"
            />
            <FocusCard
              icon={<HeartPulse size={30} />}
              title="Healthcare"
              desc="Free medical camps, blood donation drives, and health awareness in underserved communities."
              link="/programmes/healthcare"
              delay="2"
            />
            <FocusCard
              icon={<School size={30} />}
              title="Smart Bangla Classroom"
              desc="Upgrading rural school infrastructure with NEP 2020-aligned digital classrooms and SDG 4-compliant learning frameworks."
              link="/programmes/school-upgradation"
              delay="3"
            />
            <FocusCard
              icon={<Building2 size={30} />}
              title="IPEC"
              desc="Establishing and supporting professional colleges to enhance rural higher education access."
              link="/programmes/ipec"
              delay="1"
            />
            <FocusCard
              icon={<BookOpen size={30} />}
              title="Consultancy"
              desc="Academic and career guidance to help students navigate higher education and professional pathways."
              link="/programmes/consultancy"
              delay="2"
            />
            <FocusCard
              icon={<HeartHandshake size={30} />}
              title="Social Services"
              desc="Winter relief, disaster response, and comprehensive community welfare initiatives."
              link="/programmes/social-services"
              delay="3"
            />
          </div>

          <div className="text-center reveal" style={{ marginTop: '3.5rem' }}>
            <Link href="/programmes" className="btn-outline">Explore All Programmes <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT STORY ── */}
      <section className="impact-story-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <div className="section-label" style={{ paddingLeft: 0, color: 'rgba(255,255,255,0.4)' }}>VOICES OF IMPACT</div>
            <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>Why This Work Matters</h2>
          </div>

          <div className="impact-story-card reveal">
            <div className="impact-story-avatar">NF</div>
            <div>
              <div className="impact-story-quote">
                Every child in rural Bengal deserves the chance to dream without limits. NexZen Foundation exists to dismantle the barriers between a child's potential and their future. We don't just give aid — we build pathways.
              </div>
              <div className="impact-story-meta">
                <div>
                  <div className="impact-story-name">NexZen Foundation</div>
                  <div className="impact-story-role">Founding Vision Statement, August 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="container section-padding">
        <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
          <div className="section-label" style={{ paddingLeft: 0 }}>FROM THE FIELD</div>
          <h2 className="section-title">Our Work in Pictures</h2>
          <p className="section-subtitle centered">
            Real moments from our community outreach, education sessions, and healthcare camps.
          </p>
        </div>

        <div className="reveal gallery-preview-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }}>
          {[
            { src: '/images/6093388120406561429_121.jpg', alt: 'Community Outreach' },
            { src: '/images/6093388120406561432_121.jpg', alt: 'Interactive Session' },
            { src: '/images/hero_healthcare.png', alt: 'Healthcare Camp' },
            { src: '/images/6093388120406561434_121.jpg', alt: 'Planning Session' },
          ].map((img, i) => (
            <div key={i} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} />
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '2.5rem' }}>
          <Link href="/gallery" className="link-arrow" style={{ fontSize: '1.05rem' }}>
            View Full Gallery <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── LEADERSHIP PREVIEW ── */}
      <section style={{ background: 'var(--nex-grey-50)' }} className="section-padding">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ paddingLeft: 0 }}>OUR PEOPLE</div>
            <h2 className="section-title">Meet the Leadership</h2>
            <p className="section-subtitle centered">
              Experienced professionals from academia, law, and social service guiding NexZen Foundation.
            </p>
          </div>

          <div className="grid-4-col">
            {[
              { name: 'Mansur Habibullah', role: 'President', gradient: 'linear-gradient(135deg, #D42B2B, #FF6B6B)' },
              { name: 'Md Shah Nawaz', role: 'Secretary', gradient: 'linear-gradient(135deg, #0D9488, #5EEAD4)' },
              { name: 'Sk Imtiaj Ahmed', role: 'Treasurer', gradient: 'linear-gradient(135deg, #C09000, #FCD34D)' },
              { name: 'Abdul Aziz', role: 'Trustee', gradient: 'linear-gradient(135deg, #4338CA, #818CF8)' },
            ].map((l, i) => (
              <div key={l.name} className={`card reveal reveal-delay-${i + 1}`} style={{ padding: '2.25rem 1.5rem', textAlign: 'center' }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%', margin: '0 auto 1rem auto',
                  background: l.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', fontWeight: 700, color: 'white', fontFamily: 'var(--font-serif)'
                }}>
                  {l.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--nex-charcoal)' }}>{l.name}</h4>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--nex-grey-500)', textTransform: 'uppercase', letterSpacing: '1px' }}>{l.role}</div>
              </div>
            ))}
          </div>

          <div className="text-center reveal" style={{ marginTop: '2.5rem' }}>
            <Link href="/leadership" className="link-arrow" style={{ fontSize: '1.05rem' }}>
              View Full Leadership Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-padding">
        <div className="container">
          <div className="reveal" style={{
            background: 'linear-gradient(135deg, var(--nex-teal), #0f766e)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(3rem, 6vw, 5rem)',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.08, transform: 'translate(20%, -30%)' }}>
              <HeartPulse size={300} />
            </div>

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.25rem' }}>Make a Difference Today</h2>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Your contribution directly funds education, medical care, and community development.
                Donations are 100% transparent and eligible for 80G tax benefits.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/donate" className="btn-primary" style={{ background: 'white', color: 'var(--nex-teal)', boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}>
                  Donate Now <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Reusable Components ── */

function TrustItem({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
      <div style={{ color: 'var(--nex-red)', display: 'flex' }}>{icon}</div>
      <div>
        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.2 }}>{label}</div>
        <div style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700, fontSize: '0.85rem', lineHeight: 1.3 }}>{value}</div>
      </div>
    </div>
  );
}

function Divider() {
  return <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.1)' }} />;
}

function FocusCard({ icon, title, desc, link, delay }) {
  return (
    <div className={`card focus-card reveal reveal-delay-${delay}`} style={{ padding: '2.25rem' }}>
      <div className="focus-card-icon" style={{
        width: '60px', height: '60px', borderRadius: '14px',
        background: 'var(--nex-red-light)', color: 'var(--nex-red)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.25rem', transition: 'all 0.3s var(--ease-out)'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--nex-charcoal)' }}>{title}</h3>
      <p style={{ color: 'var(--nex-grey-500)', lineHeight: 1.65, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{desc}</p>
      <Link href={link} className="link-arrow">
        Learn more <ChevronRight size={16} />
      </Link>
    </div>
  );
}

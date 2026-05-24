import Link from 'next/link';
import { School, Monitor, Library, Globe2, BookOpen, Target, GraduationCap, ArrowRight, Layers, Users, Lightbulb, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Smart Bangla Classroom Programme | NEP 2020 & SDG 4 Aligned | NexZen Foundation',
  description: 'A NEP 2020-aligned, SDG 4-compliant digital classroom programme transforming rural school infrastructure to build an equitable, future-ready India by 2047.',
};

export default function SchoolUpgradation() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/hero_school.png")', minHeight: '50vh' }}>
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.93) 0%, rgba(26,26,26,0.72) 100%)' }}></div>
        <div className="container page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: '720px' }}>
            <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.5)', paddingLeft: 0 }}>PILLAR VI · NEP 2020 ALIGNED</div>
            <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1.25rem', animationDelay: '0.15s', opacity: 0 }}>
              Smart Bangla Classroom Programme
            </h1>
            <p className="animate-fade-in" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', animationDelay: '0.3s', opacity: 0, lineHeight: 1.7 }}>
              A future-ready classroom transformation framework aligned with the National Education Policy 2020, UN Sustainable Development Goal 4, and India's Vision 2047 — ensuring every rural learner has equitable access to quality, technology-enhanced education.
            </p>
          </div>
        </div>
      </section>

      {/* Alignment Badges */}
      <section style={{ background: 'linear-gradient(135deg, var(--nex-charcoal), #1a1a2e)', padding: '1.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
            <AlignBadge icon={<BookOpen size={16} />} label="NEP 2020" value="Foundational Literacy & Numeracy" />
            <Sep />
            <AlignBadge icon={<Globe2 size={16} />} label="SDG 4" value="Quality Education for All" />
            <Sep />
            <AlignBadge icon={<Target size={16} />} label="Vision 2047" value="Viksit Bharat · Developed India" />
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="container section-padding">
        <div className="grid-2-col" style={{ alignItems: 'center' }}>
          <div className="reveal">
            <div className="section-label">THE FRAMEWORK</div>
            <h2 className="section-title">3-Zone Classroom Architecture</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem', color: 'var(--nex-grey-500)' }}>
              The Smart Bangla Classroom Programme reimagines the rural school experience through a structured 3-Zone model that goes beyond hardware — embedding pedagogical redesign, mother-tongue multilingualism, and 21st-century skills directly into the learning environment.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--nex-grey-500)' }}>
              Aligned with NEP 2020's emphasis on foundational literacy, experiential learning, and equitable access, each zone addresses a critical dimension of educational transformation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {['NEP 2020 §4.2', 'SDG Target 4.1', 'SDG Target 4.a', 'NCF 2023'].map(tag => (
                <span key={tag} style={{ background: 'var(--nex-red-light)', color: 'var(--nex-red)', fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.85rem', borderRadius: '50px', letterSpacing: '0.5px' }}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
            <img src="/images/hero_school.png" alt="Smart Bangla Classroom — Digital Infrastructure" style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }} />
          </div>
        </div>
      </section>

      {/* 3 Zones */}
      <section style={{ background: 'var(--nex-grey-50)' }} className="section-padding">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <div className="section-label" style={{ paddingLeft: 0 }}>THREE ZONES</div>
            <h2 className="section-title">Each Zone, One Mission</h2>
            <p className="section-subtitle centered">
              A holistic approach where technology, language, and enrichment work together to produce future-ready citizens.
            </p>
          </div>

          <div className="grid-3-col">
            <ZoneCard
              zone="1"
              icon={<Monitor size={28} />}
              title="Smart Academic Classroom"
              color="var(--nex-red)"
              bg="var(--nex-red-light)"
              nep="NEP §4.2 — Foundational Literacy & Numeracy"
              sdg="SDG 4.1 — Free, equitable, quality primary & secondary education"
              features={[
                '4K Interactive Flat Panels with 3D STEM visualization',
                'Curriculum-aligned digital libraries (NCERT, WBBSE)',
                'MCQ practice banks for competitive exams (NEET, WBSSC, NTSE)',
                'AI-assisted adaptive learning paths per student level',
              ]}
              delay="1"
            />
            <ZoneCard
              zone="2"
              icon={<Users size={28} />}
              title="Language & Mentorship Hub"
              color="var(--nex-teal)"
              bg="#E6FAF8"
              nep="NEP §4.11 — Multilingualism & Power of Language"
              sdg="SDG 4.6 — Youth literacy & numeracy skills"
              features={[
                'Communicative English & functional Bangla/Hindi/Urdu labs',
                'Live global mentorship via video conferencing',
                'Corporate-standard presentation & interview readiness',
                'Mother-tongue-based multilingual education (NEP Ch.4)',
              ]}
              delay="2"
            />
            <ZoneCard
              zone="3"
              icon={<Lightbulb size={28} />}
              title="Enrichment & Life Skills Platform"
              color="var(--nex-gold)"
              bg="#FEF9E7"
              nep="NEP §11 — Holistic & Multidisciplinary Education"
              sdg="SDG 4.7 — Education for sustainable development & global citizenship"
              features={[
                'Civic education, constitutional values & digital citizenship',
                'Women\'s economic incubation & entrepreneurship modules',
                'Psychological resilience & well-being support (NEP §5.5)',
                'Environmental awareness & SDG literacy curriculum',
              ]}
              delay="3"
            />
          </div>
        </div>
      </section>

      {/* NEP 2020 Alignment Detail */}
      <section className="container section-padding">
        <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
          <div className="section-label" style={{ paddingLeft: 0 }}>POLICY ALIGNMENT</div>
          <h2 className="section-title">How We Map to National Education Policy 2020</h2>
          <p className="section-subtitle centered">
            Every component of the Smart Bangla Classroom Programme is architected to fulfil specific NEP 2020 mandates and SDG 4 targets.
          </p>
        </div>

        <div className="grid-2-col">
          <PolicyCard
            icon={<Layers size={24} />}
            title="5+3+3+4 Curricular Structure"
            text="Our content platform is structured to support the new 5+3+3+4 curricular framework, with age-appropriate digital content from Foundational Stage (ages 3–8) through Secondary Stage (ages 14–18)."
            ref_text="NEP 2020, Chapter 4"
            color="var(--nex-red)"
            delay="1"
          />
          <PolicyCard
            icon={<GraduationCap size={24} />}
            title="Equitable & Inclusive Education"
            text="Specifically designed for Socially and Economically Disadvantaged Groups (SEDGs) — including rural, female, and minority learners — to close the opportunity gap through technology-enabled access."
            ref_text="NEP 2020, Chapter 6"
            color="var(--nex-teal)"
            delay="2"
          />
          <PolicyCard
            icon={<BarChart3 size={24} />}
            title="Technology Integration in Education"
            text="Leveraging the National Education Technology Forum (NETF) vision — deploying interactive panels, digital content repositories, and adaptive learning software to bridge the urban-rural digital divide."
            ref_text="NEP 2020, Chapter 23"
            color="var(--nex-gold)"
            delay="3"
          />
          <PolicyCard
            icon={<Globe2 size={24} />}
            title="SDG 4 & Vision 2047"
            text="Contributing to India's commitment to UN SDG 4 (Quality Education) and the Viksit Bharat 2047 vision — ensuring every citizen, regardless of geography, has access to world-class foundational education."
            ref_text="UN SDG 4 · Vision 2047"
            color="var(--nex-blue)"
            delay="4"
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--nex-charcoal), #1a1a2e)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(212,43,43,0.05)' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(212,43,43,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
            <School size={28} color="var(--nex-red)" />
          </div>
          <h2 className="reveal" style={{ color: 'white', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>Adopt a Smart Bangla Classroom</h2>
          <p className="reveal reveal-delay-1" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '540px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Partner with us to bring NEP 2020-aligned digital classrooms to underserved schools in rural Bengal. Every classroom transforms 200+ students per year.
          </p>
          <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/donate" className="btn-primary">Fund a Classroom <ArrowRight size={18} /></Link>
            <Link href="/contact" className="btn-secondary">Partner With Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Components ── */

function AlignBadge({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
      <div style={{ color: 'var(--nex-red)', display: 'flex' }}>{icon}</div>
      <div>
        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.2 }}>{label}</div>
        <div style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700, fontSize: '0.82rem', lineHeight: 1.3 }}>{value}</div>
      </div>
    </div>
  );
}

function Sep() {
  return <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.1)' }} />;
}

function ZoneCard({ zone, icon, title, color, bg, nep, sdg, features, delay }) {
  return (
    <div className={`card reveal reveal-delay-${delay}`} style={{ padding: '2.5rem', borderTop: `4px solid ${color}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {icon}
        </div>
        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color, letterSpacing: '1.5px', textTransform: 'uppercase' }}>ZONE {zone}</div>
          <h3 style={{ fontSize: '1.15rem', margin: 0, color: 'var(--nex-charcoal)' }}>{title}</h3>
        </div>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--nex-grey-600)', lineHeight: 1.55 }}>
            <span style={{ color, fontWeight: 700, flexShrink: 0 }}>→</span>
            {f}
          </li>
        ))}
      </ul>

      <div style={{ background: 'var(--nex-grey-50)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, color, letterSpacing: '0.5px' }}>{nep}</div>
        <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--nex-grey-500)' }}>{sdg}</div>
      </div>
    </div>
  );
}

function PolicyCard({ icon, title, text, ref_text, color, delay }) {
  return (
    <div className={`card reveal reveal-delay-${delay}`} style={{ padding: '2.25rem', borderLeft: `4px solid ${color}` }}>
      <div style={{ marginBottom: '1.25rem', background: color === 'var(--nex-red)' ? 'var(--nex-red-light)' : color === 'var(--nex-teal)' ? '#E6FAF8' : color === 'var(--nex-gold)' ? '#FEF9E7' : '#EEF2FF', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--nex-charcoal)' }}>{title}</h3>
      <p style={{ color: 'var(--nex-grey-500)', lineHeight: 1.7, margin: '0 0 1rem 0', fontSize: '0.95rem' }}>{text}</p>
      <div style={{ fontSize: '0.72rem', fontWeight: 700, color, letterSpacing: '0.5px', textTransform: 'uppercase' }}>📖 {ref_text}</div>
    </div>
  );
}

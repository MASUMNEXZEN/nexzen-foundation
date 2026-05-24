import Link from 'next/link';
import {
  Building2, Laptop, Brain, ClipboardList, ShieldCheck, Award,
  CheckCircle, ChevronRight, Mail, MessageSquare, BarChart3,
  FileText, Target, TrendingUp, Users, Zap
} from 'lucide-react';

export const metadata = {
  title: 'Institutional Consultancy | NexZen Foundation',
  description: 'Digital upgradation, NAAC advisory, student counselling, safety compliance and institutional branding for schools and colleges across West Bengal.',
};

const stats = [
  { value: '200+', label: 'Institutions Served' },
  { value: '5',    label: 'Service Pillars' },
  { value: '100%', label: 'Outcome-Committed' },
  { value: '₹0',   label: 'Baseline Audit Fee' },
];

const institutionsServed = [
  'Government Schools (State-aided)',
  'Madrasa (Traditional & Reformed)',
  'Private English-Medium Schools',
  'Junior Colleges (Class XI–XII)',
  'Residential & Boarding Schools',
  'Vocational Training Centres',
  'Convent & Missionary Schools',
  'Tribal & Rural Community Schools',
  'Model Madrasah Institutions',
  'Special Education Institutions',
];

const pillars = [
  {
    icon: <Laptop size={28} />,
    title: 'Digital Upgradation & Smart Campus',
    color: '#2563EB',
    bg: '#EFF6FF',
    summary: 'We assess the institution\'s current digital posture and design a phased, budget-sensitive upgrade plan.',
    points: [
      'Smart classroom infrastructure — projectors, interactive boards, audio-visual systems',
      'School ERP and Management Information System (MIS) implementation',
      'Customised mobile application development for student communication',
      'Professional website with student portal, notice board & admission management',
      'Student attendance tracking and progress monitoring systems',
      'Online examination and assessment platforms',
      'Library management and digital e-resource access',
      'Official email domain setup and G-Suite/Microsoft 365 integration',
      'Social media strategy, content calendar & digital presence establishment',
      'Teacher ICT training, upskilling workshops & ongoing digital support',
    ],
  },
  {
    icon: <Brain size={28} />,
    title: 'Counselling & Student Development',
    color: '#059669',
    bg: '#ECFDF5',
    summary: 'Sustainable institutional excellence is built on student well-being, career clarity, and mental resilience.',
    points: [
      'Annual career counselling drives for Classes IX through XII',
      'Entrance exam awareness: WBJEE, NEET, JENPAS, ANM/GNM, CLAT and more',
      'Scholarship awareness and application assistance camps',
      'Mental health and stress management workshops',
      'Menstrual hygiene and health literacy programmes for girls\' schools',
      'Anti-ragging, anti-bullying, and safe-space awareness sessions',
      'Leadership development programmes and student government formation',
    ],
  },
  {
    icon: <ClipboardList size={28} />,
    title: 'Academic System Management & Process Excellence',
    color: '#7C3AED',
    bg: '#F5F3FF',
    summary: 'We help institutions build systems that reduce administrative burden, improve consistency, and enable data-driven academic decisions.',
    points: [
      'Academic calendar design and curriculum pacing plans',
      'Assessment and examination reform — internal, formative, and summative',
      'Teacher performance review frameworks and professional development planning',
      'SOPs for admissions, fee collection, and records management',
      'NAAC self-study report preparation and grading improvement advisory',
      'Accreditation documentation support and compliance tracking',
      'Parent-teacher engagement frameworks and community outreach strategies',
    ],
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Infrastructure, Safety & Compliance',
    color: '#DC2626',
    bg: '#FEF2F2',
    summary: 'Physical and regulatory standards form the foundation of institutional credibility.',
    points: [
      'School building safety audit and compliance checklist review',
      'Fire safety, disaster preparedness, and evacuation planning',
      'POCSO compliance review and child protection policy drafting',
      'Mid-day meal programme quality monitoring framework',
      'Water, sanitation, and hygiene (WASH) improvement roadmap',
      'Hostel management standards for residential schools',
    ],
  },
  {
    icon: <Award size={28} />,
    title: 'Branding, Rankings & Recognition',
    color: '#D97706',
    bg: '#FFFBEB',
    summary: 'Many excellent institutions remain invisible simply because they have not communicated their strengths effectively.',
    points: [
      'Institutional branding, prospectus design, and visual identity development',
      'Website and social media content strategy',
      'Application support for national recognition programmes and awards',
      'Participation strategy for state-level educational ranking frameworks',
      'Alumni network re-engagement and donor stewardship planning',
    ],
  },
];

const engagementSteps = [
  { step: '01', title: 'Free Initial Consultation', desc: 'A 30–60 minute structured conversation — no charge, no commitment — to understand your situation, challenges, and goals.', icon: <MessageSquare size={20} /> },
  { step: '02', title: 'Baseline Assessment', desc: 'We collect and analyse all relevant information: academic records, institutional audit data, and operational reviews.', icon: <BarChart3 size={20} /> },
  { step: '03', title: 'Consultancy Report & Roadmap', desc: 'A detailed written report with findings, recommendations, and a phased action plan with realistic timelines.', icon: <FileText size={20} /> },
  { step: '04', title: 'Implementation Support', desc: 'We remain engaged throughout the execution phase, providing guidance, follow-up sessions, and course corrections.', icon: <Target size={20} /> },
  { step: '05', title: 'Outcome Review', desc: 'At agreed milestones, we measure progress against benchmarks and provide a formal review report documenting improvements.', icon: <TrendingUp size={20} /> },
];

export default function InstitutionalConsultancy() {
  return (
    <div style={{ paddingBottom: '5rem' }}>

      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561429_121.jpg")', minHeight: '52vh' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,40,100,0.88) 0%, rgba(20,40,100,0.35) 100%)' }} />
        <div className="container page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <Link href="/consultancy" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '1rem', textDecoration: 'none' }}>
            ← Back to Consultancy
          </Link>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>FOR SCHOOLS & INSTITUTIONS</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: 'white', marginBottom: '1.25rem', animationDelay: '0.1s', opacity: 0 }}>
            Institutional Consultancy
          </h1>
          <p className="animate-fade-in" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', marginBottom: '2rem', animationDelay: '0.25s', opacity: 0 }}>
            Transforming good schools into standard-setting institutions. Digital upgradation, compliance, counselling, and branding — end-to-end institutional development.
          </p>
          <Link href="/contact" className="animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#2563EB', color: 'white', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', animationDelay: '0.4s', opacity: 0, textDecoration: 'none' }}>
            <MessageSquare size={17} /> Request Baseline Audit
          </Link>
        </div>
      </section>

      {/* Stats */}
      <div style={{ background: '#2563EB', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: 'white' }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Institutions we serve */}
      <section style={{ background: 'var(--nex-grey-50)', padding: '4rem 0' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '2rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>WHO WE WORK WITH</div>
            <h2 className="section-title">Institutions We Serve</h2>
          </div>
          <div className="card reveal" style={{ padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {institutionsServed.map(inst => (
                <div key={inst} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <CheckCircle size={16} color="#2563EB" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--nex-charcoal)', fontWeight: 500 }}>{inst}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="container" style={{ padding: '5rem 0' }}>
        <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>OUR SERVICES</div>
          <h2 className="section-title">The Five Pillars of Institutional Excellence</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--nex-grey-500)', fontSize: '1.05rem' }}>
            Each pillar addresses a distinct dimension of institutional development. We work on all five — or the specific ones your institution needs most.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {pillars.map((pillar, idx) => (
            <div key={pillar.title} className="card reveal" style={{ padding: '2.5rem', borderLeft: `5px solid ${pillar.color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div style={{ background: pillar.bg, borderRadius: '12px', padding: '0.75rem', color: pillar.color, flexShrink: 0 }}>{pillar.icon}</div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: pillar.color, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pillar {idx + 1}</div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{pillar.title}</h3>
                </div>
              </div>
              <p style={{ color: 'var(--nex-grey-500)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>{pillar.summary}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.6rem' }}>
                {pillar.points.map(pt => (
                  <div key={pt} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <ChevronRight size={15} color={pillar.color} style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--nex-grey-700)', lineHeight: 1.6 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section style={{ background: 'var(--nex-grey-50)', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>OUR ENGAGEMENT PROCESS</div>
            <h2 className="section-title">How We Work</h2>
            <p style={{ maxWidth: '540px', margin: '0 auto', color: 'var(--nex-grey-500)' }}>Every engagement begins with a complimentary baseline audit and concludes with a measurable improvement report.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {engagementSteps.map(step => (
              <div key={step.step} className="card reveal text-center" style={{ padding: '2rem 1.5rem' }}>
                <div style={{ background: '#2563EB', color: 'white', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', margin: '0 auto 1rem' }}>{step.step}</div>
                <div style={{ color: '#2563EB', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{step.icon}</div>
                <h4 style={{ fontSize: '0.975rem', marginBottom: '0.75rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--nex-grey-500)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee */}
      <section className="container" style={{ padding: '4rem 0', maxWidth: '620px', margin: '0 auto' }}>
        <div className="card reveal text-center" style={{ padding: '3rem', border: '2px solid #2563EB' }}>
          <div style={{ background: '#EFF6FF', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#2563EB' }}>
            <Building2 size={30} />
          </div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Fee Structure</h3>
          <p style={{ color: 'var(--nex-grey-500)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Project fees are scope-based and quoted only after the complimentary baseline audit.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
            {[
              'Baseline audit: Complimentary',
              'Project fees: Scope-based quotation',
              'Retainer options for long-term support',
              'Government / NGO rate available',
            ].map(f => (
              <div key={f} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <CheckCircle size={16} color="#2563EB" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--nex-grey-700)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #2563EB, #1e40af)', padding: '4rem 0' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', marginBottom: '0.75rem' }}>Request Your Free Baseline Audit</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2rem' }}>No charge. No commitment. A structured review of where your institution stands today — and what it can become.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact" style={{ background: 'white', color: '#2563EB', padding: '0.9rem 2.5rem', borderRadius: '50px', fontWeight: 700, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              <MessageSquare size={18} /> Request Audit
            </Link>
            <a href="mailto:admin@nexzenfoundation.in" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', padding: '0.9rem 2.5rem', borderRadius: '50px', fontWeight: 600, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '2px solid rgba(255,255,255,0.3)', textDecoration: 'none' }}>
              <Mail size={18} /> admin@nexzenfoundation.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

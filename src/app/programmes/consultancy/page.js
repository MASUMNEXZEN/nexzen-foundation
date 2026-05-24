import Link from 'next/link';
import {
  GraduationCap, Building2, BookOpen, Brain, Laptop, Heart,
  ShieldCheck, Users, Star, CheckCircle, ChevronRight,
  Stethoscope, Scale, FlaskConical, Microscope, Calculator,
  Phone, Mail, Globe, Zap, Target, TrendingUp, Award,
  ClipboardList, BarChart3, MessageSquare, FileText, Wifi
} from 'lucide-react';

export const metadata = {
  title: 'Consultancy Services | NexZen Foundation',
  description: 'Expert academic guidance for students and institutions across West Bengal — career mapping, college selection, board advisory, and institutional development.',
};

const stats = [
  { value: '5,000+', label: 'Students Guided' },
  { value: '200+',   label: 'Institutions Served' },
  { value: '15+',    label: 'Exam Streams' },
  { value: '100%',   label: 'Transparent Guidance' },
];

const individualServices = [
  'Personalised Career Mapping',
  'Competitive Exam Strategy Design',
  'Subject Stream Selection (Class XI)',
  'Board & Distance Education Advisory',
  'Government College Selection Guidance',
  'Private College Selection (Cost-Effective)',
  'Medical College Admission Guidance',
  'Engineering College Pathway Planning',
  'Nursing College & ANM/GNM Advisory',
  'Law College & LLB Entrance Strategy',
  'Pharmacy & Para-Medical Advisory',
  'WBJEE / JENPAS / NEET Strategy',
  'Scholarship & Financial Aid Research',
  'Study Plan & Timetable Coaching',
  'Gap Year & Re-Attempt Planning',
  'Post-Graduation & Higher Studies Advisory',
];

const careerExamPoints = [
  'Aptitude and interest profiling using structured assessments',
  'Comprehensive mapping of career options against available streams',
  'Competitive exam identification: NEET, WBJEE, JENPAS, ANM/GNM, Nursing, CLAT, and more',
  'Exam calendar, cut-off analysis, and realistic rank prediction',
  'Preparation strategy: self-study vs. coaching, resources, revision timetable',
  'Mock test performance review and corrective action plans',
];

const boardOptions = [
  { board: 'WBBSE / WBCHSE', note: 'State board — syllabus depth, exam pattern, and recognition scope' },
  { board: 'CBSE', note: 'National board — preferred for JEE/NEET preparation, pan-India recognition' },
  { board: 'ICSE / ISC', note: 'English-medium focus, strong for humanities and overseas higher studies' },
  { board: 'NIOS', note: 'Flexible scheduling for working or gap-year students' },
  { board: 'Netaji Open University', note: "West Bengal's state open university — distance Madhyamik, HS & degree" },
  { board: 'Rabindra Mukta Vidyalaya', note: 'Cost-effective Madhyamik and HS via distance mode' },
];

const govtCollegeParams = [
  { param: 'Cut-off Analysis', detail: 'Historical trends, reservation category analysis, merit-list probability' },
  { param: 'Course Availability', detail: 'Stream-specific seat matrix, lateral entry, combined honours options' },
  { param: 'Infrastructure', detail: 'Library, laboratory, hostel, and campus facility verification' },
  { param: 'Faculty Quality', detail: 'Approved intake vs. overcrowding impact on individual attention' },
  { param: 'Scholarship & Aid', detail: 'Merit scholarships, state scholarships, minority concessions, EMI structures' },
  { param: 'Hospital/Industry Tie-ups', detail: 'For medical/nursing — quality and proximity of attached hospitals' },
  { param: 'Alumni Network', detail: 'Active alumni presence, mentoring culture, peer support during job search' },
  { param: 'Accreditation & Rankings', detail: 'NAAC grade, NIRF ranking, ISO certification — and what they mean' },
];

const streamAdvisory = [
  {
    icon: <Stethoscope size={22} />,
    stream: 'Medical (MBBS / BDS)',
    points: 'Government cut-offs, NEET rank mapping, state vs. management quota, NRI seat trap awareness, NMC accreditation & clinical training quality.',
  },
  {
    icon: <Heart size={22} />,
    stream: 'Nursing (B.Sc / GNM / ANM)',
    points: 'INC approval, hospital attachment quality, hostel safety, WB Nursing Council registration pathway & post-completion job market analysis.',
  },
  {
    icon: <Calculator size={22} />,
    stream: 'Engineering (B.Tech)',
    points: 'WBJEE rank vs. college-tier mapping, branch selection strategy, MAKAUT affiliation assessment & placement-tier classification.',
  },
  {
    icon: <Scale size={22} />,
    stream: 'Law (LLB / BA LLB)',
    points: 'BCI-recognised college list, CLAT vs. state entrance strategy, 3-year vs. 5-year programme trade-offs & internship network availability.',
  },
  {
    icon: <FlaskConical size={22} />,
    stream: 'Pharmacy & Para-Medical',
    points: 'PCI approval, WBCOPD recognition, D.Pharma vs. B.Pharma pathway & evaluation of radiology, OT, and physiotherapy colleges.',
  },
  {
    icon: <BookOpen size={22} />,
    stream: 'Arts, Commerce & Science',
    points: 'University affiliation strength, honours course availability, post-graduation linkage & government vs. aided vs. self-financed comparison.',
  },
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

const institutionalPillars = [
  {
    icon: <Laptop size={28} />,
    title: 'Digital Upgradation & Smart Campus',
    color: '#2563EB',
    bg: '#EFF6FF',
    points: [
      'Smart classroom infrastructure — projectors, interactive boards, audio-visual systems',
      'School ERP and Management Information System (MIS) implementation',
      'Customised mobile application development for student communication',
      'Professional website with student portal, notice board, and admission management',
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
    points: [
      'Annual career counselling drives for students in Classes IX through XII',
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
    points: [
      'Institutional branding, prospectus design, and visual identity development',
      'Website and social media content strategy',
      'Application support for national recognition programmes and educational awards',
      'Participation strategy for state-level educational ranking frameworks',
      'Alumni network re-engagement and donor stewardship planning',
    ],
  },
];

const engagementSteps = [
  {
    step: '01',
    title: 'Free Initial Consultation',
    desc: 'A 30–60 minute structured conversation — no charge, no commitment — to understand your situation, challenges, and goals in detail.',
    icon: <MessageSquare size={22} />,
  },
  {
    step: '02',
    title: 'Baseline Assessment',
    desc: 'We collect and analyse all relevant information: academic records, institutional audit data, or career profile as applicable.',
    icon: <BarChart3 size={22} />,
  },
  {
    step: '03',
    title: 'Consultancy Report & Roadmap',
    desc: 'A detailed written report with findings, recommendations, and a phased action plan with realistic timelines.',
    icon: <FileText size={22} />,
  },
  {
    step: '04',
    title: 'Implementation Support',
    desc: 'We remain engaged throughout the execution phase, providing guidance, follow-up sessions, and course corrections.',
    icon: <Target size={22} />,
  },
  {
    step: '05',
    title: 'Outcome Review',
    desc: 'At agreed milestones, we measure progress against benchmarks and provide a formal review report documenting improvements.',
    icon: <TrendingUp size={22} />,
  },
];

export default function Consultancy() {
  return (
    <div style={{ paddingBottom: '5rem' }}>

      {/* ── Hero ── */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561429_121.jpg")', minHeight: '55vh' }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>PROGRAMME · PILLAR III</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1.25rem', animationDelay: '0.1s', opacity: 0 }}>
            Consultancy Services
          </h1>
          <p className="animate-fade-in" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', marginBottom: '2rem', animationDelay: '0.25s', opacity: 0 }}>
            Empowering minds. Transforming institutions. Evidence-based advisory for individual aspirants and educational institutions across West Bengal.
          </p>
          <div className="animate-fade-in" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', animationDelay: '0.4s', opacity: 0 }}>
            <span style={heroBadge}>Individual · Institutional · Academic · Strategic</span>
            <span style={heroBadge}>Initial Assessment: Complimentary</span>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div style={{ background: 'var(--nex-red)', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'white' }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Who We Are ── */}
      <section className="container section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div className="reveal">
            <div className="section-label">WHO WE ARE</div>
            <h2 className="section-title">Your Compass in a Complex Academic World</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.8 }}>
              NexZen Foundation is a mission-driven educational organisation headquartered in West Bengal, committed to democratising access to quality academic guidance. We bridge the gap between ambition and achievement by combining rigorous domain expertise with a deep understanding of the West Bengal and national education landscape.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              Our consultancy arm provides structured, evidence-based advisory to both individual aspirants and educational institutions — helping them make informed, confident decisions at every crossroads.
            </p>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: <Zap size={20} />, title: 'Evidence-Based Guidance', desc: 'Every recommendation is backed by data, cut-off trends, and real-world outcomes — not hearsay.' },
              { icon: <ShieldCheck size={20} />, title: 'Zero Commission Policy', desc: 'We never accept referral fees or institutional payments. Our advice is unconditionally in your interest.' },
              { icon: <Users size={20} />, title: 'Inclusive & Accessible', desc: 'Income-sensitive fees ensure no student is turned away due to financial constraints.' },
              { icon: <Star size={20} />, title: 'Honest Advice', desc: 'We will tell you which college NOT to join — the advisory most students never receive.' },
            ].map(p => (
              <div key={p.title} className="card reveal" style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--nex-red-light)', borderRadius: '10px', padding: '0.6rem', color: 'var(--nex-red)', flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--nex-charcoal)' }}>{p.title}</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--nex-grey-500)' }}>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ */}
      {/*  SEGMENT A — INDIVIDUAL CONSULTANCY       */}
      {/* ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--nex-grey-50)', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>SEGMENT A</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>Individual Consultancy</h2>
            <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--nex-grey-500)' }}>
              Personalised guidance for every aspirant's unique journey — career mapping, board selection, college advisory, and entrance exam strategy tailored exclusively for each student.
            </p>
          </div>

          {/* Service grid */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.75rem', marginBottom: '4rem' }}>
            {individualServices.map(s => (
              <div key={s} style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '0.9rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--nex-grey-100)' }}>
                <CheckCircle size={16} color="var(--nex-red)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--nex-charcoal)' }}>{s}</span>
              </div>
            ))}
          </div>

          {/* 1. Career & Exam Strategy */}
          <div className="card reveal" style={{ padding: '2.5rem', marginBottom: '2rem', borderLeft: '5px solid var(--nex-red)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--nex-red-light)', borderRadius: '12px', padding: '0.75rem', color: 'var(--nex-red)' }}><Brain size={26} /></div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--nex-red)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Section 1</div>
                <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Career & Exam Strategy Consultancy</h3>
              </div>
            </div>
            <p style={{ marginBottom: '1.25rem', color: 'var(--nex-grey-500)' }}>Career confusion costs students years. Our structured career mapping sessions align a student's strengths, interests, and market realities into a coherent plan.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
              {careerExamPoints.map(p => (
                <div key={p} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <ChevronRight size={16} color="var(--nex-red)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--nex-grey-700)' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Board Advisory */}
          <div className="card reveal" style={{ padding: '2.5rem', marginBottom: '2rem', borderLeft: '5px solid #2563EB' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#EFF6FF', borderRadius: '12px', padding: '0.75rem', color: '#2563EB' }}><BookOpen size={26} /></div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Section 2</div>
                <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Board & Distance Education Advisory</h3>
              </div>
            </div>
            <p style={{ marginBottom: '1.5rem', color: 'var(--nex-grey-500)' }}>Choosing the right board or distance education programme is critical and often misunderstood. We provide objective, parameter-based guidance across all options available in West Bengal and nationally.</p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#EFF6FF' }}>
                    <th style={thStyle}>Board / Programme</th>
                    <th style={thStyle}>What We Evaluate</th>
                  </tr>
                </thead>
                <tbody>
                  {boardOptions.map((b, i) => (
                    <tr key={b.board} style={{ background: i % 2 === 0 ? 'white' : 'var(--nex-grey-50)' }}>
                      <td style={{ ...tdStyle, fontWeight: 600, color: 'var(--nex-charcoal)', whiteSpace: 'nowrap' }}>{b.board}</td>
                      <td style={tdStyle}>{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Government College Selection */}
          <div className="card reveal" style={{ padding: '2.5rem', marginBottom: '2rem', borderLeft: '5px solid #059669' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#ECFDF5', borderRadius: '12px', padding: '0.75rem', color: '#059669' }}><GraduationCap size={26} /></div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Section 3</div>
                <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Government College Selection</h3>
              </div>
            </div>
            <p style={{ marginBottom: '1.5rem', color: 'var(--nex-grey-500)' }}>Government college seats in West Bengal are competitive and data-driven. We use a structured framework to shortlist the best-fit government institutions for each student.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {govtCollegeParams.map(p => (
                <div key={p.param} style={{ background: '#ECFDF5', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem', borderLeft: '3px solid #059669' }}>
                  <div style={{ fontWeight: 700, color: 'var(--nex-charcoal)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{p.param}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--nex-grey-500)' }}>{p.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Stream-Specific Advisory */}
          <div className="card reveal" style={{ padding: '2.5rem', borderLeft: '5px solid #7C3AED' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#F5F3FF', borderRadius: '12px', padding: '0.75rem', color: '#7C3AED' }}><Microscope size={26} /></div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Section 4</div>
                <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Stream-Specific College Advisory</h3>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {streamAdvisory.map(s => (
                <div key={s.stream} style={{ background: '#F5F3FF', borderRadius: 'var(--radius-md)', padding: '1.25rem', borderTop: '3px solid #7C3AED' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', color: '#7C3AED' }}>
                    {s.icon}
                    <strong style={{ fontSize: '0.95rem', color: 'var(--nex-charcoal)' }}>{s.stream}</strong>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--nex-grey-500)', margin: 0, lineHeight: 1.7 }}>{s.points}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ */}
      {/*  SEGMENT B — INSTITUTIONAL CONSULTANCY    */}
      {/* ══════════════════════════════════════════ */}
      <section className="container section-padding">
        <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>SEGMENT B</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>Institutional Consultancy</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--nex-grey-500)' }}>
            Schools and educational institutions across West Bengal face a common challenge: the gap between intent and execution. NexZen Foundation works with school management teams to systematically close those gaps — transforming institutions from functional to genuinely excellent.
          </p>
        </div>

        {/* Institutions served */}
        <div className="card reveal" style={{ padding: '2rem', marginBottom: '3rem', background: 'var(--nex-grey-50)' }}>
          <h3 style={{ marginBottom: '1.25rem', fontSize: '1.1rem' }}>Institutions We Serve</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.6rem' }}>
            {institutionsServed.map(inst => (
              <div key={inst} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={15} color="var(--nex-red)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--nex-charcoal)' }}>{inst}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {institutionalPillars.map((pillar, idx) => (
            <div key={pillar.title} className="card reveal" style={{ padding: '2.5rem', borderLeft: `5px solid ${pillar.color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: pillar.bg, borderRadius: '12px', padding: '0.75rem', color: pillar.color, flexShrink: 0 }}>{pillar.icon}</div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: pillar.color, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pillar {idx + 1}</div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{pillar.title}</h3>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem' }}>
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

      {/* ── How We Work ── */}
      <section style={{ background: 'var(--nex-grey-50)', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>OUR PROCESS</div>
            <h2 className="section-title">How We Work — The NexZen Engagement Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {engagementSteps.map(step => (
              <div key={step.step} className="card reveal text-center" style={{ padding: '2rem 1.5rem', position: 'relative' }}>
                <div style={{ background: 'var(--nex-red)', color: 'white', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', margin: '0 auto 1rem' }}>{step.step}</div>
                <div style={{ color: 'var(--nex-red)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{step.icon}</div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--nex-grey-500)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fee Philosophy ── */}
      <section className="container" style={{ padding: '5rem 0' }}>
        <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>FEE PHILOSOPHY</div>
          <h2 className="section-title">All Fees are Mutually Discussable</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--nex-grey-500)', fontSize: '1.05rem' }}>
            NexZen Foundation operates on the principle that no student should be turned away due to financial constraints. Fees are flexible, income-sensitive, and agreed transparently before any engagement begins.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            {
              title: 'Individual Consultancy',
              icon: <GraduationCap size={28} />,
              color: 'var(--nex-red)',
              bg: 'var(--nex-red-light)',
              items: [
                'Initial session: Complimentary',
                'Subsequent sessions: Discussable',
                'Package rates available for students',
                'Concession for economically weaker sections',
              ],
            },
            {
              title: 'Institutional Consultancy',
              icon: <Building2 size={28} />,
              color: '#2563EB',
              bg: '#EFF6FF',
              items: [
                'Baseline audit: Complimentary',
                'Project fees: Scope-based quotation',
                'Retainer options for long-term support',
                'Government / NGO rate available',
              ],
            },
          ].map(tier => (
            <div key={tier.title} className="card reveal" style={{ padding: '2.5rem', textAlign: 'center', border: `2px solid ${tier.color}` }}>
              <div style={{ background: tier.bg, color: tier.color, width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>{tier.icon}</div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>{tier.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
                {tier.items.map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                    <CheckCircle size={16} color={tier.color} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.925rem', color: 'var(--nex-grey-700)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--nex-red), #a81e1e)', padding: '4rem 0' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>Book Your Free Initial Consultation Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto 2.5rem' }}>
            No charge. No commitment. Just a structured conversation that could change the direction of your journey.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact" style={{ background: 'white', color: 'var(--nex-red)', padding: '0.9rem 2.5rem', borderRadius: '50px', fontWeight: 700, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
              <MessageSquare size={18} /> Book Consultation
            </Link>
            <a href="mailto:admin@nexzenfoundation.in" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', padding: '0.9rem 2.5rem', borderRadius: '50px', fontWeight: 600, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '2px solid rgba(255,255,255,0.3)' }}>
              <Mail size={18} /> admin@nexzenfoundation.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const heroBadge = {
  background: 'rgba(255,255,255,0.12)',
  color: 'rgba(255,255,255,0.85)',
  padding: '0.4rem 1.1rem',
  borderRadius: '50px',
  fontSize: '0.82rem',
  fontWeight: 600,
  border: '1px solid rgba(255,255,255,0.2)',
};

const thStyle = {
  padding: '0.75rem 1rem',
  textAlign: 'left',
  fontWeight: 700,
  fontSize: '0.85rem',
  color: 'var(--nex-charcoal)',
  borderBottom: '2px solid #BFDBFE',
};

const tdStyle = {
  padding: '0.7rem 1rem',
  fontSize: '0.875rem',
  color: 'var(--nex-grey-700)',
  borderBottom: '1px solid var(--nex-grey-100)',
  lineHeight: 1.6,
};

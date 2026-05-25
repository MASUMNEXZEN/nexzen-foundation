import Link from 'next/link';
import {
  GraduationCap, BookOpen, Brain, CheckCircle, ChevronRight,
  Stethoscope, Scale, FlaskConical, Microscope, Calculator, Heart,
  Mail, MessageSquare, ShieldCheck, Zap, Star, Users
} from 'lucide-react';

export const metadata = {
  metadataBase: new URL('https://www.nexzenfoundation.in'),
  title: 'Free Individual Career Consultancy | NEET WBJEE JENPAS Guidance | NexZen Foundation West Bengal',
  description: 'Completely free one-on-one career consultancy for students in West Bengal. NEET, WBJEE, JENPAS, CLAT guidance, college selection, gap year planning, scholarship research, and study plan design. Remote and in-person sessions available.',
  keywords: 'free individual career counselling West Bengal, one on one NEET guidance West Bengal, free WBJEE counselling, gap year planning West Bengal, free study plan West Bengal, college selection free, JENPAS advisory free, NexZen individual consultancy',
  alternates: { canonical: 'https://www.nexzenfoundation.in/consultancy/individual' },
  openGraph: {
    title: 'Free Individual Career Consultancy | NexZen Foundation',
    description: 'Free one-on-one career sessions — NEET, WBJEE, JENPAS, college selection, gap year planning. Available remotely and in-person.',
    url: 'https://www.nexzenfoundation.in/consultancy/individual',
    siteName: 'NexZen Foundation',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Free Career Consultancy | NexZen Foundation', description: 'Free NEET, WBJEE, JENPAS, college selection sessions for West Bengal students.' },
  title: 'Individual Consultancy | NexZen Foundation',
  description: 'Personalised career mapping, college selection, exam strategy, board advisory and scholarship guidance for students and aspirants across West Bengal.',
};

const stats = [
  { value: '5,000+', label: 'Students Guided' },
  { value: '15+',    label: 'Exam Streams' },
  { value: '100%',   label: 'Transparent Guidance' },
  { value: 'FREE',   label: 'Always — No Hidden Fees' },
];

const services = [
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

const careerPoints = [
  'Aptitude and interest profiling using structured assessments',
  'Comprehensive mapping of career options against available streams',
  'Exam identification: NEET, WBJEE, JENPAS, ANM/GNM, Nursing Entrance, CLAT, and more',
  'Exam calendar, cut-off analysis, and realistic rank prediction',
  'Preparation strategy: self-study vs. coaching, resources, revision timetable',
  'Mock test performance review and corrective action plans',
];

const boardOptions = [
  { board: 'WBBSE / WBCHSE', note: 'State board — syllabus depth, exam pattern, and recognition scope' },
  { board: 'CBSE', note: 'Preferred for JEE/NEET preparation, pan-India recognition' },
  { board: 'ICSE / ISC', note: 'English-medium focus, strong for humanities and overseas higher studies' },
  { board: 'NIOS', note: 'Flexible scheduling for working or gap-year students' },
  { board: 'Netaji Open University', note: "West Bengal's state open university — distance Madhyamik, HS & degree" },
  { board: 'Rabindra Mukta Vidyalaya', note: 'Cost-effective Madhyamik and HS via distance mode' },
];

const govtParams = [
  { param: 'Cut-off Analysis', detail: 'Historical trends, reservation category, merit-list probability' },
  { param: 'Course Availability', detail: 'Seat matrix, lateral entry, combined honours options' },
  { param: 'Infrastructure', detail: 'Library, laboratory, hostel, campus facility verification' },
  { param: 'Faculty Quality', detail: 'Approved intake vs. overcrowding impact on attention' },
  { param: 'Scholarship & Aid', detail: 'Merit scholarships, state scholarships, minority concessions, EMI' },
  { param: 'Hospital/Industry Tie-ups', detail: 'Quality and proximity of attached hospitals (medical/nursing)' },
  { param: 'Alumni Network', detail: 'Active alumni presence, mentoring culture, job support' },
  { param: 'Accreditation', detail: 'NAAC grade, NIRF ranking, ISO certification — and what they mean' },
];

const streamAdvisory = [
  { icon: <Stethoscope size={20} />, stream: 'Medical (MBBS / BDS)', points: 'Government cut-offs, NEET rank mapping, state vs. management quota, NRI seat trap awareness, NMC accreditation & clinical training quality.' },
  { icon: <Heart size={20} />, stream: 'Nursing (B.Sc / GNM / ANM)', points: 'INC approval, hospital attachment quality, hostel safety, WB Nursing Council registration pathway & post-completion job market.' },
  { icon: <Calculator size={20} />, stream: 'Engineering (B.Tech)', points: 'WBJEE rank vs. college-tier mapping, branch selection strategy, MAKAUT affiliation & placement-tier classification.' },
  { icon: <Scale size={20} />, stream: 'Law (LLB / BA LLB)', points: 'BCI-recognised colleges, CLAT vs. state strategy, 3-year vs. 5-year trade-offs & internship network availability.' },
  { icon: <FlaskConical size={20} />, stream: 'Pharmacy & Para-Medical', points: 'PCI approval, WBCOPD recognition, D.Pharma vs. B.Pharma pathway & radiology, OT, physiotherapy college evaluation.' },
  { icon: <BookOpen size={20} />, stream: 'Arts, Commerce & Science', points: 'University affiliation, honours course availability, post-graduation linkage & govt vs. aided vs. self-financed comparison.' },
];

const feeItems = [
  'All individual consultancy sessions: Completely Free',
  'No hidden charges, no registration fee, no session fee',
  'No commitment required — consult as many times as needed',
  'Available to every student regardless of financial background',
];

export default function IndividualConsultancy() {
  return (
    <div style={{ paddingBottom: '5rem' }}>

      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561429_121.jpg")', minHeight: '52vh' }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <Link href="/consultancy" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '1rem', textDecoration: 'none' }}>
            ← Back to Consultancy
          </Link>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>FOR STUDENTS & INDIVIDUALS</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: 'white', marginBottom: '1.25rem', animationDelay: '0.1s', opacity: 0 }}>
            Individual Consultancy
          </h1>
          <p className="animate-fade-in" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', marginBottom: '2rem', animationDelay: '0.25s', opacity: 0 }}>
            Personalised guidance for your unique journey — career mapping, college selection, board advisory, and entrance exam strategy tailored exclusively to you.
          </p>
          <Link href="/contact" className="animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--nex-red)', color: 'white', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', animationDelay: '0.4s', opacity: 0, textDecoration: 'none' }}>
            <MessageSquare size={17} /> Book Free Consultation
          </Link>
        </div>
      </section>

      {/* Stats */}
      <div style={{ background: 'var(--nex-red)', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: 'white' }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What we offer */}
      <section style={{ background: 'var(--nex-grey-50)', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>ALL SERVICES</div>
            <h2 className="section-title">What We Offer You</h2>
            <p style={{ maxWidth: '580px', margin: '0 auto', color: 'var(--nex-grey-500)' }}>All services below are <strong>completely free</strong> for individual students and aspirants.</p>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.75rem' }}>
            {services.map(s => (
              <div key={s} style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '0.9rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--nex-grey-100)' }}>
                <CheckCircle size={16} color="var(--nex-red)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--nex-charcoal)' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '5rem 0', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* 1. Career & Exam Strategy */}
        <div className="card reveal" style={{ padding: '2.5rem', borderLeft: '5px solid var(--nex-red)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--nex-red-light)', borderRadius: '12px', padding: '0.75rem', color: 'var(--nex-red)' }}><Brain size={26} /></div>
            <div>
              <div style={sectionTag('#D42B2B')}>Section 1</div>
              <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Career & Exam Strategy</h3>
            </div>
          </div>
          <p style={{ marginBottom: '1.25rem', color: 'var(--nex-grey-500)' }}>Career confusion costs students years. Our structured career mapping sessions align strengths, interests, and market realities into a coherent plan.</p>
          <div style={twoColGrid}>
            {careerPoints.map(p => (
              <div key={p} style={bulletRow}>
                <ChevronRight size={15} color="var(--nex-red)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={bulletText}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Board Advisory */}
        <div className="card reveal" style={{ padding: '2.5rem', borderLeft: '5px solid #2563EB' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#EFF6FF', borderRadius: '12px', padding: '0.75rem', color: '#2563EB' }}><BookOpen size={26} /></div>
            <div>
              <div style={sectionTag('#2563EB')}>Section 2</div>
              <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Board & Distance Education Advisory</h3>
            </div>
          </div>
          <p style={{ marginBottom: '1.5rem', color: 'var(--nex-grey-500)' }}>Choosing the right board or distance programme is critical. We provide objective, parameter-based guidance across all options in West Bengal and nationally.</p>
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
        <div className="card reveal" style={{ padding: '2.5rem', borderLeft: '5px solid #059669' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ECFDF5', borderRadius: '12px', padding: '0.75rem', color: '#059669' }}><GraduationCap size={26} /></div>
            <div>
              <div style={sectionTag('#059669')}>Section 3</div>
              <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Government College Selection</h3>
            </div>
          </div>
          <p style={{ marginBottom: '1.5rem', color: 'var(--nex-grey-500)' }}>Government college seats are competitive and data-driven. We use a structured 8-parameter framework to shortlist the best-fit institutions for each student.</p>
          <div style={twoColGrid}>
            {govtParams.map(p => (
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
              <div style={sectionTag('#7C3AED')}>Section 4</div>
              <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Stream-Specific College Advisory</h3>
            </div>
          </div>
          <div style={twoColGrid}>
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
      </section>

      {/* Why Trust Us */}
      <section style={{ background: 'var(--nex-grey-50)', padding: '4rem 0' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Our Commitment to You</h3>
            <p style={{ color: 'var(--nex-grey-500)' }}>NexZen Foundation never accepts commissions, referral fees, or institutional payments.</p>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: <ShieldCheck size={20} />, title: 'Zero Commission', desc: 'Our advice is unconditionally in your interest.' },
              { icon: <Star size={20} />, title: 'Honest Advisory', desc: 'We tell you which college NOT to join — the advice most never get.' },
              { icon: <Zap size={20} />, title: 'Evidence-Based', desc: 'Every recommendation backed by data and cut-off trends.' },
              { icon: <Users size={20} />, title: 'Always Free', desc: 'Individual consultancy is completely free — every session, every time.' },
            ].map(p => (
              <div key={p.title} className="card reveal" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--nex-red-light)', borderRadius: '10px', padding: '0.6rem', color: 'var(--nex-red)', flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{p.title}</strong>
                  <span style={{ fontSize: '0.875rem', color: 'var(--nex-grey-500)' }}>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee */}
      <section className="container" style={{ padding: '4rem 0', maxWidth: '600px', margin: '0 auto' }}>
        <div className="card reveal text-center" style={{ padding: '3rem', border: '2px solid var(--nex-red)', background: 'var(--nex-red-light)' }}>
          <div style={{ background: 'var(--nex-red)', width: '72px', height: '72px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'white' }}>
            <GraduationCap size={34} />
          </div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--nex-red)', lineHeight: 1, marginBottom: '0.5rem' }}>FREE</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--nex-charcoal)' }}>Individual Consultancy is Completely Free</h3>
          <p style={{ color: 'var(--nex-grey-500)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>No session fees. No registration. No hidden charges. NexZen Foundation believes every student deserves the same quality of guidance — regardless of financial background.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
            {feeItems.map(f => (
              <div key={f} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <CheckCircle size={16} color="var(--nex-red)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--nex-grey-700)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--nex-red), #a81e1e)', padding: '4rem 0' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', marginBottom: '0.75rem' }}>Book Your Free Initial Consultation</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2rem' }}>No charge. No commitment. Just a structured conversation that could change your direction.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact" style={{ background: 'white', color: 'var(--nex-red)', padding: '0.9rem 2.5rem', borderRadius: '50px', fontWeight: 700, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              <MessageSquare size={18} /> Book Consultation
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

const sectionTag = (color) => ({ fontSize: '0.78rem', fontWeight: 600, color, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' });
const twoColGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' };
const bulletRow  = { display: 'flex', gap: '0.6rem', alignItems: 'flex-start' };
const bulletText = { fontSize: '0.9rem', color: 'var(--nex-grey-700)', lineHeight: 1.6 };
const thStyle = { padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: 'var(--nex-charcoal)', borderBottom: '2px solid #BFDBFE' };
const tdStyle = { padding: '0.7rem 1rem', fontSize: '0.875rem', color: 'var(--nex-grey-700)', borderBottom: '1px solid var(--nex-grey-100)', lineHeight: 1.6 };

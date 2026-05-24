'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  GraduationCap, Star, Trophy, Users, BookOpen, Award,
  CheckCircle, ArrowRight, ChevronDown, ChevronUp,
  School, Lightbulb, Target, Shield, Clock, FileText,
  Mail, Phone, Zap, Medal, TrendingUp, Globe
} from 'lucide-react';

const TIERS = [
  { tier: '01', name: 'School Level', desc: 'Conducted at school premises by the Nodal Teacher', who: 'All enrolled & registered students', color: '#EEF2FF', border: '#6366F1', icon: <School size={22} color="#6366F1"/> },
  { tier: '02', name: 'District / Zonal Level', desc: 'Top students from Tier 1 advance to the zonal centre', who: 'Merit-based cut-off from Tier 1', color: '#FFF7ED', border: '#F97316', icon: <Target size={22} color="#F97316"/> },
  { tier: '03', name: 'Regional Level', desc: 'Tier 2 qualifiers compete at the regional level', who: 'Merit-based cut-off from Tier 2', color: '#F0FDF4', border: '#22C55E', icon: <TrendingUp size={22} color="#22C55E"/> },
  { tier: '04', name: 'State Level', desc: 'Grand final — top regional performers compete for scholarships', who: 'Merit-based cut-off from Tier 3', color: '#FFF5F5', border: '#D42B2B', icon: <Trophy size={22} color="#D42B2B"/> },
];

const SUBJECTS = [
  { area: 'Logical Reasoning', what: 'Pattern recognition, sequences, analogies, and logical connections', icon: <Lightbulb size={20} color="#6366F1"/> },
  { area: 'Mathematics', what: 'Arithmetic, numerical ability, and mathematical reasoning — age appropriate', icon: <BookOpen size={20} color="#F97316"/> },
  { area: 'General Awareness', what: 'Current affairs, environment, and general knowledge', icon: <Globe size={20} color="#22C55E"/> },
  { area: 'Mental Ability', what: 'Cognitive skills, visual patterns, abstract thinking, and spatial reasoning', icon: <Zap size={20} color="#D42B2B"/> },
];

const SCHOOL_BENEFITS = [
  { icon: <Shield size={22} color="#059669"/>, title: 'Zero Financial Risk', desc: 'Your school retains Rs.50 per student registered. No investment, no risk — only upside.' },
  { icon: <Trophy size={22} color="#D42B2B"/>,  title: 'School Prestige',    desc: 'Merit lists, medals, and state-level recognition put your institution on the academic map.' },
  { icon: <FileText size={22} color="#6366F1"/>,title: 'Full Support',       desc: 'Question papers, evaluation, results, certificates, and scholarships — all managed by us.' },
  { icon: <Award size={22} color="#F97316"/>,   title: 'Student Recognition',desc: 'Every participant receives a certificate. Toppers receive medals and cash scholarships.' },
  { icon: <Users size={22} color="#059669"/>,   title: 'MoU Partnership',    desc: 'Formal academic collaboration — non-exclusive. You retain all existing affiliations.' },
  { icon: <Star size={22} color="#D42B2B"/>,    title: 'Bilingual Exam',     desc: 'Bilingual question papers (English & Bengali) ensure no student is disadvantaged.' },
];

const SCHOOL_STEPS = [
  { n: '01', action: 'Get in Touch', detail: 'Contact your nearest Nexzen Area / Academic Coordinator or write to us directly at admin@nexzenfoundation.in' },
  { n: '02', action: 'Sign the MoU', detail: 'The Principal or authorised representative signs the formal academic partnership agreement with Nexzen Foundation.' },
  { n: '03', action: 'Designate a Nodal Teacher', detail: 'Appoint a Single Point of Contact (SPOC) for all NTSE coordination — registration, logistics, and communication.' },
  { n: '04', action: 'Register Students', detail: 'Register eligible students from Classes II to IX. Ensure accuracy of all student data before the deadline.' },
  { n: '05', action: 'Collect & Remit Fees', detail: 'Collect ₹249/- per student. Retain your ₹50 administrative share. Remit ₹199/- per student within 7 working days.' },
  { n: '06', action: 'Obtain Parental Consent', detail: 'Collect written parental/guardian consent for all participating students before the examination date.' },
  { n: '07', action: 'Conduct the Examination', detail: 'Receive question papers from the Foundation. Conduct the examination at school premises as per guidelines.' },
  { n: '08', action: 'Hand Over Materials', detail: 'Securely hand over all answer sheets and unused materials to the Foundation\'s authorised representative.' },
  { n: '09', action: 'Celebrate Your Students', detail: 'Receive results, certificates, medals, and scholarship details — and celebrate your students\' achievements.' },
];

const STUDENT_FAQS = [
  { q: 'Who is eligible to appear in NTSE?', a: 'Students enrolled in Classes II to IX in any partner school are eligible. Elementary Level covers Classes II to IV; Secondary Level covers Classes V to IX.' },
  { q: 'Is there negative marking?', a: 'No. There is no negative marking. Students are encouraged to attempt all questions confidently.' },
  { q: 'What is the exam language?', a: 'The question paper is bilingual — available in both English and Bengali — to ensure no student is disadvantaged by language.' },
  { q: 'What will I win?', a: 'Every participant receives a Participation Certificate. Tier qualifiers receive Merit Certificates. Top performers at each tier receive medals. Top 5 students per class at the State Level (Tier 4) receive financial scholarships.' },
  { q: 'How do I register?', a: "Registration is done through your school. Ask your class teacher or school principal about NTSE registration — your school needs to have a formal partnership with Nexzen Foundation first." },
  { q: 'What subjects should I prepare?', a: 'The exam tests Logical Reasoning, Mathematics, General Awareness, and Mental Ability — all at an age-appropriate level for your class.' },
  { q: 'When will the scholarship be disbursed?', a: 'Scholarships are disbursed within 60 days of State Level result declaration, via bank transfer/cheque to the parent or guardian, or as educational support (books, learning kits).' },
];

const SCHOOL_FAQS = [
  { q: 'Does our school need to pay anything?', a: 'No. There is zero financial risk. The school collects ₹249 per student and retains ₹50 as administrative expenses. Only ₹199 per student is remitted to the Foundation.' },
  { q: 'What is the minimum number of students required?', a: 'A minimum of 10 students per class is mandatory for a class to be included in the examination.' },
  { q: "Will this affect our school's existing affiliations?", a: 'Not at all. The MoU is non-exclusive. Your school may retain all existing affiliations, partnerships, and board registrations.' },
  { q: 'Who manages the examination?', a: 'The Foundation manages everything — question papers, evaluation, results, certificates, medals, and scholarship disbursement. The school only needs to conduct the Tier 1 (School Level) examination at its premises.' },
  { q: 'What is the validity of the partnership?', a: 'The MoU is valid for Academic Year 2026–2027. Partnership can be renewed for subsequent academic years.' },
  { q: 'Can a student be disqualified?', a: 'Yes. Any student found using unfair means, impersonating another, or engaging in misconduct shall be immediately disqualified. The Foundation\'s decision on all disciplinary matters is final.' },
];

function AccordionItem({ q, a, open, onClick }) {
  return (
    <div onClick={onClick} style={{ border: '1px solid var(--nex-grey-200)', borderRadius: 'var(--radius-md)', marginBottom: '0.75rem', overflow: 'hidden', cursor: 'pointer', background: open ? '#FFF5F5' : 'white', transition: 'background 0.2s' }}>
      <div style={{ padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontWeight: 600, color: 'var(--nex-charcoal)', fontSize: '0.97rem' }}>{q}</span>
        {open ? <ChevronUp size={18} color="var(--nex-red)" style={{ flexShrink: 0 }}/> : <ChevronDown size={18} color="var(--nex-grey-400)" style={{ flexShrink: 0 }}/>}
      </div>
      {open && (
        <div style={{ padding: '0 1.25rem 1rem', color: 'var(--nex-grey-600)', fontSize: '0.95rem', lineHeight: 1.7, borderTop: '1px solid var(--nex-grey-100)' }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function NTSEPage() {
  const [tab, setTab]     = useState('student');   // 'student' | 'school'
  const [openFaq, setFaq] = useState(null);

  const faqs = tab === 'student' ? STUDENT_FAQS : SCHOOL_FAQS;

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#1a0a0a 100%)', minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* decorative circles */}
        {[
          { w:500, h:500, top:'-150px', right:'-150px', bg:'rgba(212,43,43,0.08)' },
          { w:300, h:300, bottom:'-80px', left:'-80px',  bg:'rgba(99,102,241,0.1)' },
          { w:200, h:200, top:'40%', left:'30%',          bg:'rgba(249,115,22,0.06)' },
        ].map((c, i) => (
          <div key={i} style={{ position:'absolute', width:c.w, height:c.h, top:c.top, bottom:c.bottom, left:c.left, right:c.right, background:c.bg, borderRadius:'50%', pointerEvents:'none' }}/>
        ))}

        <div className="container" style={{ paddingTop: '100px', paddingBottom: '80px', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'rgba(212,43,43,0.15)', border:'1px solid rgba(212,43,43,0.4)', borderRadius:'50px', padding:'0.4rem 1rem', marginBottom:'1.5rem' }}>
            <Star size={14} color="#FF6B6B" fill="#FF6B6B"/>
            <span style={{ color:'#FF6B6B', fontSize:'0.8rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px' }}>NexZen Foundation Presents</span>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:'3rem', alignItems:'center' }}>
            <div>
              <h1 style={{ fontSize:'clamp(2.8rem,6vw,4.5rem)', color:'white', lineHeight:1.05, marginBottom:'0.5rem', fontWeight:900 }}>
                Nexzen Talent<br/>
                <span style={{ color:'#FF6B6B' }}>Search Exam</span>
              </h1>
              <div style={{ fontSize:'clamp(1.2rem,2.5vw,1.6rem)', color:'rgba(255,255,255,0.5)', fontWeight:300, letterSpacing:'4px', textTransform:'uppercase', marginBottom:'1.5rem' }}>
                N · T · S · E &nbsp; 2026–2027
              </div>
              <p style={{ fontSize:'1.15rem', color:'rgba(255,255,255,0.7)', maxWidth:'560px', lineHeight:1.8, marginBottom:'2.5rem' }}>
                India's structured, merit-based talent search examination for Classes II to IX — discovering brilliance, rewarding excellence, and building futures across West Bengal.
              </p>

              {/* Quick stats */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'2rem', marginBottom:'3rem' }}>
                {[
                  { n:'Classes II–IX', l:'Eligible' },
                  { n:'4 Tiers', l:'of Selection' },
                  { n:'40 Scholars', l:'Scholarships' },
                  { n:'Bilingual', l:'Eng + Bengali' },
                ].map(s => (
                  <div key={s.l}>
                    <div style={{ fontSize:'1.4rem', fontWeight:900, color:'#FF6B6B' }}>{s.n}</div>
                    <div style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:'1px' }}>{s.l}</div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
                <button onClick={() => { setTab('student'); document.getElementById('participate').scrollIntoView({ behavior:'smooth' }); }}
                  style={{ background:'linear-gradient(135deg,#D42B2B,#a81e1e)', color:'white', border:'none', borderRadius:'50px', padding:'1rem 2rem', fontSize:'1rem', fontWeight:700, cursor:'pointer', display:'flex', alignItems:'center', gap:'0.5rem', boxShadow:'0 4px 20px rgba(212,43,43,0.4)' }}>
                  <GraduationCap size={18}/> I'm a Student
                </button>
                <button onClick={() => { setTab('school'); document.getElementById('participate').scrollIntoView({ behavior:'smooth' }); }}
                  style={{ background:'rgba(255,255,255,0.1)', color:'white', border:'2px solid rgba(255,255,255,0.3)', borderRadius:'50px', padding:'1rem 2rem', fontSize:'1rem', fontWeight:700, cursor:'pointer', display:'flex', alignItems:'center', gap:'0.5rem', backdropFilter:'blur(10px)' }}>
                  <School size={18}/> I'm a School
                </button>
              </div>
            </div>

            {/* NTSE badge card */}
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem', flexShrink:0 }}>
              <div style={{ width:'180px', height:'180px', background:'linear-gradient(135deg,#D42B2B,#7c1d1d)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 0 60px rgba(212,43,43,0.4), 0 0 120px rgba(212,43,43,0.15)', border:'4px solid rgba(255,255,255,0.1)' }}>
                <div style={{ textAlign:'center' }}>
                  <div style={{ fontSize:'2.2rem', fontWeight:900, color:'white', lineHeight:1 }}>NTSE</div>
                  <div style={{ fontSize:'0.75rem', color:'rgba(255,255,255,0.7)', textTransform:'uppercase', letterSpacing:'2px', marginTop:'4px' }}>2026–27</div>
                </div>
              </div>
              <div style={{ textAlign:'center' }}>
                <div style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1px' }}>Conducted by</div>
                <div style={{ color:'white', fontWeight:700, fontSize:'0.95rem' }}>NexZen Foundation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TAGLINE STRIP ── */}
      <div style={{ background:'linear-gradient(90deg,#D42B2B,#a81e1e)', padding:'1.2rem 0', textAlign:'center' }}>
        <span style={{ color:'white', fontWeight:700, fontSize:'1.05rem', letterSpacing:'2px', textTransform:'uppercase' }}>
          Inspiring Excellence &nbsp;·&nbsp; Rewarding Merit &nbsp;·&nbsp; Shaping Futures
        </span>
      </div>

      {/* ── ABOUT NTSE ── */}
      <section className="container section-padding">
        <div style={{ maxWidth:'800px', margin:'0 auto', textAlign:'center' }} className="reveal">
          <div className="section-label" style={{ paddingLeft:0, justifyContent:'center' }}>ABOUT THE EXAMINATION</div>
          <h2 className="section-title">What is NTSE?</h2>
          <p style={{ fontSize:'1.1rem', color:'var(--nex-grey-600)', lineHeight:1.9, marginBottom:'1.5rem' }}>
            The <strong>Nexzen Talent Search Examination (NTSE)</strong> is a structured, merit-based competitive examination conducted annually by Nexzen Foundation, in formal academic collaboration with partner schools across the region.
          </p>
          <p style={{ fontSize:'1.05rem', color:'var(--nex-grey-600)', lineHeight:1.9 }}>
            It is designed to identify academically talented students early, promote analytical thinking, encourage healthy academic competition, and award meaningful financial scholarships to top performers — giving every deserving student an equal chance to shine, regardless of their background.
          </p>
        </div>

        {/* Vision & Mission */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'2rem', marginTop:'4rem' }}>
          {[
            { icon:<Star size={28} color="#D42B2B"/>, title:'Our Vision', text:'To be India\'s most trusted platform for discovering and celebrating academic merit among school students.' },
            { icon:<Target size={28} color="#6366F1"/>, title:'Our Mission', text:'To design and deliver structured, transparent, and rewarding academic examinations that give every deserving student an equal chance to shine.' },
          ].map(c => (
            <div key={c.title} className="card reveal" style={{ padding:'2.5rem', textAlign:'center' }}>
              <div style={{ marginBottom:'1rem' }}>{c.icon}</div>
              <h3 style={{ marginBottom:'0.75rem', fontSize:'1.25rem' }}>{c.title}</h3>
              <p style={{ color:'var(--nex-grey-500)', lineHeight:1.8, margin:0 }}>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXAM STRUCTURE ── */}
      <section style={{ background:'var(--nex-grey-50)', borderTop:'1px solid var(--nex-grey-200)', borderBottom:'1px solid var(--nex-grey-200)', padding:'5rem 0' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom:'3rem' }}>
            <div className="section-label" style={{ paddingLeft:0 }}>EXAMINATION STRUCTURE</div>
            <h2 className="section-title">4-Tier Selection Process</h2>
            <p style={{ color:'var(--nex-grey-500)', maxWidth:'600px', margin:'0 auto' }}>Selection at every tier is strictly merit-based. The Foundation's decision at each level is final and binding.</p>
          </div>

          {/* Tiers */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1.5rem', marginBottom:'4rem' }}>
            {TIERS.map(t => (
              <div key={t.tier} className="card reveal" style={{ padding:'2rem', borderTop:`4px solid ${t.border}`, background:t.color }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1rem' }}>
                  {t.icon}
                  <span style={{ background:t.border, color:'white', fontWeight:800, fontSize:'0.85rem', padding:'0.25rem 0.75rem', borderRadius:'50px' }}>Tier {t.tier}</span>
                </div>
                <h3 style={{ fontSize:'1.1rem', marginBottom:'0.5rem' }}>{t.name}</h3>
                <p style={{ color:'var(--nex-grey-600)', fontSize:'0.9rem', marginBottom:'0.75rem' }}>{t.desc}</p>
                <div style={{ display:'flex', alignItems:'center', gap:'0.4rem', fontSize:'0.82rem', color:t.border, fontWeight:600 }}>
                  <CheckCircle size={13}/> {t.who}
                </div>
              </div>
            ))}
          </div>

          {/* Levels table */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'2rem', marginBottom:'4rem' }}>
            {[
              { level:'Elementary Level', classes:'Classes II, III & IV', mcqs:'40 MCQs', marks:'40 Marks', time:'60 Minutes', color:'#6366F1', bg:'#EEF2FF' },
              { level:'Secondary Level',  classes:'Classes V, VI, VII, VIII & IX', mcqs:'50 MCQs', marks:'50 Marks', time:'75 Minutes', color:'#D42B2B', bg:'#FFF5F5' },
            ].map(l => (
              <div key={l.level} className="card reveal" style={{ padding:'2rem', borderLeft:`5px solid ${l.color}`, background:l.bg }}>
                <h3 style={{ color:l.color, marginBottom:'0.25rem' }}>{l.level}</h3>
                <p style={{ color:'var(--nex-grey-600)', fontSize:'0.9rem', marginBottom:'1.25rem' }}>{l.classes}</p>
                <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                  {[l.mcqs, l.marks, l.time].map(v => (
                    <div key={v} style={{ background:'white', padding:'0.5rem 1rem', borderRadius:'var(--radius-sm)', fontSize:'0.9rem', fontWeight:700, color:'var(--nex-charcoal)', border:`1px solid ${l.color}30` }}>{v}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Assessment areas */}
          <div className="text-center reveal" style={{ marginBottom:'2rem' }}>
            <h3 style={{ fontSize:'1.3rem' }}>Assessment Areas</h3>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'1.25rem' }}>
            {SUBJECTS.map(s => (
              <div key={s.area} className="card reveal" style={{ padding:'1.5rem', display:'flex', gap:'1rem', alignItems:'flex-start' }}>
                <div style={{ flexShrink:0 }}>{s.icon}</div>
                <div>
                  <strong style={{ display:'block', marginBottom:'0.3rem', fontSize:'0.95rem' }}>{s.area}</strong>
                  <span style={{ color:'var(--nex-grey-500)', fontSize:'0.87rem', lineHeight:1.6 }}>{s.what}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS & SCHOLARSHIPS ── */}
      <section className="container section-padding">
        <div className="text-center reveal" style={{ marginBottom:'3rem' }}>
          <div className="section-label" style={{ paddingLeft:0 }}>RECOGNITION & REWARDS</div>
          <h2 className="section-title">Awards, Medals & Scholarships</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'2rem' }}>
          <div className="card reveal" style={{ padding:'2.5rem', borderTop:'4px solid #6366F1', textAlign:'center' }}>
            <FileText size={36} color="#6366F1" style={{ marginBottom:'1rem' }}/>
            <h3 style={{ marginBottom:'0.75rem' }}>Participation Certificate</h3>
            <p style={{ color:'var(--nex-grey-500)', lineHeight:1.8 }}>Issued to <strong>every registered student</strong> who appears in the examination. No student leaves empty-handed.</p>
          </div>
          <div className="card reveal" style={{ padding:'2.5rem', borderTop:'4px solid #F97316', textAlign:'center' }}>
            <Award size={36} color="#F97316" style={{ marginBottom:'1rem' }}/>
            <h3 style={{ marginBottom:'0.75rem' }}>Merit Certificate + Medal</h3>
            <p style={{ color:'var(--nex-grey-500)', lineHeight:1.8 }}>Merit Certificates and Medals awarded to students qualifying for higher tiers and top performers at each level.</p>
          </div>
          <div className="card reveal" style={{ padding:'2.5rem', borderTop:'4px solid #D42B2B', textAlign:'center', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'4px', background:'linear-gradient(90deg,#D42B2B,#FF6B6B)' }}/>
            <Trophy size={36} color="#D42B2B" style={{ marginBottom:'1rem' }}/>
            <h3 style={{ marginBottom:'0.75rem' }}>Financial Scholarship</h3>
            <p style={{ color:'var(--nex-grey-500)', lineHeight:1.8 }}>
              <strong>Top 5 students per class</strong> at State Level (Tier 4) receive financial scholarships — up to <strong>40 scholars in total</strong>. Disbursed within 60 days of result declaration.
            </p>
          </div>
        </div>

        {/* Scholarship details */}
        <div className="card reveal" style={{ padding:'2.5rem', marginTop:'2rem', background:'linear-gradient(135deg,#FFF5F5,#FFF)', border:'2px solid var(--nex-red)' }}>
          <h3 style={{ marginBottom:'1.5rem', fontSize:'1.2rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <Medal size={22} color="var(--nex-red)"/> Scholarship Details
          </h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'1rem' }}>
            {[
              { label:'Eligibility',   value:'Top 5 per class at State Level' },
              { label:'Total Scholars',value:'Up to 40 students' },
              { label:'Timeline',      value:'Within 60 days of result' },
              { label:'Mode',          value:'Bank transfer / Educational kits' },
            ].map(r => (
              <div key={r.label} style={{ background:'white', padding:'1rem 1.25rem', borderRadius:'var(--radius-md)', border:'1px solid var(--nex-grey-200)' }}>
                <div style={{ fontSize:'0.78rem', color:'var(--nex-grey-400)', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'0.3rem' }}>{r.label}</div>
                <div style={{ fontWeight:700, color:'var(--nex-charcoal)', fontSize:'0.97rem' }}>{r.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE TABS ── */}
      <section id="participate" style={{ background:'linear-gradient(135deg,#0f172a,#1e1b4b)', padding:'5rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom:'3rem' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'rgba(212,43,43,0.2)', border:'1px solid rgba(212,43,43,0.4)', borderRadius:'50px', padding:'0.4rem 1rem', marginBottom:'1.5rem' }}>
              <Star size={14} color="#FF6B6B" fill="#FF6B6B"/>
              <span style={{ color:'#FF6B6B', fontSize:'0.8rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px' }}>How to Participate</span>
            </div>
            <h2 style={{ fontSize:'clamp(2rem,4vw,2.8rem)', color:'white', marginBottom:'1rem' }}>Are you a Student or a School?</h2>
            <p style={{ color:'rgba(255,255,255,0.6)', maxWidth:'500px', margin:'0 auto 2rem' }}>Select your role to see the relevant information and steps.</p>

            {/* Tab toggle */}
            <div style={{ display:'inline-flex', background:'rgba(255,255,255,0.08)', borderRadius:'50px', padding:'6px', border:'1px solid rgba(255,255,255,0.12)' }}>
              {[
                { key:'student', label:'I\'m a Student', icon:<GraduationCap size={16}/> },
                { key:'school',  label:'I\'m a School',  icon:<School size={16}/> },
              ].map(t => (
                <button key={t.key} onClick={() => { setTab(t.key); setFaq(null); }}
                  style={{ display:'flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1.75rem', borderRadius:'50px', border:'none', cursor:'pointer', fontWeight:700, fontSize:'0.95rem', transition:'all 0.2s',
                    background: tab === t.key ? 'linear-gradient(135deg,#D42B2B,#a81e1e)' : 'transparent',
                    color: tab === t.key ? 'white' : 'rgba(255,255,255,0.6)',
                    boxShadow: tab === t.key ? '0 4px 15px rgba(212,43,43,0.4)' : 'none',
                  }}>
                  {t.icon}{t.label}
                </button>
              ))}
            </div>
          </div>

          {/* STUDENT TAB */}
          {tab === 'student' && (
            <div style={{ animation:'fadeIn 0.3s ease' }}>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'2rem', marginBottom:'3rem' }}>
                <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'var(--radius-lg)', padding:'2.5rem' }}>
                  <GraduationCap size={36} color="#FF6B6B" style={{ marginBottom:'1.25rem' }}/>
                  <h3 style={{ color:'white', marginBottom:'1rem', fontSize:'1.4rem' }}>For Students</h3>
                  <p style={{ color:'rgba(255,255,255,0.65)', lineHeight:1.9, marginBottom:'1.5rem' }}>
                    NTSE is your opportunity to go beyond the classroom. Compete on a structured national platform, earn recognition, and win meaningful scholarships — all while studying at your own school.
                  </p>
                  <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                    {[
                      'Classes II to IX — both Elementary and Secondary levels',
                      'No negative marking — attempt every question',
                      'Bilingual paper — English & Bengali',
                      'Participation certificate for every student',
                      'Medals for top performers at each tier',
                      'Financial scholarships for State Level toppers',
                    ].map(p => (
                      <div key={p} style={{ display:'flex', gap:'0.7rem', alignItems:'flex-start' }}>
                        <CheckCircle size={16} color="#34D399" style={{ flexShrink:0, marginTop:'3px' }}/>
                        <span style={{ color:'rgba(255,255,255,0.75)', fontSize:'0.93rem' }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
                  <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'var(--radius-lg)', padding:'2rem' }}>
                    <h4 style={{ color:'#FF6B6B', marginBottom:'1rem', fontSize:'1.05rem', display:'flex', alignItems:'center', gap:'0.5rem' }}><BookOpen size={18}/>How to Register</h4>
                    <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'0.93rem', lineHeight:1.8 }}>
                      Registration is done through your school. Ask your class teacher or school principal about NTSE registration. Your school needs to be a registered NexZen partner first.
                    </p>
                  </div>

                  <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'var(--radius-lg)', padding:'2rem' }}>
                    <h4 style={{ color:'#FF6B6B', marginBottom:'1rem', fontSize:'1.05rem', display:'flex', alignItems:'center', gap:'0.5rem' }}><Clock size={18}/>Registration Fee</h4>
                    <div style={{ display:'flex', alignItems:'baseline', gap:'0.5rem', marginBottom:'0.5rem' }}>
                      <span style={{ fontSize:'2rem', fontWeight:900, color:'white' }}>₹249</span>
                      <span style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.9rem' }}>per student</span>
                    </div>
                    <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.83rem', lineHeight:1.7 }}>Collected by your school. Non-refundable except if the examination is cancelled by the Foundation.</p>
                  </div>

                  <div style={{ background:'rgba(212,43,43,0.15)', border:'1px solid rgba(212,43,43,0.3)', borderRadius:'var(--radius-lg)', padding:'2rem' }}>
                    <h4 style={{ color:'#FF6B6B', marginBottom:'0.75rem', fontSize:'1.05rem' }}>Tell Your School!</h4>
                    <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'0.93rem', lineHeight:1.8, marginBottom:'1rem' }}>
                      If your school is not yet a NexZen partner, ask your principal to reach out. We will handle everything from there.
                    </p>
                    <a href="mailto:admin@nexzenfoundation.in?subject=NTSE 2026 — Student Enquiry"
                      style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'var(--nex-red)', color:'white', padding:'0.7rem 1.5rem', borderRadius:'50px', fontSize:'0.9rem', fontWeight:700, textDecoration:'none' }}>
                      <Mail size={15}/> Contact Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Student FAQs */}
              <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'var(--radius-lg)', padding:'2.5rem' }}>
                <h3 style={{ color:'white', marginBottom:'1.5rem', fontSize:'1.3rem' }}>Student FAQs</h3>
                {STUDENT_FAQS.map((faq, i) => (
                  <div key={i} onClick={() => setFaq(openFaq === `s${i}` ? null : `s${i}`)}
                    style={{ borderBottom:'1px solid rgba(255,255,255,0.08)', cursor:'pointer', padding:'1rem 0' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem' }}>
                      <span style={{ fontWeight:600, color:'rgba(255,255,255,0.85)', fontSize:'0.95rem' }}>{faq.q}</span>
                      {openFaq === `s${i}` ? <ChevronUp size={16} color="#FF6B6B"/> : <ChevronDown size={16} color="rgba(255,255,255,0.4)"/>}
                    </div>
                    {openFaq === `s${i}` && (
                      <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.9rem', lineHeight:1.8, marginTop:'0.75rem', marginBottom:0 }}>{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SCHOOL TAB */}
          {tab === 'school' && (
            <div style={{ animation:'fadeIn 0.3s ease' }}>
              {/* Benefits */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.5rem', marginBottom:'3rem' }}>
                {SCHOOL_BENEFITS.map(b => (
                  <div key={b.title} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'var(--radius-lg)', padding:'1.75rem', display:'flex', gap:'1rem', alignItems:'flex-start' }}>
                    <div style={{ flexShrink:0, marginTop:'2px' }}>{b.icon}</div>
                    <div>
                      <h4 style={{ color:'white', marginBottom:'0.4rem', fontSize:'1rem' }}>{b.title}</h4>
                      <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.87rem', lineHeight:1.7, margin:0 }}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fee structure */}
              <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:'var(--radius-lg)', padding:'2.5rem', marginBottom:'3rem' }}>
                <h3 style={{ color:'white', marginBottom:'2rem', fontSize:'1.3rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
                  <Shield size={22} color="#34D399"/> Fee Structure — Zero Risk to Your School
                </h3>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'1.25rem' }}>
                  {[
                    { label:'Registration Fee', value:'₹249/- per student', sub:'Collected from parents', color:'rgba(255,255,255,0.8)' },
                    { label:'School Retains',   value:'₹50/- per student', sub:'Your administrative share', color:'#34D399' },
                    { label:'Remit to Foundation', value:'₹199/- per student', sub:'Within 7 working days', color:'#FF6B6B' },
                  ].map(f => (
                    <div key={f.label} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'var(--radius-md)', padding:'1.25rem', textAlign:'center' }}>
                      <div style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'0.5rem' }}>{f.label}</div>
                      <div style={{ fontSize:'1.3rem', fontWeight:900, color:f.color, marginBottom:'0.25rem' }}>{f.value}</div>
                      <div style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.4)' }}>{f.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9-step process */}
              <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'var(--radius-lg)', padding:'2.5rem', marginBottom:'3rem' }}>
                <h3 style={{ color:'white', marginBottom:'2rem', fontSize:'1.3rem' }}>How to Partner — 9 Simple Steps</h3>
                <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
                  {SCHOOL_STEPS.map((step, i) => (
                    <div key={step.n} style={{ display:'flex', gap:'1.25rem', alignItems:'flex-start' }}>
                      <div style={{ background:'linear-gradient(135deg,#D42B2B,#7c1d1d)', color:'white', fontWeight:800, fontSize:'0.85rem', width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:'2px' }}>
                        {step.n}
                      </div>
                      <div>
                        <div style={{ color:'white', fontWeight:700, marginBottom:'0.2rem', fontSize:'0.97rem' }}>{step.action}</div>
                        <div style={{ color:'rgba(255,255,255,0.55)', fontSize:'0.87rem', lineHeight:1.7 }}>{step.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* School FAQs */}
              <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'var(--radius-lg)', padding:'2.5rem', marginBottom:'2rem' }}>
                <h3 style={{ color:'white', marginBottom:'1.5rem', fontSize:'1.3rem' }}>School FAQs</h3>
                {SCHOOL_FAQS.map((faq, i) => (
                  <div key={i} onClick={() => setFaq(openFaq === `sc${i}` ? null : `sc${i}`)}
                    style={{ borderBottom:'1px solid rgba(255,255,255,0.08)', cursor:'pointer', padding:'1rem 0' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem' }}>
                      <span style={{ fontWeight:600, color:'rgba(255,255,255,0.85)', fontSize:'0.95rem' }}>{faq.q}</span>
                      {openFaq === `sc${i}` ? <ChevronUp size={16} color="#FF6B6B"/> : <ChevronDown size={16} color="rgba(255,255,255,0.4)"/>}
                    </div>
                    {openFaq === `sc${i}` && (
                      <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.9rem', lineHeight:1.8, marginTop:'0.75rem', marginBottom:0 }}>{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* School CTA */}
              <div style={{ background:'linear-gradient(135deg,rgba(212,43,43,0.2),rgba(212,43,43,0.05))', border:'1px solid rgba(212,43,43,0.3)', borderRadius:'var(--radius-lg)', padding:'2.5rem', textAlign:'center' }}>
                <h3 style={{ color:'white', marginBottom:'0.75rem', fontSize:'1.4rem' }}>Ready to Partner with NexZen?</h3>
                <p style={{ color:'rgba(255,255,255,0.65)', marginBottom:'2rem', maxWidth:'500px', margin:'0 auto 2rem' }}>
                  Join us and give your students the platform they deserve. Contact your nearest Nexzen Area / Academic Coordinator or write to us directly.
                </p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center' }}>
                  <a href="mailto:admin@nexzenfoundation.in?subject=NTSE 2026 — School Partnership Enquiry"
                    style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'linear-gradient(135deg,#D42B2B,#a81e1e)', color:'white', padding:'1rem 2rem', borderRadius:'50px', fontSize:'1rem', fontWeight:700, textDecoration:'none', boxShadow:'0 4px 20px rgba(212,43,43,0.4)' }}>
                    <Mail size={18}/> Email Us to Partner
                  </a>
                  <Link href="/contact"
                    style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'rgba(255,255,255,0.1)', color:'white', padding:'1rem 2rem', borderRadius:'50px', fontSize:'1rem', fontWeight:700, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
                    <ArrowRight size={18}/> Contact Page
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── AT A GLANCE ── */}
      <section style={{ background:'var(--nex-grey-50)', padding:'5rem 0', borderTop:'1px solid var(--nex-grey-200)' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom:'3rem' }}>
            <div className="section-label" style={{ paddingLeft:0 }}>QUICK REFERENCE</div>
            <h2 className="section-title">NTSE 2026 — At a Glance</h2>
          </div>
          <div className="card reveal" style={{ padding:'0', overflow:'hidden' }}>
            {[
              { topic:'Full Name',         detail:'Nexzen Talent Search Examination (NTSE – 2026)' },
              { topic:'Conducted By',      detail:'Nexzen Foundation — Registered Charitable Trust, India' },
              { topic:'Elementary Level',  detail:'Classes II, III & IV · 40 MCQs · 40 Marks · 60 Minutes' },
              { topic:'Secondary Level',   detail:'Classes V–IX · 50 MCQs · 50 Marks · 75 Minutes' },
              { topic:'Min. Students/Class', detail:'10 students per class (mandatory)' },
              { topic:'Exam Tiers',        detail:'4 Tiers: School → District/Zonal → Regional → State' },
              { topic:'Negative Marking',  detail:'None' },
              { topic:'Medium',            detail:'Bilingual — English & Bengali' },
              { topic:'Registration Fee',  detail:'₹249/- per student' },
              { topic:'School Retains',    detail:'₹50/- per student (administrative expenses)' },
              { topic:'Remittance',        detail:'₹199/- per student within 7 working days' },
              { topic:'Scholarships',      detail:'Top 5 students per class at State Level (up to 40 total)' },
              { topic:'MoU Validity',      detail:'Academic Year 2026–2027 (non-exclusive)' },
              { topic:'Jurisdiction',      detail:'Kolkata, West Bengal · Laws of India' },
            ].map((r, i) => (
              <div key={r.topic} style={{ display:'flex', padding:'1rem 1.75rem', borderBottom:'1px solid var(--nex-grey-100)', background: i % 2 === 0 ? 'white' : 'var(--nex-grey-50)' }}>
                <span style={{ fontWeight:700, color:'var(--nex-charcoal)', minWidth:'220px', fontSize:'0.92rem' }}>{r.topic}</span>
                <span style={{ color:'var(--nex-grey-600)', fontSize:'0.92rem' }}>{r.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background:'linear-gradient(135deg,#D42B2B,#7c1d1d)', padding:'5rem 0', textAlign:'center' }}>
        <div className="container">
          <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', color:'white', marginBottom:'1rem', fontWeight:900 }}>
            Begin Your NTSE Journey Today
          </h2>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:'1.1rem', maxWidth:'560px', margin:'0 auto 2.5rem', lineHeight:1.8 }}>
            Partner with Nexzen Foundation and give your students the recognition they deserve.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center' }}>
            <a href="mailto:admin@nexzenfoundation.in?subject=NTSE 2026 Enquiry"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'white', color:'#D42B2B', padding:'1rem 2.5rem', borderRadius:'50px', fontSize:'1rem', fontWeight:800, textDecoration:'none', boxShadow:'0 4px 20px rgba(0,0,0,0.2)' }}>
              <Mail size={18}/> admin@nexzenfoundation.in
            </a>
            <Link href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'rgba(255,255,255,0.15)', color:'white', padding:'1rem 2.5rem', borderRadius:'50px', fontSize:'1rem', fontWeight:700, textDecoration:'none', border:'2px solid rgba(255,255,255,0.4)' }}>
              <ArrowRight size={18}/> Contact Us
            </Link>
          </div>
          <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.82rem', marginTop:'2rem' }}>
            NTSE 2026 · Classes II to IX · Elementary & Secondary Levels · Nexzen Foundation<br/>
            Registered Trust under the Laws of India · Jurisdiction: Kolkata, West Bengal
          </p>
        </div>
      </section>
    </>
  );
}

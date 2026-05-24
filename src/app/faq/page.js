'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, MessageSquare, GraduationCap, Building2, Heart, ShieldCheck, Plus } from 'lucide-react';

const categories = [
  {
    id: 'general', label: 'General', color: '#D42B2B', bg: '#FFF5F5', icon: <ShieldCheck size={18}/>,
    faqs: [
      { q: 'What is NexZen Foundation?', a: 'NexZen Foundation is a registered charitable trust (Reg: IV-1901-01209-2025) headquartered in West Bengal, India. We empower communities through free career consultancy, scholarships, healthcare camps, institutional development, and social services.' },
      { q: 'Is NexZen Foundation legitimate and government-registered?', a: 'Yes. We are registered under the Indian Trusts Act with Registration No. IV-1901-01209-2025, listed on NGO Darpan (WB/2025/0892907), and hold an 80G tax exemption certificate (AAFTN1149JF20261).' },
      { q: 'Where does NexZen operate?', a: 'Primarily across West Bengal, India — with a focus on rural, underserved, and economically weaker communities.' },
      { q: 'How can I contact NexZen Foundation?', a: 'Email us at admin@nexzenfoundation.in. We respond within 24–48 working hours.' },
      { q: 'How can I volunteer with NexZen Foundation?', a: 'Visit our Volunteer page and fill in the expression of interest form. We welcome students, professionals, doctors, lawyers, and anyone passionate about social impact.' },
      { q: 'Does NexZen Foundation have social media?', a: 'We are actively building our digital presence. Visit nexzenfoundation.in for the latest updates and news.' },
    ],
  },
  {
    id: 'individual', label: 'Individual Consultancy', color: '#059669', bg: '#ECFDF5', icon: <GraduationCap size={18}/>,
    faqs: [
      { q: 'Is individual consultancy really free?', a: 'Yes — completely and unconditionally free. No session fees, no registration fees, no hidden charges. Every student regardless of financial background can access all our consultancy services at zero cost.' },
      { q: 'What does individual consultancy cover?', a: 'Career mapping, college selection (government and private), board and distance education advisory, entrance exam strategy (NEET, WBJEE, JENPAS, CLAT), scholarship research, study plan design, gap year planning, and post-graduation advisory.' },
      { q: 'How do I book a consultancy session?', a: 'Visit our Contact page or email admin@nexzenfoundation.in to schedule a session. We offer both in-person and remote consultancy via phone or video.' },
      { q: 'My child failed their entrance exam. Can you still help?', a: 'Absolutely. We specialise in gap year planning, re-attempt strategies, and alternative pathway exploration. Many of our most successful students came to us after an initial setback.' },
      { q: 'I am from a rural area in West Bengal. Can I access consultancy?', a: 'Yes. We actively prioritise students from rural and remote areas. Remote consultancy via phone or video is available and equally comprehensive.' },
    ],
  },
  {
    id: 'donation', label: 'Donations & Tax', color: '#2563EB', bg: '#EFF6FF', icon: <Heart size={18}/>,
    faqs: [
      { q: 'Is my donation tax-deductible?', a: 'Yes. NexZen Foundation holds an 80G certificate (AAFTN1149JF20261). Donations are eligible for 50% tax deduction under Section 80G of the Income Tax Act.' },
      { q: 'How do I get my 80G tax receipt?', a: 'After your donation, a PDF receipt downloads immediately. Email donation@nexzenfoundation.in with your Full Name, PAN Number, and Postal Address to receive Form 10BE within 7 working days.' },
      { q: 'What payment methods do you accept?', a: 'We accept all UPI apps (GPay, PhonePe, Paytm), credit/debit cards, net banking, and wallets through Razorpay. We also accept bank transfers (NEFT/RTGS) and UPI direct payments.' },
      { q: 'Can I donate monthly?', a: 'Yes! Monthly giving is the most impactful way to support us. Visit our Donate page, select the Monthly tab, and choose your amount. Monthly donors directly fund long-term programmes.' },
      { q: 'Where does my donation go?', a: '100% of donations go directly to our programmes — scholarships, healthcare camps, free consultancy operations, and school upgradation projects. Full annual accounts are published on our Transparency page.' },
    ],
  },
  {
    id: 'institutional', label: 'Institutional', color: '#7C3AED', bg: '#F5F3FF', icon: <Building2 size={18}/>,
    faqs: [
      { q: 'What types of institutions do you work with?', a: 'Government schools, private English-medium schools, madrasas, residential schools, vocational training centres, junior colleges, and community schools — across West Bengal.' },
      { q: 'Is the institutional baseline audit really free?', a: 'Yes. The initial baseline audit is always complimentary with no obligation. Project fees are quoted scope-based only after the audit is complete and you choose to proceed.' },
      { q: 'Do you help with NAAC accreditation?', a: 'Yes. Pillar 3 of our Institutional Consultancy covers NAAC self-study report preparation, grading improvement advisory, and full accreditation documentation support.' },
      { q: 'How long does an institutional engagement typically take?', a: 'Baseline audits take 1–2 weeks. Full engagement timelines depend on the scope — typically 3–12 months, with milestone reviews throughout.' },
    ],
  },
];

function Accordion({ faqs, accentColor }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ background:'white', borderRadius:'var(--radius-md)', border:`1px solid ${open===i ? accentColor : 'var(--nex-grey-200)'}`, overflow:'hidden', transition:'border-color 0.2s' }}>
          <button onClick={() => setOpen(open===i ? null : i)}
            style={{ width:'100%', textAlign:'left', padding:'1.1rem 1.25rem', background:'transparent', border:'none', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem' }}>
            <span style={{ fontWeight:600, color:'var(--nex-charcoal)', fontSize:'0.975rem', lineHeight:1.5 }}>{faq.q}</span>
            <div style={{ flexShrink:0, width:'24px', height:'24px', borderRadius:'50%', background: open===i ? accentColor : 'var(--nex-grey-100)', display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.2s', color: open===i ? 'white' : 'var(--nex-grey-500)' }}>
              <ChevronDown size={14} style={{ transform: open===i ? 'rotate(180deg)' : 'rotate(0)', transition:'transform 0.25s' }}/>
            </div>
          </button>
          {open === i && (
            <div style={{ padding:'0 1.25rem 1.1rem', color:'var(--nex-grey-600)', fontSize:'0.925rem', lineHeight:1.8, borderTop:'1px solid var(--nex-grey-100)', paddingTop:'1rem' }}>
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('general');
  const active = categories.find(c => c.id === activeTab);

  return (
    <div style={{ paddingBottom:'5rem' }}>
      {/* Hero */}
      <section style={{ background:'linear-gradient(135deg,#1e1e2e 0%,#2d1515 100%)', padding:'5rem 0 4rem', marginTop:'-1px' }}>
        <div className="container text-center">
          <div style={{ fontSize:'0.78rem', fontWeight:700, color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:'2px', marginBottom:'1rem' }}>FREQUENTLY ASKED QUESTIONS</div>
          <h1 style={{ fontSize:'clamp(2rem,5vw,3rem)', color:'white', marginBottom:'1rem' }}>Everything You Need to Know</h1>
          <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'1.05rem', maxWidth:'520px', margin:'0 auto' }}>
            Can't find your answer? Email us at <a href="mailto:admin@nexzenfoundation.in" style={{ color:'var(--nex-red)', fontWeight:600 }}>admin@nexzenfoundation.in</a>
          </p>
        </div>
      </section>

      <section className="container" style={{ padding:'3.5rem 0' }}>

        {/* Category tabs */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'0.6rem', marginBottom:'2.5rem', justifyContent:'center' }}>
          {categories.map(c => (
            <button key={c.id} onClick={() => setActiveTab(c.id)}
              style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.6rem 1.2rem', borderRadius:'50px', border:'2px solid', borderColor: activeTab===c.id ? c.color : 'var(--nex-grey-200)', background: activeTab===c.id ? c.color : 'white', color: activeTab===c.id ? 'white' : 'var(--nex-grey-700)', fontWeight:700, fontSize:'0.875rem', cursor:'pointer', transition:'all 0.2s' }}>
              {c.icon}{c.label}
            </button>
          ))}
        </div>

        {/* Active category */}
        <div style={{ maxWidth:'800px', margin:'0 auto' }}>
          <div className="card" style={{ padding:'2rem', borderTop:`4px solid ${active.color}`, marginBottom:'2rem' }}>
            <Accordion faqs={active.faqs} accentColor={active.color}/>
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="card reveal text-center" style={{ maxWidth:'580px', margin:'0 auto', padding:'2.5rem', background:'linear-gradient(135deg,#fff5f5,#fff)', border:'2px solid var(--nex-red)' }}>
          <div style={{ background:'var(--nex-red-light)', width:'56px', height:'56px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.25rem', color:'var(--nex-red)' }}>
            <MessageSquare size={26}/>
          </div>
          <h3 style={{ marginBottom:'0.5rem' }}>Still have questions?</h3>
          <p style={{ color:'var(--nex-grey-500)', marginBottom:'1.5rem', fontSize:'0.95rem' }}>We're here to help. Reach out directly and we'll respond within 24–48 working hours.</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.75rem', justifyContent:'center' }}>
            <a href="mailto:admin@nexzenfoundation.in" style={{ background:'var(--nex-red)', color:'white', padding:'0.75rem 1.75rem', borderRadius:'50px', fontWeight:700, textDecoration:'none', fontSize:'0.9rem' }}>
              Email Us
            </a>
            <Link href="/contact" style={{ background:'transparent', color:'var(--nex-red)', padding:'0.75rem 1.75rem', borderRadius:'50px', fontWeight:700, textDecoration:'none', fontSize:'0.9rem', border:'2px solid var(--nex-red)' }}>
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

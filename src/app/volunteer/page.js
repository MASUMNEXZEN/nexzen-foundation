import Link from 'next/link';
import {
  Heart, Users, GraduationCap, Stethoscope, Scale, Building2,
  CheckCircle, ArrowRight, Mail, Laptop, Award, Clock, Star, MessageSquare
} from 'lucide-react';

export const metadata = {
  metadataBase: new URL('https://www.nexzenfoundation.in'),
  title: 'Volunteer with NexZen Foundation | NGO West Bengal | Career Counsellors, Doctors, Teachers',
  description: 'Join NexZen Foundation as a volunteer in West Bengal. We need career counsellors, doctors, nurses, lawyers, teachers, and digital volunteers. Flexible hours, professional certificate, and real community impact.',
  keywords: 'volunteer NGO West Bengal, volunteer career counsellor West Bengal, NGO volunteer Kolkata, doctor volunteer NGO West Bengal, teacher volunteer NGO, social work volunteer West Bengal, NexZen volunteer',
  alternates: { canonical: 'https://www.nexzenfoundation.in/volunteer' },
  openGraph: {
    title: 'Volunteer with NexZen Foundation | West Bengal NGO',
    description: 'Become a volunteer — career counsellors, doctors, lawyers, teachers, and tech volunteers welcome. Flexible hours, official certificate.',
    url: 'https://www.nexzenfoundation.in/volunteer',
    siteName: 'NexZen Foundation',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Volunteer | NexZen Foundation West Bengal', description: 'Join as a volunteer — counsellors, doctors, teachers, lawyers, tech experts welcome.' },
  title: 'Volunteer | NexZen Foundation',
  description: 'Join NexZen Foundation as a volunteer. Contribute your skills to empower students, support healthcare camps, and build communities across West Bengal.',
};

const whyCards = [
  { icon: <Heart size={24}/>,  color:'#D42B2B', bg:'#FFF5F5', title:'Real Impact',        desc:'Your skills directly change the trajectory of a student\'s life or a community\'s health.' },
  { icon: <Clock size={24}/>,  color:'#2563EB', bg:'#EFF6FF', title:'Flexible Hours',      desc:'Contribute as little as a few hours a month. We work around your schedule.' },
  { icon: <Star size={24}/>,   color:'#D97706', bg:'#FFFBEB', title:'Grow Professionally', desc:'Build meaningful sector experience and a portfolio of real social impact.' },
  { icon: <Award size={24}/>,  color:'#059669', bg:'#ECFDF5', title:'Certificate',         desc:'Receive an official NexZen Foundation Certificate of Volunteering.' },
];

const roles = [
  { icon: <GraduationCap size={24}/>, color:'#D42B2B', bg:'#FFF5F5', title:'Career Counsellors',    desc:'Students, educators, HR professionals, and career coaches who can guide aspirants on college and career choices.' },
  { icon: <Stethoscope size={24}/>,   color:'#059669', bg:'#ECFDF5', title:'Medical Volunteers',     desc:'Doctors, nurses, ASHA workers, and paramedics for our community healthcare camps across rural West Bengal.' },
  { icon: <Scale size={24}/>,         color:'#7C3AED', bg:'#F5F3FF', title:'Legal Advisors',         desc:'Advocates and legal professionals for pro-bono legal aid and awareness camps in underserved communities.' },
  { icon: <GraduationCap size={24}/>, color:'#2563EB', bg:'#EFF6FF', title:'Teachers & Tutors',      desc:'Subject matter experts for scholarship exam coaching, remedial teaching, and academic mentorship.' },
  { icon: <Laptop size={24}/>,        color:'#D97706', bg:'#FFFBEB', title:'Digital & Tech',         desc:'Web developers, graphic designers, social media managers, and content creators who can amplify our reach.' },
  { icon: <Users size={24}/>,         color:'#0891B2', bg:'#ECFEFF', title:'Event & Outreach',       desc:'Field coordinators, camp logistics managers, community mobilisers, and translator volunteers.' },
];

const activities = [
  'Conduct career counselling sessions for Class X–XII students',
  'Participate in community health camps as medical staff or support',
  'Mentor scholarship applicants through their application process',
  'Translate and create content in Bengali for rural outreach',
  'Support digital marketing and social media content creation',
  'Assist in institutional visits and baseline audit data collection',
  'Train teachers on digital tools and smart classroom usage',
  'Help organise events, awareness drives, and community meetings',
];

export default function VolunteerPage() {
  return (
    <div style={{ paddingBottom:'5rem' }}>

      {/* Hero */}
      <section style={{ background:'linear-gradient(135deg,#0f172a 0%,#1e1e2e 50%,#2d1515 100%)', padding:'6rem 0 5rem', position:'relative', overflow:'hidden' }}>
        {/* Decorative circles */}
        {[[300,'top:-100px','right:-60px',0.06],[200,'bottom:-60px','left:-40px',0.04]].map(([s,t,l,o],i) => (
          <div key={i} style={{ position:'absolute', width:s, height:s, borderRadius:'50%', background:'var(--nex-red)', top:t, bottom:undefined, left:l, right:undefined, opacity:o, pointerEvents:'none' }}/>
        ))}
        <div className="container" style={{ position:'relative', zIndex:1, display:'grid', gridTemplateColumns:'1fr auto', gap:'3rem', alignItems:'center', flexWrap:'wrap' }}>
          <div>
            <div style={{ fontSize:'0.78rem', fontWeight:700, color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:'2px', marginBottom:'1rem' }}>JOIN OUR MISSION</div>
            <h1 style={{ fontSize:'clamp(2.2rem,5vw,3.5rem)', color:'white', marginBottom:'1.25rem', lineHeight:1.2 }}>
              Be the Change<br/>West Bengal Needs
            </h1>
            <p style={{ color:'rgba(255,255,255,0.7)', fontSize:'1.1rem', maxWidth:'500px', lineHeight:1.8, marginBottom:'2rem' }}>
              Volunteer with NexZen Foundation and directly impact thousands of students, patients, and communities. Your expertise, your time — infinite impact.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
              <a href="mailto:volunteer@nexzenfoundation.in?subject=Volunteer Expression of Interest"
                style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'var(--nex-red)', color:'white', padding:'0.9rem 2rem', borderRadius:'50px', fontWeight:700, textDecoration:'none', fontSize:'1rem' }}>
                <Heart size={18}/> Express My Interest
              </a>
              <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'rgba(255,255,255,0.1)', color:'white', padding:'0.9rem 2rem', borderRadius:'50px', fontWeight:600, textDecoration:'none', fontSize:'1rem', border:'2px solid rgba(255,255,255,0.25)' }}>
                Learn More <ArrowRight size={17}/>
              </Link>
            </div>
          </div>
          {/* Stats */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            {[['5,000+','Students Impacted'],['200+','Institutions'],['100%','Free Service'],['0','Commissions']].map(([v,l]) => (
              <div key={l} style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:'12px', padding:'1.25rem 1rem', textAlign:'center' }}>
                <div style={{ fontSize:'1.6rem', fontWeight:900, color:'var(--nex-red)', lineHeight:1 }}>{v}</div>
                <div style={{ fontSize:'0.75rem', color:'rgba(255,255,255,0.5)', marginTop:'4px', fontWeight:500 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section style={{ background:'var(--nex-grey-50)', padding:'5rem 0' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom:'2.5rem' }}>
            <div className="section-label" style={{ justifyContent:'center' }}>VOLUNTEER BENEFITS</div>
            <h2 className="section-title">Why Volunteer with NexZen?</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1.5rem' }}>
            {whyCards.map(c => (
              <div key={c.title} className="card reveal" style={{ padding:'2rem', textAlign:'center' }}>
                <div style={{ background:c.bg, width:'64px', height:'64px', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.25rem', color:c.color }}>
                  {c.icon}
                </div>
                <h3 style={{ fontSize:'1.05rem', marginBottom:'0.5rem' }}>{c.title}</h3>
                <p style={{ color:'var(--nex-grey-500)', fontSize:'0.9rem', margin:0, lineHeight:1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles needed */}
      <section className="container" style={{ padding:'5rem 0' }}>
        <div className="text-center reveal" style={{ marginBottom:'2.5rem' }}>
          <div className="section-label" style={{ justifyContent:'center' }}>OPEN ROLES</div>
          <h2 className="section-title">Who We Need</h2>
          <p style={{ maxWidth:'540px', margin:'0 auto', color:'var(--nex-grey-500)', fontSize:'1.05rem' }}>
            Every skill has a place here. If you're passionate about social change, we have a role for you.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.5rem' }}>
          {roles.map(r => (
            <div key={r.title} className="card reveal" style={{ padding:'1.75rem', borderTop:`4px solid ${r.color}` }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.75rem' }}>
                <div style={{ background:r.bg, borderRadius:'10px', padding:'0.6rem', color:r.color, flexShrink:0 }}>{r.icon}</div>
                <h3 style={{ margin:0, fontSize:'1.05rem' }}>{r.title}</h3>
              </div>
              <p style={{ color:'var(--nex-grey-500)', fontSize:'0.9rem', margin:0, lineHeight:1.7 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you'll do */}
      <section style={{ background:'var(--nex-grey-50)', padding:'4rem 0' }}>
        <div className="container" style={{ maxWidth:'760px', margin:'0 auto' }}>
          <div className="text-center reveal" style={{ marginBottom:'2rem' }}>
            <div className="section-label" style={{ justifyContent:'center' }}>ACTIVITIES</div>
            <h2 className="section-title">What You'll Do</h2>
          </div>
          <div className="card reveal" style={{ padding:'2.5rem' }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'0.75rem' }}>
              {activities.map(a => (
                <div key={a} style={{ display:'flex', alignItems:'flex-start', gap:'0.75rem' }}>
                  <CheckCircle size={16} color="var(--nex-red)" style={{ flexShrink:0, marginTop:'3px' }}/>
                  <span style={{ fontSize:'0.925rem', color:'var(--nex-grey-700)', lineHeight:1.6 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expression of Interest */}
      <section className="container" style={{ padding:'5rem 0', maxWidth:'680px', margin:'0 auto' }}>
        <div className="card reveal" style={{ padding:'3rem', border:'2px solid var(--nex-red)', textAlign:'center' }}>
          <div style={{ background:'var(--nex-red)', width:'72px', height:'72px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.5rem', color:'white' }}>
            <Mail size={32}/>
          </div>
          <h2 style={{ fontSize:'1.5rem', marginBottom:'0.5rem' }}>Ready to Volunteer?</h2>
          <p style={{ color:'var(--nex-grey-500)', marginBottom:'2rem', fontSize:'0.975rem', lineHeight:1.8 }}>
            Send us an email at <strong>volunteer@nexzenfoundation.in</strong> with:
          </p>
          <div style={{ background:'var(--nex-grey-50)', borderRadius:'var(--radius-md)', padding:'1.5rem 2rem', textAlign:'left', marginBottom:'2rem' }}>
            {['Your name and professional background','Your skills or profession','Preferred area of contribution','Your availability (hours per week)'].map((item, i) => (
              <div key={item} style={{ display:'flex', gap:'0.75rem', alignItems:'center', padding:'0.5rem 0', borderBottom: i < 3 ? '1px solid var(--nex-grey-200)' : 'none' }}>
                <div style={{ background:'var(--nex-red)', color:'white', width:'22px', height:'22px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.75rem', fontWeight:800, flexShrink:0 }}>{i+1}</div>
                <span style={{ fontSize:'0.925rem', color:'var(--nex-grey-700)' }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center' }}>
            <a href="mailto:volunteer@nexzenfoundation.in?subject=Volunteer Expression of Interest — NexZen Foundation"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'linear-gradient(135deg,var(--nex-red),#a81e1e)', color:'white', padding:'0.9rem 2rem', borderRadius:'50px', fontWeight:700, textDecoration:'none', fontSize:'1rem' }}>
              <Mail size={18}/> Email Us to Volunteer
            </a>
            <a href="https://wa.me/918250763893?text=Hi%2C%20I%20would%20like%20to%20volunteer%20with%20NexZen%20Foundation."
              target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'#25D366', color:'white', padding:'0.9rem 2rem', borderRadius:'50px', fontWeight:700, textDecoration:'none', fontSize:'1rem' }}>
              <MessageSquare size={18}/> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Bottom inspiration strip */}
      <section style={{ background:'linear-gradient(135deg,var(--nex-red),#a81e1e)', padding:'2.5rem 0' }}>
        <div className="container text-center">
          <p style={{ color:'white', fontSize:'1.2rem', fontStyle:'italic', margin:0, fontWeight:500 }}>
            "Your time is as valuable as any donation. Together, we build West Bengal."
          </p>
        </div>
      </section>
    </div>
  );
}

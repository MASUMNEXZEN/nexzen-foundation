'use client';
import Link from 'next/link';
import { Home, ArrowLeft, Heart, GraduationCap, Phone, BookOpen } from 'lucide-react';

const quickLinks = [
  { href: '/',                        label: 'Home',            icon: <Home size={16}/> },
  { href: '/donate',                  label: 'Donate',          icon: <Heart size={16}/> },
  { href: '/consultancy/individual',  label: 'Free Consultancy',icon: <GraduationCap size={16}/> },
  { href: '/contact',                 label: 'Contact Us',      icon: <Phone size={16}/> },
];

export default function NotFound() {
  return (
    <div style={{ minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem', overflow:'hidden', position:'relative', background:'var(--nex-grey-50)' }}>

      {/* Background decoration */}
      {[
        { size:320, top:'-80px',  left:'-80px',  opacity:0.04 },
        { size:240, bottom:'40px',right:'-60px',  opacity:0.06 },
        { size:180, top:'40%',   left:'60%',     opacity:0.03 },
      ].map((c,i) => (
        <div key={i} style={{ position:'absolute', width:c.size, height:c.size, borderRadius:'50%', background:'var(--nex-red)', top:c.top, bottom:c.bottom, left:c.left, right:c.right, opacity:c.opacity, pointerEvents:'none' }}/>
      ))}

      <div style={{ textAlign:'center', maxWidth:'560px', position:'relative', zIndex:1 }}>

        {/* Giant 404 */}
        <div style={{ fontSize:'clamp(6rem,20vw,10rem)', fontWeight:900, lineHeight:1, color:'var(--nex-red)', letterSpacing:'-4px', marginBottom:'0.5rem', fontFamily:'system-ui', userSelect:'none' }}>
          404
        </div>

        {/* Icon */}
        <div style={{ background:'var(--nex-red-light)', width:'72px', height:'72px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.5rem', color:'var(--nex-red)' }}>
          <BookOpen size={34}/>
        </div>

        <h1 style={{ fontSize:'clamp(1.5rem,4vw,2rem)', marginBottom:'0.75rem', color:'var(--nex-charcoal)' }}>
          Page Not Found
        </h1>
        <p style={{ color:'var(--nex-grey-500)', fontSize:'1.05rem', lineHeight:1.7, marginBottom:'2.5rem', maxWidth:'420px', margin:'0 auto 2.5rem' }}>
          The page you're looking for doesn't exist or has been moved. Let us help you find what you need.
        </p>

        {/* Primary buttons */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center', marginBottom:'3rem' }}>
          <Link href="/" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'linear-gradient(135deg,var(--nex-red),#a81e1e)', color:'white', padding:'0.85rem 2rem', borderRadius:'50px', fontWeight:700, textDecoration:'none', fontSize:'1rem' }}>
            <Home size={17}/> Go to Homepage
          </Link>
          <button onClick={() => history.back()} style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'transparent', color:'var(--nex-charcoal)', padding:'0.85rem 2rem', borderRadius:'50px', fontWeight:600, border:'2px solid var(--nex-grey-300)', fontSize:'1rem', cursor:'pointer' }}>
            <ArrowLeft size={17}/> Go Back
          </button>
        </div>

        {/* Quick links */}
        <div style={{ borderTop:'1px solid var(--nex-grey-200)', paddingTop:'2rem' }}>
          <p style={{ fontSize:'0.85rem', color:'var(--nex-grey-500)', marginBottom:'1rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.5px' }}>Or visit one of these pages</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.6rem', justifyContent:'center' }}>
            {quickLinks.map(l => (
              <Link key={l.href} href={l.href} style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'white', color:'var(--nex-charcoal)', padding:'0.5rem 1.1rem', borderRadius:'50px', fontWeight:600, textDecoration:'none', fontSize:'0.875rem', border:'1px solid var(--nex-grey-200)', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', transition:'all 0.2s' }}>
                <span style={{ color:'var(--nex-red)' }}>{l.icon}</span>{l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

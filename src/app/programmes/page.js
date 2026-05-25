import Link from 'next/link';
import { GraduationCap, HeartPulse, Building2, BookOpen, HeartHandshake, School, ArrowRight } from 'lucide-react';

export const metadata = {
  metadataBase: new URL('https://www.nexzenfoundation.in'),
  title: 'Programmes | Scholarships, Healthcare, NTSE, School Upgradation | NexZen Foundation West Bengal',
  description: 'NexZen Foundation programmes: merit scholarships, free healthcare camps, IPEC professional colleges, Smart Bangla Classroom school upgradation, social services, and free career consultancy across West Bengal.',
  keywords: 'NexZen Foundation programmes, NGO programmes West Bengal, scholarship programme West Bengal, healthcare camp NGO, school upgradation West Bengal, IPEC college West Bengal, social welfare programme West Bengal',
  alternates: { canonical: 'https://www.nexzenfoundation.in/programmes' },
  openGraph: {
    title: 'Programmes | NexZen Foundation West Bengal',
    description: 'Scholarships, healthcare, IPEC colleges, Smart Bangla Classroom, social services — all our programmes in West Bengal.',
    url: 'https://www.nexzenfoundation.in/programmes',
    siteName: 'NexZen Foundation',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Programmes | NexZen Foundation', description: 'Scholarships, healthcare, school upgradation, and social services in West Bengal.' },
  title: 'Our Programmes | NexZen Foundation',
  description: 'Explore NexZen Foundation’s initiatives in education, healthcare, institutional support, and social welfare across West Bengal.',
};

const programmes = [
  {
    id: 'scholarships',
    title: 'Scholarships',
    desc: 'Financial aid including Savitri Bai Phule & NTSE scholarships for deserving rural students.',
    icon: <GraduationCap size={32} />,
    color: 'var(--nex-red)',
    bg: 'var(--nex-red-light)',
    image: '/images/hero_scholarship.png'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    desc: 'Free medical camps, blood donation drives, and health awareness in underserved areas.',
    icon: <HeartPulse size={32} />,
    color: 'var(--nex-teal)',
    bg: '#E6FAF8', // Teal light
    image: '/images/hero_healthcare.png'
  },
  {
    id: 'ipec',
    title: 'IPEC',
    desc: 'Support and establishment of professional colleges to enhance rural higher education.',
    icon: <Building2 size={32} />,
    color: 'var(--nex-gold)',
    bg: '#FEF9E7', // Gold light
    image: '/images/6093388120406561434_121.jpg'
  },
  {
    id: 'school-upgradation',
    title: 'Smart Bangla Classroom Programme',
    desc: 'Upgrading rural schools with NEP 2020-aligned digital classrooms and SDG 4-compliant learning frameworks.',
    icon: <School size={32} />,
    color: 'var(--nex-blue)',
    bg: '#EEF2FF', // Blue light
    image: '/images/hero_school.png'
  },
  {
    id: 'consultancy',
    title: 'Consultancy',
    desc: 'Academic and career guidance helping students navigate higher education pathways.',
    icon: <BookOpen size={32} />,
    color: '#8B5CF6', // Purple
    bg: '#F5F3FF', // Purple light
    image: '/images/6093388120406561430_121.jpg'
  },
  {
    id: 'social-services',
    title: 'Social Services',
    desc: 'Winter relief, disaster response, and holistic community welfare initiatives.',
    icon: <HeartHandshake size={32} />,
    color: '#EC4899', // Pink
    bg: '#FDF2F8', // Pink light
    image: '/images/hero_social.png'
  }
];

export default function Programmes() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561429_121.jpg")', minHeight: '45vh' }}>
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.72) 100%)' }}></div>
        <div className="container text-center page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>OUR INITIATIVES</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>
            Programmes & Impact
          </h1>
          <p className="animate-fade-in" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: '550px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            Discover how we are building stronger communities through targeted interventions across West Bengal.
          </p>
        </div>
      </section>

      <section className="container section-padding">
        <div className="grid-3-col">
          {programmes.map((prog, i) => (
            <Link 
              href={`/programmes/${prog.id}`} 
              key={prog.id} 
              className={`prog-card reveal reveal-delay-${(i % 3) + 1}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="prog-card-image" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img src={prog.image} alt={prog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="prog-img" />
                {/* Hover Overlay */}
                <div className="prog-overlay" style={{
                  position: 'absolute', inset: 0, 
                  background: 'linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.4) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 0, transition: 'opacity 0.3s ease'
                }}>
                  <div style={{ 
                    display: 'flex', alignItems: 'center', gap: '0.5rem', 
                    color: 'white', fontWeight: 600, fontSize: '1.1rem',
                    transform: 'translateY(20px)', transition: 'transform 0.3s ease',
                    className: 'prog-overlay-text'
                  }}>
                    Explore Programme <ArrowRight size={20} />
                  </div>
                </div>
                {/* Icon Badge */}
                <div style={{
                  position: 'absolute', bottom: '-24px', right: '24px',
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: prog.bg, color: prog.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 2
                }}>
                  {prog.icon}
                </div>
              </div>
              <div style={{ padding: '2.5rem 1.75rem 1.75rem 1.75rem', background: 'white', border: '1px solid var(--nex-grey-200)', borderTop: 'none', borderRadius: '0 0 var(--radius-xl) var(--radius-xl)', height: '100%' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--nex-charcoal)', transition: 'color 0.2s ease' }} className="prog-title">
                  {prog.title}
                </h3>
                <p style={{ color: 'var(--nex-grey-500)', lineHeight: 1.6, margin: 0 }}>
                  {prog.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .prog-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out);
        }
        .prog-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }
        .prog-card:hover .prog-img {
          transform: scale(1.05);
        }
        .prog-card:hover .prog-overlay {
          opacity: 1;
        }
        .prog-card:hover .prog-overlay > div {
          transform: translateY(0);
        }
        .prog-card:hover .prog-title {
          color: var(--nex-red);
        }
      `}</style>
    </>
  );
}

import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Building2, HeartPulse, HeartHandshake, School } from 'lucide-react';

export default function ProgrammesLanding() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561434_121.jpg")', minHeight: '45vh' }}>
        <div className="page-hero-overlay"></div>
        <div className="container text-center page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>WHAT WE DO</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>Our Programmes</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '550px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            Six comprehensive pillars driving holistic development in West Bengal.
          </p>
        </div>
      </section>

      <section className="container section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          <ProgrammeCard
            icon={<GraduationCap size={28} />}
            title="Scholarships"
            description="Financial aid and mentorship for meritorious students from marginalized backgrounds. Features the Savitribai Phule Scholarship and NexZen Talent Search."
            href="/programmes/scholarships"
            image="/images/hero_scholarship.png"
            delay="1"
          />
          <ProgrammeCard
            icon={<Building2 size={28} />}
            title="IPEC"
            description="Establishing integrated professional colleges (Law, Pharmacy, Nursing) in rural hubs to halt brain drain."
            href="/programmes/ipec"
            image="/images/hero_legal.png"
            delay="2"
          />
          <ProgrammeCard
            icon={<BookOpen size={28} />}
            title="Consultancy"
            description="Expert guidance for students and institutions to navigate academic and regulatory landscapes."
            href="/programmes/consultancy"
            image="/images/6093388120406561429_121.jpg"
            delay="3"
          />
          <ProgrammeCard
            icon={<HeartPulse size={28} />}
            title="Healthcare"
            description="Community health camps, mobile clinics, and awareness programmes in underserved regions."
            href="/programmes/healthcare"
            image="/images/hero_healthcare.png"
            delay="4"
          />
          <ProgrammeCard
            icon={<HeartHandshake size={28} />}
            title="Social Services"
            description="Relief distribution, community welfare, and localized social support initiatives."
            href="/programmes/social-services"
            image="/images/hero_social.png"
            delay="5"
          />
          <ProgrammeCard
            icon={<School size={28} />}
            title="School Upgradation"
            description="Modernizing infrastructure, libraries, and digital capabilities of existing schools."
            href="/programmes/school-upgradation"
            image="/images/hero_school.png"
            delay="6"
          />
        </div>
      </section>
    </>
  );
}

function ProgrammeCard({ icon, title, description, href, image, delay }) {
  return (
    <Link href={href} className={`card reveal reveal-delay-${delay}`} style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s var(--ease-out)' }} />
      </div>
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ marginTop: '-3.5rem', marginBottom: '1rem', background: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)', color: 'var(--nex-red)', position: 'relative', zIndex: 2 }}>
          {icon}
        </div>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{title}</h3>
        <p style={{ color: 'var(--nex-grey-500)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.7 }}>{description}</p>
        <div style={{ color: 'var(--nex-red)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
          Explore Pillar <ArrowRight size={15} />
        </div>
      </div>
    </Link>
  );
}

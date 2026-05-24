import { Target, Eye, HandHeart, Users, Lightbulb, Scale, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561430_121.jpg")', minHeight: '45vh' }}>
        <div className="page-hero-overlay"></div>
        <div className="container text-center page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>OUR STORY</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>About NexZen Foundation</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '550px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            A legacy of empathy, empowerment, and excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div className="reveal" style={{ position: 'relative' }}>
            <img src="/images/6093388120406561429_121.jpg" alt="Foundation History" style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', position: 'relative', zIndex: 2 }} />
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'linear-gradient(135deg, var(--nex-red), var(--nex-red-dark))', color: 'white', padding: '1.75rem 2rem', borderRadius: 'var(--radius-xl)', zIndex: 3, boxShadow: 'var(--shadow-red)' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-serif)', lineHeight: 1 }}>10+ Years</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '0.25rem' }}>of Community Impact</div>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="section-label">OUR JOURNEY</div>
            <h2 className="section-title">Our Story</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              The NexZen Foundation was born out of a simple yet profound realization: potential is equally distributed, but opportunity is not. Over a decade ago, a group of dedicated professionals came together in West Bengal with a shared vision to bridge this gap.
            </p>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              What started as a small scholarship initiative has blossomed into a comprehensive socio-educational movement. Today, our footprint spans 8 districts, touching thousands of lives.
            </p>
            <p style={{ color: 'var(--nex-grey-500)' }}>
              By combining financial support, institutional capacity building, and direct community welfare, we create a holistic ecosystem of empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: 'linear-gradient(180deg, var(--nex-grey-50) 0%, white 100%)', padding: '6rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div className="card reveal" style={{ padding: '3rem', borderLeft: '4px solid var(--nex-red)' }}>
            <div style={{ marginBottom: '1.5rem', background: 'var(--nex-red-light)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Target size={28} color="var(--nex-red)" />
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Mission</h3>
            <p style={{ color: 'var(--nex-grey-700)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              To democratize access to quality education, professional training, and essential social services, empowering individuals and communities to break the cycle of poverty and achieve self-reliance.
            </p>
          </div>
          <div className="card reveal reveal-delay-2" style={{ padding: '3rem', borderLeft: '4px solid var(--nex-teal)' }}>
            <div style={{ marginBottom: '1.5rem', background: '#E6FAF8', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Eye size={28} color="var(--nex-teal)" />
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Vision</h3>
            <p style={{ color: 'var(--nex-grey-700)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              A society where every individual, regardless of their socio-economic background, has the opportunity and resources to realize their full potential and contribute meaningfully to the nation's progress.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container section-padding text-center">
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <div className="section-label" style={{ paddingLeft: 0 }}>WHAT DRIVES US</div>
          <h2 className="section-title">Our Core Values</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <ValueCard icon={<HandHeart size={24} />} title="Empathy" text="Understanding and addressing the genuine needs of the communities we serve." delay="1" />
          <ValueCard icon={<Scale size={24} />} title="Equity" text="Ensuring fair distribution of resources and opportunities to level the playing field." delay="2" />
          <ValueCard icon={<Lightbulb size={24} />} title="Excellence" text="Striving for the highest standards in all our institutional and community interventions." delay="3" />
          <ValueCard icon={<Users size={24} />} title="Collaboration" text="Partnering with governments, communities, and stakeholders for scalable impact." delay="4" />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--nex-charcoal)', padding: '5rem 0' }}>
        <div className="container text-center">
          <h2 className="reveal" style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Join Our Mission</h2>
          <p className="reveal reveal-delay-1" style={{ color: 'var(--nex-grey-400)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
            Whether you volunteer, donate, or spread the word — every action counts.
          </p>
          <Link href="/donate" className="reveal reveal-delay-2 btn-primary">
            Support Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ValueCard({ icon, title, text, delay }) {
  return (
    <div className={`card reveal reveal-delay-${delay}`} style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
      <div style={{ background: 'linear-gradient(135deg, var(--nex-red), var(--nex-red-dark))', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: 'white' }}>
        {icon}
      </div>
      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{title}</h4>
      <p style={{ color: 'var(--nex-grey-500)', fontSize: '0.95rem', lineHeight: 1.7 }}>{text}</p>
    </div>
  );
}

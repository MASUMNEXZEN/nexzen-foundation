import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Building2, HeartPulse, HeartHandshake, School, Quote, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '120px',
        backgroundImage: 'url("/images/6093388120406561434_121.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '-80px',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.85) 60%, rgba(212,43,43,0.4) 100%)',
        }}></div>
        
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,43,43,0.08) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '750px' }}>
            <div className="animate-fade-in" style={{ display: 'inline-block', background: 'rgba(212,43,43,0.15)', color: 'var(--nex-red)', padding: '0.4rem 1.25rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', border: '1px solid rgba(212,43,43,0.3)' }}>
              CHARITABLE TRUST · WEST BENGAL
            </div>
            
            <h1 className="animate-fade-in" style={{
              fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
              color: 'white',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              animationDelay: '0.15s',
              opacity: 0,
            }}>
              Empowering Communities.<br />
              Building Institutions.<br />
              <span style={{ background: 'linear-gradient(135deg, #FF6B6B, #D42B2B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Transforming Futures.</span>
            </h1>
            
            <p className="animate-fade-in" style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '580px',
              lineHeight: 1.8,
              animationDelay: '0.3s',
              opacity: 0,
            }}>
              Dedicated to democratising access to quality education, professional training, and essential social services across 8 districts of West Bengal.
            </p>
            
            <div className="animate-fade-in" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', animationDelay: '0.45s', opacity: 0, flexWrap: 'wrap' }}>
              <Link href="/programmes" className="btn-primary">
                Explore Our Work <ArrowRight size={18} />
              </Link>
              <Link href="/donate" className="btn-secondary">
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.75rem',
          letterSpacing: '2px',
          animation: 'pulse 2s ease-in-out infinite',
        }}>
          <span>SCROLL</span>
          <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }}></div>
        </div>
      </section>

      {/* ===== IMPACT STATS ===== */}
      <section className="container" style={{ marginTop: '-5rem', position: 'relative', zIndex: 10 }}>
        <div className="stats-strip">
          <div className="stat-item">
            <div className="stat-number">8</div>
            <div className="stat-label">Districts</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Students</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">6</div>
            <div className="stat-label">Pillars</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">₹10L</div>
            <div className="stat-label">Scholarships</div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section className="container section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div className="reveal">
            <div className="section-label">WHO WE ARE</div>
            <h2 className="section-title">A Legacy of Empowerment</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.25rem' }}>
              For over a decade, NexZen Foundation has been a beacon of hope and progress in West Bengal. Our mission is rooted in the belief that systemic change begins with education and holistic community support.
            </p>
            <p style={{ marginBottom: '2.5rem', color: 'var(--nex-grey-500)' }}>
              From scholarships for meritorious students to establishing professional colleges and delivering essential healthcare, our multifaceted approach addresses the critical needs of rural and semi-urban populations.
            </p>
            <Link href="/about" className="btn-primary" style={{ background: 'var(--nex-charcoal)' }}>
              Discover Our Story <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
            <img src="/images/6093388120406561429_121.jpg" alt="Foundation Activity" style={{
              width: '100%',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative',
              zIndex: 2,
            }} />
            {/* Red accent frame */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              bottom: '16px',
              left: '16px',
              border: '3px solid var(--nex-red)',
              borderRadius: 'var(--radius-xl)',
              zIndex: 1,
              opacity: 0.4,
            }}></div>
            {/* Floating badge */}
            <div style={{
              position: 'absolute',
              bottom: '-24px',
              left: '-24px',
              background: 'linear-gradient(135deg, var(--nex-red), var(--nex-red-dark))',
              color: 'white',
              padding: '1.5rem 2rem',
              borderRadius: 'var(--radius-xl)',
              zIndex: 3,
              boxShadow: 'var(--shadow-red)',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-serif)', lineHeight: 1 }}>10+</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '0.25rem' }}>Years of Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT MAP (DISTRICTS) ===== */}
      <section className="container section-padding" style={{ paddingTop: '2rem' }}>
        <div className="text-center reveal" style={{ marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ paddingLeft: 0 }}>OUR FOOTPRINT</div>
          <h2 className="section-title">Impact Across West Bengal</h2>
          <p className="section-subtitle centered">
            We currently operate active programmes across 8 key districts, bringing education, healthcare, and infrastructure to areas that need it most.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <DistrictCard name="Murshidabad" stat="3,200+ Students Supported" delay="1" />
          <DistrictCard name="Malda" stat="5 Healthcare Camps" delay="2" />
          <DistrictCard name="Birbhum" stat="12 Schools Upgraded" delay="3" />
          <DistrictCard name="Hooghly" stat="450 Scholarships Awarded" delay="4" />
          <DistrictCard name="Howrah" stat="Community Training Center" delay="5" />
          <DistrictCard name="North 24 Parganas" stat="IPEC College Initiative" delay="6" />
          <DistrictCard name="South 24 Parganas" stat="Relief & Social Services" delay="7" />
          <DistrictCard name="Nadia" stat="Career Consultancy Hub" delay="8" />
        </div>
      </section>

      {/* ===== PROGRAMME PILLARS ===== */}
      <section style={{ background: 'linear-gradient(180deg, var(--nex-grey-50) 0%, white 100%)', padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <div className="section-label" style={{ paddingLeft: 0 }}>OUR PROGRAMMES</div>
            <h2 className="section-title">Six Pillars of Impact</h2>
            <p className="section-subtitle centered">
              Comprehensive programmes designed to address educational, professional, and societal challenges across West Bengal.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            <PillarCard icon={<GraduationCap size={28} />} title="Scholarships" description="Financial aid and mentorship for meritorious students from marginalized backgrounds." href="/programmes/scholarships" delay="1" />
            <PillarCard icon={<Building2 size={28} />} title="IPEC" description="Establishing integrated professional colleges in rural hubs to halt brain drain." href="/programmes/ipec" delay="2" />
            <PillarCard icon={<BookOpen size={28} />} title="Consultancy" description="Expert guidance for students and institutions to navigate academic landscapes." href="/programmes/consultancy" delay="3" />
            <PillarCard icon={<HeartPulse size={28} />} title="Healthcare" description="Community health camps, mobile clinics, and awareness programmes." href="/programmes/healthcare" delay="4" />
            <PillarCard icon={<HeartHandshake size={28} />} title="Social Services" description="Relief distribution, community welfare, and localized social support." href="/programmes/social-services" delay="5" />
            <PillarCard icon={<School size={28} />} title="School Upgradation" description="Modernizing infrastructure, libraries, and digital capabilities of schools." href="/programmes/school-upgradation" delay="6" />
          </div>
        </div>
      </section>

      {/* ===== PHOTO GALLERY ===== */}
      <section className="container section-padding">
        <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
          <div className="section-label" style={{ paddingLeft: 0 }}>FROM THE FIELD</div>
          <h2 className="section-title">Action on the Ground</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {['6093388120406561430_121.jpg', '6093388120406561431_121.jpg', '6093388120406561432_121.jpg', '6093388120406561433_121.jpg'].map((img, i) => (
            <div key={i} className={`gallery-item reveal reveal-delay-${i+1}`}>
              <img src={`/images/${img}`} alt={`Activity ${i+1}`} />
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '2.5rem' }}>
          <Link href="/gallery" style={{ color: 'var(--nex-charcoal)', fontWeight: 600, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section style={{
        background: 'linear-gradient(135deg, var(--nex-red) 0%, var(--nex-red-dark) 100%)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}></div>
        <div style={{ position: 'absolute', bottom: '-80px', left: '10%', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }}></div>
        
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1.25rem' }}>
            Every child deserves an opportunity.
          </h2>
          <p className="reveal reveal-delay-1" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Join us in our mission to build a more equitable society. Your support can transform a life, build an institution, and uplift a community.
          </p>
          <Link href="/donate" className="reveal reveal-delay-2 btn-primary" style={{ background: 'white', color: 'var(--nex-red)', boxShadow: 'var(--shadow-lg)' }}>
            Make a Contribution Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

function PillarCard({ icon, title, description, href, delay }) {
  return (
    <Link href={href} className={`pillar-card reveal reveal-delay-${delay}`}>
      <div className="pillar-icon">{icon}</div>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ color: 'var(--nex-grey-500)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.7 }}>{description}</p>
      <div style={{ color: 'var(--nex-red)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
        Learn More <ArrowRight size={15} />
      </div>
    </Link>
  );
}

function DistrictCard({ name, stat, delay }) {
  return (
    <div className={`card reveal reveal-delay-${delay} district-card`} style={{ 
      padding: '2rem 1.5rem', 
      textAlign: 'center', 
      borderTop: '3px solid transparent',
      transition: 'all 0.3s ease',
      cursor: 'default'
    }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--nex-grey-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
        <MapPin size={24} color="var(--nex-charcoal)" />
      </div>
      <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--nex-charcoal)' }}>{name}</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--nex-red)', fontWeight: 600, margin: 0 }}>{stat}</p>
    </div>
  );
}

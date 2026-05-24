import { Building2, HeartPulse, Scale, Activity } from 'lucide-react';

export const metadata = {
  title: 'Integrated Professional Educational Campuses (IPEC) | NexZen',
  description: 'Establishing multi-disciplinary professional colleges in rural hubs to halt brain drain.',
};

export default function IPEC() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      <section style={heroStyles}>
        <div style={heroOverlayStyles}></div>
        <div className="container" style={heroContentStyles}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ color: 'var(--nex-red)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Pillar II</div>
            <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1.5rem' }}>Integrated Professional Educational Campuses</h1>
            <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--nex-grey-100)', animationDelay: '0.2s' }}>
              Halting the brain drain by establishing state-of-the-art Law, Pharmacy, and Nursing colleges right where they are needed most—in the heart of rural Bengal.
            </p>
          </div>
        </div>
      </section>

      <section className="container text-center">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--nex-charcoal)' }}>The IPEC Vision</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          Rural students often have to migrate to Tier-1 cities for professional education, incurring heavy costs and causing a "brain drain" from their local communities. The IPEC model builds high-quality, multi-disciplinary campuses locally.
        </p>
        
        <div className="grid-3-col">
          <CollegeCard 
            icon={<Scale size={32} color="var(--nex-red)" />}
            title="College of Law"
            desc="Offering B.A. LL.B and LL.B programmes. Empowering students with legal knowledge to fight for community rights."
            highlight="Free Legal Aid Clinic attached"
          />
          <CollegeCard 
            icon={<Activity size={32} color="var(--nex-red)" />}
            title="College of Pharmacy"
            desc="D.Pharm and B.Pharm courses equipped with modern laboratories. Training the next generation of healthcare manufacturers and retailers."
            highlight="Community Dispensary attached"
          />
          <CollegeCard 
            icon={<HeartPulse size={32} color="var(--nex-red)" />}
            title="College of Nursing"
            desc="B.Sc Nursing and GNM courses. Bridging the critical gap in rural healthcare staffing with highly trained professionals."
            highlight="Rural Health Camps attached"
          />
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--nex-grey-100)', padding: '5rem 0' }}>
        <div className="container grid-2-col">
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Shared Infrastructure Model</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              To ensure financial sustainability while keeping fees affordable, the IPEC model utilizes shared infrastructure across the three institutions.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--nex-grey-400)' }}>
              This includes shared centralized libraries, computer centers, auditoriums, cafeterias, and transport facilities—optimizing the capital expenditure (CapEx) required to build these campuses.
            </p>
          </div>
          <div>
            <img src="/images/hero_legal.png" alt="IPEC Campus Concept" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} />
          </div>
        </div>
      </section>
    </div>
  );
}

function CollegeCard({ icon, title, desc, highlight }) {
  return (
    <div style={collegeCardStyle}>
      <div style={iconWrapper}>{icon}</div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: 'var(--nex-grey-700)', marginBottom: '1.5rem', flexGrow: 1 }}>{desc}</p>
      <div style={{ backgroundColor: 'var(--nex-red-light)', color: 'var(--nex-red)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', fontWeight: 600, fontSize: '0.9rem', marginTop: 'auto' }}>
        {highlight}
      </div>
    </div>
  );
}

const heroStyles = {
  position: 'relative',
  height: '50vh',
  minHeight: '400px',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: 'url("/images/hero_school.png")', // using school building as placeholder for campus
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginTop: '-80px',
};

const heroOverlayStyles = {
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(26, 26, 26, 0.75)',
  background: 'linear-gradient(90deg, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.4) 100%)',
};

const heroContentStyles = {
  position: 'relative',
  zIndex: 1,
  paddingTop: '80px',
};

const gridThreeCol = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
};

const gridTwoCol = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '4rem',
  alignItems: 'center',
};

const collegeCardStyle = {
  backgroundColor: 'white',
  padding: '2.5rem',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-sm)',
  display: 'flex',
  flexDirection: 'column',
  borderTop: '4px solid var(--nex-red)',
};

const iconWrapper = {
  marginBottom: '1.5rem',
  backgroundColor: 'var(--nex-grey-100)',
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 1.5rem auto',
};

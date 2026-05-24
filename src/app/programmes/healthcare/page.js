import { HeartPulse, Stethoscope, Truck, Activity } from 'lucide-react';

export const metadata = {
  title: 'Healthcare | NexZen Foundation',
  description: 'Community health camps, mobile clinics, and awareness programmes in underserved regions.',
};

export default function Healthcare() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      <section style={heroStyles}>
        <div style={heroOverlayStyles}></div>
        <div className="container" style={heroContentStyles}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ color: 'var(--nex-red)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Pillar IV</div>
            <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem' }}>Healthcare Initiatives</h1>
            <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--nex-grey-100)', animationDelay: '0.2s' }}>
              Taking basic healthcare services to the last mile. We believe a healthy community is the foundation of a prosperous society.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div style={gridTwoCol}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--nex-charcoal)' }}>Our Healthcare Model</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              In rural areas, access to primary healthcare is often a challenge due to distance, cost, and lack of awareness. NexZen Foundation operates a dynamic healthcare model that brings doctors and medicines directly to the community.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Our initiatives are integrated with our Nursing and Pharmacy college projects, allowing our nursing students to gain hands-on community medicine experience while serving the people.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <FeatureCard icon={<Truck size={24} color="var(--nex-red)" />} title="Mobile Medical Units" text="Vans equipped with basic diagnostics and medicines traveling to remote villages." />
            <FeatureCard icon={<Stethoscope size={24} color="var(--nex-red)" />} title="Specialist Health Camps" text="Weekend camps for Eye Care, Dental, and Women's Health." />
            <FeatureCard icon={<Activity size={24} color="var(--nex-red)" />} title="Awareness Drives" text="Sanitation, hygiene, and preventive healthcare education." />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div style={featureCardStyle}>
      <div style={iconWrapper}>{icon}</div>
      <div>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{title}</h4>
        <p style={{ color: 'var(--nex-grey-700)', fontSize: '0.95rem', margin: 0 }}>{text}</p>
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
  backgroundImage: 'url("/images/hero_healthcare.png")',
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

const gridTwoCol = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '4rem',
  alignItems: 'center',
};

const featureCardStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  padding: '1.5rem',
  backgroundColor: 'white',
  borderRadius: 'var(--radius-md)',
  boxShadow: 'var(--shadow-sm)',
  border: '1px solid var(--nex-grey-100)',
};

const iconWrapper = {
  backgroundColor: 'var(--nex-red-light)',
  minWidth: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

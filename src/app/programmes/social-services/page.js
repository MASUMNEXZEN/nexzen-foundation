import { HeartHandshake, Utensils, Droplets, Home } from 'lucide-react';

export const metadata = {
  title: 'Social Services | NexZen Foundation',
  description: 'Relief distribution, community welfare, and localized social support initiatives.',
};

export default function SocialServices() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      <section style={heroStyles}>
        <div style={heroOverlayStyles}></div>
        <div className="container" style={heroContentStyles}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ color: 'var(--nex-red)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Pillar V</div>
            <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem' }}>Social Services</h1>
            <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--nex-grey-100)', animationDelay: '0.2s' }}>
              Direct action and relief when the community needs it most. Because compassion cannot wait.
            </p>
          </div>
        </div>
      </section>

      <section className="container text-center">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--nex-charcoal)' }}>Our Interventions</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 3rem auto', color: 'var(--nex-grey-700)' }}>
          Beyond structural programmes like education and healthcare, NexZen Foundation actively engages in immediate relief and social welfare activities to support the most vulnerable sections of society.
        </p>

        <div style={gridGrid}>
          <InterventionCard icon={<Utensils size={32} color="var(--nex-red)" />} title="Food Distribution" text="Regular community kitchen drives and dry ration distribution for impoverished families." />
          <InterventionCard icon={<Home size={32} color="var(--nex-red)" />} title="Winter Relief" text="Distribution of blankets and warm clothing in rural tribal belts during harsh winters." />
          <InterventionCard icon={<Droplets size={32} color="var(--nex-red)" />} title="Clean Water" text="Installing tubewells and water purifiers in remote villages facing clean drinking water scarcity." />
          <InterventionCard icon={<HeartHandshake size={32} color="var(--nex-red)" />} title="Disaster Relief" text="Emergency response, food, and shelter support during floods or natural calamities." />
        </div>
      </section>
    </div>
  );
}

function InterventionCard({ icon, title, text }) {
  return (
    <div style={cardStyle}>
      <div style={iconWrapper}>{icon}</div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: 'var(--nex-grey-700)' }}>{text}</p>
    </div>
  );
}

const heroStyles = {
  position: 'relative',
  height: '50vh',
  minHeight: '400px',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: 'url("/images/hero_social.png")',
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

const gridGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '2.5rem',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-md)',
  borderTop: '4px solid var(--nex-red)',
  textAlign: 'left',
};

const iconWrapper = {
  marginBottom: '1.5rem',
  backgroundColor: 'var(--nex-red-light)',
  width: '64px',
  height: '64px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

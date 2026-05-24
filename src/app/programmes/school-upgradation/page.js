import { School, PaintBucket, Monitor, Library } from 'lucide-react';

export const metadata = {
  title: 'School Upgradation | NexZen Foundation',
  description: 'Modernizing infrastructure, libraries, and digital capabilities of existing rural schools.',
};

export default function SchoolUpgradation() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      <section style={heroStyles}>
        <div style={heroOverlayStyles}></div>
        <div className="container" style={heroContentStyles}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ color: 'var(--nex-red)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Pillar VI</div>
            <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem' }}>School Upgradation</h1>
            <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--nex-grey-100)', animationDelay: '0.2s' }}>
              We transform dilapidated government and aided schools into vibrant, modern centres of learning.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div style={gridTwoCol}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--nex-charcoal)' }}>Building Better Environments</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              The physical environment of a school deeply impacts a child's psychology and willingness to learn. Many rural schools suffer from poor sanitation, broken furniture, and zero digital access.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              NexZen Foundation identifies such schools and undertakes comprehensive upgradation projects. Our goal is to provide a physical environment that matches the intellectual potential of the students.
            </p>
          </div>
          <div style={upgradationGrid}>
            <FeatureCard icon={<PaintBucket size={24} color="var(--nex-red)" />} title="Civil & Infrastructure" text="Painting, roof repairs, building modern toilets for girls, and providing clean drinking water facilities." />
            <FeatureCard icon={<Monitor size={24} color="var(--nex-red)" />} title="Digital Classrooms" text="Installing smart boards, projectors, and setting up basic computer labs to bridge the digital divide." />
            <FeatureCard icon={<Library size={24} color="var(--nex-red)" />} title="Library Setup" text="Creating dedicated reading corners with books in local languages and English to foster a reading habit." />
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
  backgroundImage: 'url("/images/hero_school.png")',
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

const upgradationGrid = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
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

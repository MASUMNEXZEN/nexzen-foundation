import { BookOpen, GraduationCap, Building } from 'lucide-react';

export const metadata = {
  title: 'Consultancy | NexZen Foundation',
  description: 'Expert guidance for students and institutions to navigate academic and regulatory landscapes.',
};

export default function Consultancy() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      <section style={heroStyles}>
        <div style={heroOverlayStyles}></div>
        <div className="container" style={heroContentStyles}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ color: 'var(--nex-red)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Pillar III</div>
            <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem' }}>Consultancy Services</h1>
            <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--nex-grey-100)', animationDelay: '0.2s' }}>
              Bridging the knowledge gap. We provide expert advisory services for students seeking higher education pathways and institutions navigating complex regulatory frameworks.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div style={gridTwoCol}>
          <div style={serviceCard}>
            <div style={iconWrapper}><GraduationCap size={32} color="var(--nex-red)" /></div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>For Students</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--nex-grey-700)' }}>
              Many bright students from rural areas lack the awareness and guidance to choose the right career paths. Our academic counselors provide:
            </p>
            <ul style={listStyle}>
              <li>Career mapping and aptitude assessments.</li>
              <li>Guidance on entrance examinations (NEET, CLAT, WBJEE).</li>
              <li>Assistance with college admissions and documentation.</li>
              <li>Information on government and private scholarship schemes.</li>
            </ul>
          </div>
          <div style={serviceCard}>
            <div style={iconWrapper}><Building size={32} color="var(--nex-red)" /></div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>For Institutions</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--nex-grey-700)' }}>
              Setting up a new educational institution requires navigating a maze of regulations. We act as Project Management Consultants (PMC) for educational trusts to handle:
            </p>
            <ul style={listStyle}>
              <li>Regulatory approvals (AICTE, BCI, PCI, INC, State Universities).</li>
              <li>Detailed Project Report (DPR) preparation.</li>
              <li>Infrastructure planning and architectural compliance.</li>
              <li>Faculty recruitment structuring and compliance.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

const heroStyles = {
  position: 'relative',
  height: '50vh',
  minHeight: '400px',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: 'url("/images/6093388120406561429_121.jpg")',
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
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '3rem',
};

const serviceCard = {
  backgroundColor: 'white',
  padding: '3rem',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-md)',
  borderTop: '4px solid var(--nex-red)',
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

const listStyle = {
  paddingLeft: '1.5rem',
  lineHeight: 1.8,
  color: 'var(--nex-grey-700)',
};

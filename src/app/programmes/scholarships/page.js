import { CheckCircle2, FileText, Gift, LineChart, Users } from 'lucide-react';

export const metadata = {
  metadataBase: new URL('https://www.nexzenfoundation.in'),
  title: 'Scholarships West Bengal | Merit-Based Financial Aid | NexZen Foundation',
  description: 'NexZen Foundation scholarships for meritorious students from economically weaker sections in West Bengal. Financial aid, mentorship, and academic support for deserving students regardless of background.',
  keywords: 'scholarship West Bengal, merit scholarship NGO West Bengal, financial aid students West Bengal, NexZen scholarship, scholarship poor students West Bengal, education fund West Bengal',
  alternates: { canonical: 'https://www.nexzenfoundation.in/programmes/scholarships' },
  openGraph: { title: 'Scholarships | NexZen Foundation West Bengal', description: 'Merit-based financial aid and mentorship for deserving students across West Bengal.', url: 'https://www.nexzenfoundation.in/programmes/scholarships', siteName: 'NexZen Foundation', locale: 'en_IN', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Scholarships | NexZen Foundation', description: 'Merit-based financial aid for West Bengal students.' },
  title: 'Scholarships | NexZen Foundation',
  description: 'Financial aid and mentorship for meritorious students from marginalized backgrounds.',
};

export default function Scholarships() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      <section style={heroStyles}>
        <div style={heroOverlayStyles}></div>
        <div className="container" style={heroContentStyles}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ color: 'var(--nex-red)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Pillar I</div>
            <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1.5rem' }}>Scholarships</h1>
            <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--nex-grey-100)', animationDelay: '0.2s' }}>
              We believe that financial constraints should never extinguish the fire of a brilliant mind. Our scholarship programmes are designed to identify, nurture, and propel merit.
            </p>
          </div>
        </div>
      </section>

      {/* Savitribai Phule Scholarship */}
      <section className="container">
        <div className="grid-2-col">
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--nex-charcoal)' }}>Savitribai Phule Shiksha Scholarship 2026</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Named after India's pioneering female educator, this flagship programme supports girls and first-generation learners from rural backgrounds who demonstrate exceptional academic promise but face severe economic hardships.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={listItem}><CheckCircle2 color="var(--nex-teal)" /> Full tuition fee coverage and financial support to prevent dropout due to family pressure.</li>
              <li style={listItem}><CheckCircle2 color="var(--nex-teal)" /> Dedicated mentorship from professional women in various industries.</li>
              <li style={listItem}><CheckCircle2 color="var(--nex-teal)" /> Focus on female economic independence and reducing child marriage.</li>
            </ul>
          </div>
          <div style={{ backgroundColor: 'var(--nex-grey-100)', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Core Benefits</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={eligibilityCard}><strong>Empowerment:</strong> Breaking the cycle of poverty through higher education.</div>
              <div style={eligibilityCard}><strong>Mentorship:</strong> Building confidence for first-generation learners.</div>
              <div style={eligibilityCard}><strong>Multiplier Effect:</strong> Educating a woman uplifts the entire community.</div>
            </div>
          </div>
        </div>
      </section>

      {/* NTSE Exam */}
      <section style={{ backgroundColor: 'var(--nex-red)', color: 'white', padding: '5rem 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>NexZen Talent Search Examination (NTSE 2026)</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--nex-red-light)', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            A premier school collaboration programme and competitive examination designed to identify top scholars and prepare them for elite professional pathways.
          </p>
          <div className="grid-4-col">
            <div style={ntseCard}>
              <FileText size={32} style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Tier 1</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>School-level aptitude screening.</p>
            </div>
            <div style={ntseCard}>
              <Users size={32} style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Tier 2</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>District-level competitive assessment.</p>
            </div>
            <div style={ntseCard}>
              <LineChart size={32} style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Tier 3</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>State-level finals and interview.</p>
            </div>
            <div style={ntseCard}>
              <Gift size={32} style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Career Pathways</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Dedicated prep for NEET, WBSSC, & Nursing.</p>
            </div>
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
  backgroundImage: 'url("/images/hero_scholarship.png")',
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

const listItem = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
  fontSize: '1.05rem',
};

const eligibilityCard = {
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: 'var(--radius-md)',
  boxShadow: 'var(--shadow-sm)',
  fontSize: '1.05rem',
};

const ntseCard = {
  padding: '2rem',
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: 'var(--radius-md)',
};


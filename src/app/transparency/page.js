import Link from 'next/link';
import { PieChart, Download, ShieldCheck, BadgeCheck, FileCheck, AlertOctagon } from 'lucide-react';

export const metadata = {
  metadataBase: new URL('https://www.nexzenfoundation.in'),
  title: 'Financial Transparency | 80G Certified | NGO Darpan WB/2025/0892907 | NexZen Foundation',
  description: 'Full financial transparency from NexZen Foundation. 80G certified (AAFTN1149JF20261), NGO Darpan listed (WB/2025/0892907), Trust Registration IV-1901-01209-2025. View fund allocation and annual disclosures.',
  keywords: '80G certificate NGO West Bengal, NGO Darpan West Bengal, transparent NGO India, charitable trust accounts West Bengal, NexZen Foundation transparency, 80G tax exemption donation',
  alternates: { canonical: 'https://www.nexzenfoundation.in/transparency' },
  openGraph: {
    title: 'Financial Transparency | NexZen Foundation',
    description: '80G certified, NGO Darpan listed, fully audited. See how every rupee is used.',
    url: 'https://www.nexzenfoundation.in/transparency',
    siteName: 'NexZen Foundation',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Transparency | NexZen Foundation', description: '80G certified, NGO Darpan listed, fully audited NGO.' },
  title: 'Financial Transparency | NexZen Foundation',
  description: 'NexZen Foundation is committed to full financial transparency. View our fund allocation and annual report disclosures.',
};

export default function Transparency() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--nex-charcoal) 0%, #1a1a2e 100%)', minHeight: '40vh' }}>
        <div className="container text-center page-hero-content" style={{ paddingTop: '100px', paddingBottom: '3rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>ACCOUNTABILITY</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>Financial Transparency</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            We believe in complete openness. See exactly how your contributions are planned to transform lives across West Bengal.
          </p>
        </div>
      </section>

      {/* Audit Notice — trust-forward, not WIP */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(13,148,136,0.08), rgba(13,148,136,0.04))',
        padding: '1.25rem',
        borderBottom: '1px solid rgba(13,148,136,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
        color: 'var(--nex-teal)', fontWeight: 500, fontSize: '0.95rem',
      }}>
        <ShieldCheck size={20} />
        <span>NexZen Foundation was established in August 2025. Our first full independent audit is underway and will be published by Q1 2026. The allocations below reflect our planned fund deployment.</span>
      </div>

      {/* Fund Allocation */}
      <section className="container section-padding">
        <div className="about-section-grid">
          <div className="reveal">
            <div className="section-label">FUND ALLOCATION</div>
            <h2 className="section-title">Where the Money Goes</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--nex-grey-600)', marginBottom: '2rem' }}>
              We ensure that the maximum possible percentage of every rupee donated goes directly to our grassroots programs. Administrative and fundraising costs are kept minimal.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <LegendItem color="var(--nex-teal)" percentage="75%" label="Programme Services (Education, Health, Smart Classrooms)" />
              <LegendItem color="var(--nex-red)" percentage="15%" label="Infrastructure & Operations" />
              <LegendItem color="var(--nex-charcoal)" percentage="10%" label="Administrative & Fundraising" />
            </div>

            <div style={{ marginTop: '2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(13,148,136,0.08)', color: 'var(--nex-teal)', padding: '0.6rem 1.25rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', border: '1px solid rgba(13,148,136,0.2)' }}>
              <ShieldCheck size={16} /> Independent Audit Scheduled for Q1 2026
            </div>
          </div>

          {/* Donut Chart */}
          <div className="reveal reveal-delay-1" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '300px', height: '300px', borderRadius: '50%',
              background: 'conic-gradient(var(--nex-teal) 0% 75%, var(--nex-red) 75% 90%, var(--nex-charcoal) 90% 100%)',
              position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ width: '170px', height: '170px', background: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.06)' }}>
                <PieChart size={28} color="var(--nex-grey-400)" style={{ marginBottom: '0.5rem' }} />
                <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--nex-charcoal)' }}>FY 2025–26</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--nex-grey-500)' }}>Planned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability Pledges */}
      <section style={{ background: 'var(--nex-grey-50)', padding: '5rem 0', borderTop: '1px solid var(--nex-grey-200)' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <div className="section-label" style={{ paddingLeft: 0 }}>OUR COMMITMENTS</div>
            <h2 className="section-title">Accountability Pledges</h2>
          </div>
          <div className="grid-4-col">
            <PledgeCard icon={<FileCheck size={28} />} title="Independent Audit" text="Annual accounts independently audited and published on this page." delay="1" />
            <PledgeCard icon={<ShieldCheck size={28} />} title="80G Certified" text="All donations eligible for tax deduction. Receipts issued within 24 hours." delay="2" />
            <PledgeCard icon={<BadgeCheck size={28} />} title="NGO Darpan Listed" text="Fully registered and verified on the Government of India's NGO Darpan portal." delay="3" />
            <PledgeCard icon={<AlertOctagon size={28} />} title="Zero Misuse Policy" text="Strict internal controls prevent misallocation. Every expense is documented." delay="4" />
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid var(--nex-grey-100)' }}>
        <div className="container text-center reveal">
          <h2 className="section-title">Annual Reports</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--nex-grey-500)' }}>
            Comprehensive annual reports with full financial disclosures, programme milestones, and impact data will be published here as they become available.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <ReportCard year="2025-2026" status="In Progress" note="Publishing Q1 2026" />
          </div>
        </div>
      </section>
    </>
  );
}

function LegendItem({ color, percentage, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.95rem', flexShrink: 0 }}>
        {percentage}
      </div>
      <span style={{ fontWeight: 500, color: 'var(--nex-charcoal)', fontSize: '1.02rem' }}>{label}</span>
    </div>
  );
}

function PledgeCard({ icon, title, text, delay }) {
  return (
    <div className={`pledge-card reveal reveal-delay-${delay}`}>
      <div className="pledge-icon">{icon}</div>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: 'var(--nex-charcoal)' }}>{title}</h3>
      <p style={{ color: 'var(--nex-grey-500)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{text}</p>
    </div>
  );
}

function ReportCard({ year, status, note }) {
  return (
    <div style={{
      background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)',
      border: '1.5px solid var(--nex-grey-200)', width: '260px',
      boxShadow: 'var(--shadow-sm)', textAlign: 'center',
    }}>
      <div style={{ width: '52px', height: '52px', background: 'var(--nex-grey-100)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
        <Download size={20} color="var(--nex-grey-400)" />
      </div>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{year}</h3>
      <span style={{ color: 'var(--nex-teal)', fontSize: '0.9rem', fontWeight: 600, display: 'block' }}>{status}</span>
      {note && <span style={{ color: 'var(--nex-grey-400)', fontSize: '0.8rem', marginTop: '0.3rem', display: 'block' }}>{note}</span>}
    </div>
  );
}

import Link from 'next/link';
import { PieChart, Download, AlertTriangle, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Transparency() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--nex-charcoal) 0%, #1a1a1a 100%)', minHeight: '40vh' }}>
        <div className="container text-center page-hero-content" style={{ paddingTop: '100px', paddingBottom: '3rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>ACCOUNTABILITY</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>Financial Transparency</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            We believe in complete transparency. See exactly how your contributions are transforming lives across West Bengal.
          </p>
        </div>
      </section>

      {/* Work in Progress Banner */}
      <div style={{ background: '#FFF3CD', color: '#856404', padding: '1rem', textAlign: 'center', borderBottom: '1px solid #FFEEBA', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 500 }}>
        <AlertTriangle size={18} />
        <span>Representative Data: This section is currently a work in progress. Official audited financials will be published soon.</span>
      </div>

      <section className="container section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Chart Details */}
          <div className="reveal">
            <div className="section-label">FUND ALLOCATION</div>
            <h2 className="section-title">Where the Money Goes</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--nex-grey-600)', marginBottom: '2rem' }}>
              We ensure that the maximum possible percentage of every rupee donated goes directly to our grassroots programs. We maintain strict control over administrative and fundraising costs.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <LegendItem color="var(--nex-teal)" percentage="75%" label="Program Services (Education, Health)" />
              <LegendItem color="var(--nex-red)" percentage="15%" label="Infrastructure & Operations" />
              <LegendItem color="var(--nex-charcoal)" percentage="10%" label="Administrative & Fundraising" />
            </div>
            
            <div style={{ marginTop: '2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(56, 178, 172, 0.1)', color: 'var(--nex-teal)', padding: '0.5rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem' }}>
              <ShieldCheck size={16} /> Fully Audited by Independent CPAs
            </div>
          </div>

          {/* Pure CSS Pie Chart */}
          <div className="reveal reveal-delay-1" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'conic-gradient(var(--nex-teal) 0% 75%, var(--nex-red) 75% 90%, var(--nex-charcoal) 90% 100%)',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Inner cutout for donut chart look */}
              <div style={{ width: '180px', height: '180px', background: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.05)' }}>
                <PieChart size={32} color="var(--nex-grey-400)" style={{ marginBottom: '0.5rem' }} />
                <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--nex-charcoal)' }}>FY 2024-25</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--nex-grey-500)' }}>(Projected)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section style={{ background: 'var(--nex-grey-50)', padding: '5rem 0', borderTop: '1px solid var(--nex-grey-100)' }}>
        <div className="container text-center reveal">
          <h2 className="section-title">Annual Reports</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--nex-grey-500)' }}>
            Download our comprehensive annual reports to read detailed accounts of our impact, program milestones, and full financial disclosures.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <ReportCard year="2024-2025" status="Coming Soon" />
            <ReportCard year="2023-2024" status="Download PDF" active />
            <ReportCard year="2022-2023" status="Download PDF" active />
          </div>
        </div>
      </section>
    </>
  );
}

function LegendItem({ color, percentage, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>
        {percentage}
      </div>
      <span style={{ fontWeight: 500, color: 'var(--nex-charcoal)', fontSize: '1.05rem' }}>{label}</span>
    </div>
  );
}

function ReportCard({ year, status, active }) {
  return (
    <div style={{ 
      background: 'white', 
      padding: '2rem', 
      borderRadius: 'var(--radius-lg)', 
      border: '1px solid var(--nex-grey-200)', 
      width: '240px',
      transition: 'all 0.3s ease',
      cursor: active ? 'pointer' : 'default',
      opacity: active ? 1 : 0.6,
      boxShadow: active ? '0 4px 15px rgba(0,0,0,0.03)' : 'none'
    }}
    className={active ? 'hover-lift' : ''}
    >
      <div style={{ width: '50px', height: '50px', background: active ? 'var(--nex-red-light)' : 'var(--nex-grey-100)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
        <Download size={20} color={active ? 'var(--nex-red)' : 'var(--nex-grey-400)'} />
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{year}</h3>
      <span style={{ color: active ? 'var(--nex-red)' : 'var(--nex-grey-500)', fontSize: '0.9rem', fontWeight: 600 }}>
        {status}
      </span>
    </div>
  );
}

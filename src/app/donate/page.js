'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Heart, Building, QrCode, ShieldCheck, CreditCard, BadgeCheck,
  FileText, Plus, RefreshCw, Lock, Share2, CheckCircle, TrendingUp
} from 'lucide-react';
import RazorpayButton from '../components/RazorpayButton';

/* ── GOAL CONFIG ── tweak these numbers anytime ── */
const GOAL_AMOUNT   = 500000;   // ₹5,00,000
const RAISED_AMOUNT = 187500;   // update periodically
const DONOR_COUNT   = 243;

const donationTiers = [
  { amount: '₹500',   impact: 'Provides stationery kits to 5 students' },
  { amount: '₹1,000', impact: 'Sponsors a student\'s month of coaching' },
  { amount: '₹5,000', impact: 'Funds a student\'s monthly living stipend' },
  { amount: '₹10,000',impact: 'Powers a rural health camp for 50+ patients' },
];

const monthlyTiers = [
  { amount: '₹99',  name: 'Supporter', impact: '₹1,188/yr · Stationery & notebooks for a student' },
  { amount: '₹249', name: 'Champion',  impact: '₹2,988/yr · Monthly exam coaching materials' },
  { amount: '₹499', name: 'Patron',    impact: '₹5,988/yr · Full monthly study support package' },
  { amount: '₹999', name: 'Guardian',  impact: '₹11,988/yr · A student\'s complete monthly welfare' },
];


const donateFAQs = [
  { q: 'Is my donation tax-deductible?', a: 'Yes! NexZen Foundation is certified under Section 80G (AAFTN1149JF20261). You\'ll receive an official receipt + Form 10BE for your tax filing.' },
  { q: 'How quickly will I receive a receipt?', a: 'A digital PDF receipt downloads instantly after payment. Email donation@nexzenfoundation.in with your PAN to receive Form 10BE within 7 days.' },
  { q: 'Can I sponsor a specific student or programme?', a: 'Yes! Email admin@nexzenfoundation.in with your intent and we will coordinate a dedicated sponsorship agreement.' },
  { q: 'Do you accept cheque or DD donations?', a: 'Yes. Cheques and DDs should be drawn in favour of "NexZen Foundation" and mailed to our office. Please inform admin@nexzenfoundation.in after sending.' },
];

function pctRaised() {
  return Math.min(Math.round((RAISED_AMOUNT / GOAL_AMOUNT) * 100), 100);
}

function fmtINR(n) {
  return '₹' + n.toLocaleString('en-IN');
}

export default function Donate() {
  const [mode, setMode]               = useState('once');       // 'once' | 'monthly'
  const [selectedAmount, setSelected] = useState(null);
  const [customAmount, setCustom]     = useState('');
  const [openFaq, setOpenFaq]         = useState(null);
  const [pct, setPct]                 = useState(0);

  useEffect(() => { setTimeout(() => setPct(pctRaised()), 400); }, []);

  const amounts = mode === 'once' ? ['₹500','₹1,000','₹5,000','₹10,000'] : ['₹100','₹250','₹500','₹1,000'];
  const tiers   = mode === 'once' ? donationTiers : monthlyTiers;

  const finalAmount = selectedAmount === 'custom'
    ? (customAmount && parseInt(customAmount,10) >= 1 ? `₹${customAmount}` : null)
    : selectedAmount;

  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero" style={{ backgroundImage:'url("/images/hero_donate.png")', minHeight:'45vh' }}>
        <div className="page-hero-overlay"/>
        <div className="container text-center page-hero-content" style={{ paddingTop:'80px', paddingBottom:'4rem' }}>
          <div className="section-label animate-fade-in" style={{ color:'rgba(255,255,255,0.6)', paddingLeft:0 }}>MAKE AN IMPACT</div>
          <h1 className="animate-fade-in" style={{ fontSize:'clamp(2.5rem,5vw,3.5rem)', color:'white', marginBottom:'1rem', animationDelay:'0.15s', opacity:0 }}>
            Support Our Mission
          </h1>
          <p className="animate-fade-in" style={{ fontSize:'1.2rem', color:'rgba(255,255,255,0.7)', maxWidth:'550px', margin:'0 auto 1.5rem', animationDelay:'0.3s', opacity:0 }}>
            Your contribution directly empowers a student, treats a patient, or builds a smart classroom.
          </p>
          <div className="animate-fade-in" style={{ display:'inline-flex', flexWrap:'wrap', gap:'0.6rem', justifyContent:'center', animationDelay:'0.45s', opacity:0 }}>
            {[
              { icon:<ShieldCheck size={12}/>, label:'80G · AAFTN1149JF20261' },
              { icon:<BadgeCheck size={12}/>,  label:'NGO Darpan · WB/2025/0892907' },
              { icon:<FileText size={12}/>,    label:'Reg. IV-1901-01209-2025' },
              { icon:<Lock size={12}/>,        label:'100% Secure Payment' },
            ].map(b => (
              <span key={b.label} style={{ background:'rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.9)', padding:'0.4rem 0.9rem', borderRadius:'50px', fontSize:'0.78rem', fontWeight:600, border:'1px solid rgba(255,255,255,0.2)', display:'flex', alignItems:'center', gap:'5px' }}>
                {b.icon}{b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAX COMPLIANCE BADGE STRIP ── */}
      <div style={{ background:'linear-gradient(90deg,#0f3460,#16213e)', padding:'1rem 0', overflowX:'hidden' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'0.75rem', textAlign:'center' }}>
          {[
            { icon:<ShieldCheck size={18}/>, title:'80G Certified', sub:'Tax exemption on all donations', color:'#34D399' },
            { icon:<BadgeCheck size={18}/>,  title:'NGO Darpan',    sub:'WB/2025/0892907', color:'#60A5FA' },
            { icon:<FileText size={18}/>,    title:'Trust Registered', sub:'IV-1901-01209-2025', color:'#FBBF24' },
            { icon:<Lock size={18}/>,        title:'Secure Payments', sub:'256-bit SSL encrypted', color:'#A78BFA' },
          ].map(b => (
            <div key={b.title} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.6rem' }}>
              <div style={{ color:b.color, flexShrink:0 }}>{b.icon}</div>
              <div style={{ textAlign:'left' }}>
                <div style={{ color:'white', fontWeight:700, fontSize:'0.82rem' }}>{b.title}</div>
                <div style={{ color:'rgba(255,255,255,0.55)', fontSize:'0.72rem' }}>{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DONATION GOAL WIDGET ── */}
      <section style={{ background:'var(--nex-grey-50)', padding:'2.5rem 0', borderBottom:'1px solid var(--nex-grey-200)' }}>
        <div className="container" style={{ maxWidth:'760px', margin:'0 auto' }}>
          <div className="card reveal" style={{ padding:'2rem', border:'2px solid var(--nex-red)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'0.75rem', marginBottom:'1rem' }}>
              <div>
                <div style={{ fontSize:'0.78rem', fontWeight:700, color:'var(--nex-red)', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'0.25rem' }}>
                  FY 2025–26 IMPACT FUND
                </div>
                <h3 style={{ margin:0, fontSize:'1.1rem' }}>Help us reach {fmtINR(GOAL_AMOUNT)}</h3>
              </div>
              <div style={{ textAlign:'right' }}>
                <div style={{ fontSize:'1.6rem', fontWeight:900, color:'var(--nex-red)', lineHeight:1 }}>{fmtINR(RAISED_AMOUNT)}</div>
                <div style={{ fontSize:'0.8rem', color:'var(--nex-grey-500)' }}>raised of {fmtINR(GOAL_AMOUNT)} goal</div>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ background:'var(--nex-grey-200)', borderRadius:'50px', height:'12px', overflow:'hidden', marginBottom:'0.75rem' }}>
              <div style={{ background:'linear-gradient(90deg,var(--nex-red),#FF6B6B)', height:'100%', width:`${pct}%`, borderRadius:'50px', transition:'width 1.2s cubic-bezier(0.4,0,0.2,1)' }}/>
            </div>

            <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.85rem', color:'var(--nex-grey-500)' }}>
              <span><strong style={{ color:'var(--nex-charcoal)' }}>{pct}%</strong> funded</span>
              <span><strong style={{ color:'var(--nex-charcoal)' }}>{DONOR_COUNT}</strong> donors · {fmtINR(GOAL_AMOUNT - RAISED_AMOUNT)} to go</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-padding">
        <div className="about-section-grid">

          {/* ── LEFT — Impact + Trust ── */}
          <div className="reveal">
            <div className="section-label">WHY DONATE</div>
            <h2 className="section-title">Your Donation's Real Impact</h2>
            <p style={{ fontSize:'1.05rem', marginBottom:'2rem' }}>
              We operate with minimal overhead — maximum funds reach the ground.
            </p>

            <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem', marginBottom:'2.5rem' }}>
              {(mode === 'once' ? donationTiers : monthlyTiers).map(tier => (
                <ImpactItem key={tier.amount} title={tier.amount} text={tier.impact} monthly={mode==='monthly'} />
              ))}
            </div>

            {/* SSL + Security trust card */}
            <div className="card" style={{ padding:'1.25rem', display:'flex', alignItems:'center', gap:'1rem', borderLeft:'4px solid #059669', marginBottom:'1rem' }}>
              <Lock size={28} color="#059669" style={{ flexShrink:0 }} />
              <div>
                <strong style={{ display:'block', color:'var(--nex-charcoal)', marginBottom:'2px' }}>Your Payment is 100% Secure</strong>
                <span style={{ fontSize:'0.875rem', color:'var(--nex-grey-500)' }}>256-bit SSL encryption · Processed by Razorpay · PCI-DSS compliant</span>
              </div>
            </div>

            <div className="card" style={{ padding:'1.25rem', display:'flex', alignItems:'center', gap:'1rem', borderLeft:'4px solid var(--nex-red)' }}>
              <ShieldCheck size={28} color="var(--nex-red)" style={{ flexShrink:0 }} />
              <div>
                <strong style={{ display:'block', color:'var(--nex-charcoal)', marginBottom:'2px' }}>Tax Deduction Under Sec. 80G</strong>
                <span style={{ fontSize:'0.875rem', color:'var(--nex-grey-500)' }}>Cert. No. AAFTN1149JF20261 · Form 10BE within 7 days</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Payment cards ── */}
          <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>

            {/* ONLINE PAYMENT CARD */}
            <div className="card reveal" style={{ padding:'2.5rem', border:'2px solid var(--nex-red)', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'4px', background:'linear-gradient(90deg,var(--nex-red),#FF6B6B)' }}/>

              {/* One-time / Monthly toggle */}
              <div style={{ display:'flex', background:'var(--nex-grey-100)', borderRadius:'50px', padding:'4px', marginBottom:'1.75rem' }}>
                {['once','monthly'].map(m => (
                  <button key={m} onClick={() => { setMode(m); setSelected(null); setCustom(''); }}
                    style={{ flex:1, padding:'0.55rem', borderRadius:'50px', border:'none', cursor:'pointer', fontWeight:700, fontSize:'0.88rem', transition:'all 0.25s',
                      background: mode===m ? 'var(--nex-red)' : 'transparent',
                      color: mode===m ? 'white' : 'var(--nex-grey-500)',
                    }}>
                    {m === 'once' ? '💳 One-Time' : '🔄 Monthly'}
                  </button>
                ))}
              </div>

              {mode === 'monthly' && (
                <div style={{ background:'#ECFDF5', border:'1px solid #34D399', borderRadius:'var(--radius-md)', padding:'0.75rem 1rem', marginBottom:'1.25rem', display:'flex', gap:'0.6rem', alignItems:'flex-start' }}>
                  <RefreshCw size={16} color="#059669" style={{ flexShrink:0, marginTop:'2px' }} />
                  <div>
                    <div style={{ fontSize:'0.875rem', color:'#065F46', fontWeight:700, marginBottom:'2px' }}>Genuine Auto-Debit via UPI AutoPay</div>
                    <div style={{ fontSize:'0.8rem', color:'#047857' }}>Razorpay will set up a UPI mandate. Your selected amount is auto-debited every month — no action needed. Cancel anytime from your UPI app.</div>
                  </div>
                </div>
              )}

              <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
                <div style={{ background:'var(--nex-red)', width:'48px', height:'48px', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <CreditCard size={24} color="white"/>
                </div>
                <div>
                  <h3 style={{ fontSize:'1.2rem', margin:0 }}>{mode==='once' ? 'Pay Online Instantly' : 'Set Up Monthly Giving'}</h3>
                  <span style={{ color:'var(--nex-grey-500)', fontSize:'0.875rem' }}>Credit/Debit · Net Banking · UPI · Wallets</span>
                </div>
              </div>

              {/* Amount selector */}
              <div style={{ marginBottom:'1.25rem' }}>
                <p style={{ fontSize:'0.875rem', fontWeight:600, color:'var(--nex-grey-700)', marginBottom:'0.75rem' }}>Select {mode === 'monthly' ? 'Plan' : 'Amount'}</p>
                <div className="donation-amounts">
                  {amounts.map(amt => {
                    const tier = tiers.find(t => t.amount === amt);
                    return (
                      <button key={amt} className={`donation-amount-btn ${selectedAmount===amt?'selected':''}`} onClick={() => setSelected(amt)}>
                        {mode === 'monthly' && tier?.name
                          ? <><span style={{ display:'block', fontSize:'0.7rem', opacity:0.8, marginBottom:'1px' }}>{tier.name}</span>{amt}</>
                          : amt}
                      </button>
                    );
                  })}
                  {mode === 'once' && (
                    <button className={`donation-amount-btn ${selectedAmount==='custom'?'selected':''}`} onClick={() => { setSelected('custom'); setCustom(''); }}>Custom</button>
                  )}
                </div>


                {selectedAmount === 'custom' && (
                  <div style={{ marginTop:'0.75rem', display:'flex', alignItems:'center', gap:'0.5rem', background:'var(--nex-grey-50)', border:'2px solid var(--nex-red)', borderRadius:'var(--radius-md)', padding:'0.5rem 1rem' }}>
                    <span style={{ fontWeight:700, color:'var(--nex-charcoal)', fontSize:'1.1rem' }}>₹</span>
                    <input type="number" min="1" placeholder="Enter amount" value={customAmount}
                      onChange={e => setCustom(e.target.value.replace(/[^0-9]/g,''))}
                      style={{ border:'none', background:'transparent', outline:'none', fontSize:'1rem', fontWeight:600, color:'var(--nex-charcoal)', width:'100%' }} autoFocus />
                  </div>
                )}

                {selectedAmount && tiers.find(t => t.amount === selectedAmount) && (
                  <p style={{ fontSize:'0.85rem', color:'#059669', fontWeight:500, marginTop:'0.5rem', display:'flex', alignItems:'center', gap:'0.4rem' }}>
                    <CheckCircle size={14}/> {tiers.find(t => t.amount===selectedAmount)?.impact}
                  </p>
                )}
              </div>

              <RazorpayButton amount={finalAmount} mode={mode} />
            </div>

            {/* BANK TRANSFER */}
            <div className="card reveal reveal-delay-1" style={{ padding:'2.5rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'2rem' }}>
                <div style={{ background:'var(--nex-red-light)', width:'48px', height:'48px', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Building size={24} color="var(--nex-red)"/>
                </div>
                <h3 style={{ fontSize:'1.2rem', margin:0 }}>Bank Transfer (NEFT / RTGS)</h3>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                <DetailRow label="Account Name" value="NexZen Foundation" />
                <DetailRow label="Account No."  value="8218788698" />
                <DetailRow label="Bank"         value="Indian Bank" />
                <DetailRow label="Branch"       value="Eroali" />
                <DetailRow label="IFSC"         value="IDIB000E509" />
              </div>
            </div>

            {/* UPI QR */}
            <div className="card reveal reveal-delay-2" style={{ padding:'2.5rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
                <div style={{ background:'var(--nex-red-light)', width:'48px', height:'48px', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <QrCode size={24} color="var(--nex-red)"/>
                </div>
                <div>
                  <h3 style={{ fontSize:'1.2rem', margin:0 }}>Scan & Pay via UPI</h3>
                  <span style={{ fontSize:'0.85rem', color:'var(--nex-grey-500)' }}>Works with GPay · PhonePe · Paytm · BHIM</span>
                </div>
              </div>

              <div style={{ display:'flex', gap:'1.5rem', alignItems:'center', flexWrap:'wrap' }}>
                {/* QR placeholder with styled frame */}
                <div style={{ position:'relative', flexShrink:0 }}>
                  <div style={{ width:'148px', height:'148px', border:'3px solid var(--nex-red)', borderRadius:'12px', padding:'8px', background:'white', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'4px' }}>
                    <img src="/images/qr_upi.png" alt="UPI QR Code — NexZen Foundation"
                      style={{ width:'100%', height:'100%', objectFit:'contain', borderRadius:'6px' }}
                      onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
                    />
                    <div style={{ display:'none', flexDirection:'column', alignItems:'center', gap:'4px', padding:'8px' }}>
                      <QrCode size={60} color="var(--nex-red)"/>
                      <span style={{ fontSize:'0.65rem', color:'var(--nex-grey-500)', textAlign:'center' }}>QR code coming soon</span>
                    </div>
                  </div>
                  <div style={{ position:'absolute', bottom:'-10px', left:'50%', transform:'translateX(-50%)', background:'var(--nex-red)', color:'white', fontSize:'0.65rem', fontWeight:700, padding:'2px 10px', borderRadius:'50px', whiteSpace:'nowrap' }}>SCAN TO PAY</div>
                </div>

                <div style={{ flex:1, minWidth:'160px' }}>
                  <p style={{ color:'var(--nex-grey-500)', marginBottom:'0.75rem', fontSize:'0.9rem' }}>Or pay directly using UPI ID:</p>
                  <div style={{ background:'var(--nex-grey-50)', padding:'0.75rem 1.25rem', borderRadius:'var(--radius-md)', border:'1px solid var(--nex-grey-200)', fontWeight:700, fontSize:'0.95rem', color:'var(--nex-charcoal)', fontFamily:'monospace', marginBottom:'0.5rem' }}>
                    nexzenfoundation@indianbk
                  </div>
                  <p style={{ fontSize:'0.78rem', color:'var(--nex-grey-400)', margin:0 }}>Any amount · Instant confirmation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATION FAQs ── */}
      <section style={{ background:'var(--nex-grey-50)', padding:'5rem 0', borderTop:'1px solid var(--nex-grey-200)' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom:'3rem' }}>
            <div className="section-label" style={{ paddingLeft:0 }}>COMMON QUESTIONS</div>
            <h2 className="section-title">Donation FAQs</h2>
          </div>
          <div style={{ maxWidth:'780px', margin:'0 auto' }}>
            <FAQAccordion faqs={donateFAQs}/>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── HELPERS ── */
function ImpactItem({ title, text, monthly }) {
  return (
    <div style={{ display:'flex', gap:'1rem', alignItems:'flex-start' }}>
      <div style={{ background: monthly ? '#ECFDF5' : 'var(--nex-red-light)', minWidth:'40px', height:'40px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
        {monthly ? <RefreshCw size={18} color="#059669"/> : <Heart size={18} color="var(--nex-red)"/>}
      </div>
      <div>
        <strong style={{ fontSize:'1.05rem', color:'var(--nex-charcoal)', display:'block' }}>{title}</strong>
        <span style={{ color:'var(--nex-grey-500)', fontSize:'0.95rem' }}>{text}</span>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', padding:'0.75rem 0', borderBottom:'1px solid var(--nex-grey-100)' }}>
      <span style={{ color:'var(--nex-grey-500)' }}>{label}</span>
      <strong style={{ color:'var(--nex-charcoal)' }}>{value}</strong>
    </div>
  );
}

export function FAQAccordion({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="faq-list">
      {faqs.map((faq,i) => (
        <div key={i} className={`faq-item ${openIdx===i?'open':''}`}>
          <button className="faq-question" onClick={() => setOpenIdx(openIdx===i?null:i)}>
            {faq.q}
            <div className="faq-icon"><Plus size={16}/></div>
          </button>
          <div className="faq-answer"><p>{faq.a}</p></div>
        </div>
      ))}
    </div>
  );
}

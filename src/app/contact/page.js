'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = 'Please enter your name.';
    if (!fields.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Please enter a valid email address.';
    if (!fields.message.trim() || fields.message.trim().length < 10) e.message = 'Please enter a message (at least 10 characters).';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    // Simulate sending (replace with formspree or mailto)
    await new Promise(r => setTimeout(r, 1800));
    setLoading(false);
    setSuccess(true);
  };

  const set = (k) => (e) => {
    setFields(f => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors(er => { const n = { ...er }; delete n[k]; return n; });
  };

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561434_121.jpg")', minHeight: '42vh' }}>
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.72) 100%)' }}></div>
        <div className="container text-center page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>GET IN TOUCH</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>Contact Us</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            Queries, partnerships, volunteering, or donations — we're here.
          </p>
        </div>
      </section>

      <section className="container section-padding">
        <div className="contact-layout-grid">
          {/* ── FORM ── */}
          <div className="card reveal" style={{ padding: 'clamp(2rem, 5vw, 3rem)' }}>
            {success ? (
              <div className="form-success-card">
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(13,148,136,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <CheckCircle size={36} color="var(--nex-teal)" />
                </div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--nex-charcoal)' }}>Message Received!</h2>
                <p style={{ color: 'var(--nex-grey-500)', maxWidth: '380px', margin: '0 auto 2rem auto', fontSize: '1.05rem' }}>
                  Thank you for reaching out. We typically reply within <strong>24–48 hours</strong>.
                </p>
                <button className="btn-primary" style={{ background: 'var(--nex-teal)' }} onClick={() => { setSuccess(false); setFields({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' }); }}>
                  Send Another Message <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.35rem' }}>Send a Message</h2>
                <p style={{ color: 'var(--nex-grey-500)', marginBottom: '2rem', fontSize: '0.95rem' }}>We typically respond within 24–48 hours.</p>

                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-row">
                    <FieldWrap label="Full Name *" error={errors.name} id="name">
                      <input className={`form-input ${errors.name ? 'error' : ''}`} type="text" id="name" placeholder="Your full name" value={fields.name} onChange={set('name')} />
                    </FieldWrap>
                    <FieldWrap label="Email *" error={errors.email} id="email">
                      <input className={`form-input ${errors.email ? 'error' : ''}`} type="email" id="email" placeholder="you@example.com" value={fields.email} onChange={set('email')} />
                    </FieldWrap>
                  </div>

                  <div className="form-row">
                    <FieldWrap label="Phone" error={errors.phone} id="phone">
                      <input className="form-input" type="tel" id="phone" placeholder="+91 90000 00000" value={fields.phone} onChange={set('phone')} />
                    </FieldWrap>
                    <FieldWrap label="Subject" error={errors.subject} id="subject">
                      <select className="form-input" id="subject" value={fields.subject} onChange={set('subject')}>
                        <option>General Inquiry</option>
                        <option>Partnership Proposal</option>
                        <option>Volunteering</option>
                        <option>Donation Query</option>
                        <option>Scholarship Information</option>
                        <option>Media / Press</option>
                      </select>
                    </FieldWrap>
                  </div>

                  <FieldWrap label="Message *" error={errors.message} id="message">
                    <textarea className={`form-input ${errors.message ? 'error' : ''}`} id="message" placeholder="Tell us how we can help…" rows={5} style={{ resize: 'vertical', minHeight: '130px' }} value={fields.message} onChange={set('message')} />
                  </FieldWrap>

                  <button type="submit" className={`btn-primary ${loading ? 'submit-btn-loading' : ''}`} style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }} disabled={loading}>
                    {loading ? 'Sending…' : <><Send size={18} /> Send Message</>}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* ── CONTACT INFO + MAP ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <ContactInfo icon={<MapPin size={22} />} title="Head Office" lines={['NexZen Foundation', 'Parbotipur, Eroali, Khargram', 'Murshidabad – 742147', 'West Bengal, India']} delay="1" />
            <ContactInfo icon={<Phone size={22} />} title="Phone" lines={['+91 70030 66680']} delay="2" />
            <ContactInfo icon={<Mail size={22} />} title="Email" lines={['info@nexzenfoundation.in']} delay="3" />

            {/* Real Google Maps */}
            <div className="reveal reveal-delay-4">
              <iframe
                className="map-embed"
                title="NexZen Foundation Location — Eroali, Khargram, Murshidabad"
                src="https://maps.google.com/maps?q=Eroali+Khargram+Murshidabad+West+Bengal&output=embed&z=13"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p style={{ fontSize: '0.78rem', color: 'var(--nex-grey-400)', marginTop: '0.5rem', textAlign: 'center' }}>
                📍 Parbotipur, Eroali, Khargram, Murshidabad 742147
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917003066680?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20NexZen%20Foundation."
              target="_blank" rel="noopener noreferrer"
              className="reveal reveal-delay-5 card"
              style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', borderLeft: '4px solid #25D366', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
            >
              <div style={{ width: '44px', height: '44px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--nex-charcoal)', fontSize: '1rem' }}>Chat on WhatsApp</div>
                <div style={{ color: 'var(--nex-grey-500)', fontSize: '0.85rem' }}>Quick replies · Mon–Sat, 9am–6pm</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function FieldWrap({ label, error, id, children }) {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      {children}
      {error && <div className="form-error-msg show">{error}</div>}
    </div>
  );
}

function ContactInfo({ icon, title, lines, delay }) {
  return (
    <div className={`card reveal reveal-delay-${delay}`} style={{ padding: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
      <div style={{ background: 'linear-gradient(135deg, var(--nex-red), var(--nex-red-dark))', minWidth: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{title}</h3>
        {lines.map((l, i) => <p key={i} style={{ color: 'var(--nex-grey-500)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{l}</p>)}
      </div>
    </div>
  );
}

import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561434_121.jpg")', minHeight: '45vh' }}>
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.7) 100%)' }}></div>
        <div className="container text-center page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>GET IN TOUCH</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>Contact Us</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            Reach out for queries, partnerships, or volunteering opportunities.
          </p>
        </div>
      </section>

      <section className="container section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem' }}>
          {/* Form */}
          <div className="card reveal" style={{ padding: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Send a Message</h2>
            <p style={{ color: 'var(--nex-grey-500)', marginBottom: '2rem' }}>We typically respond within 24–48 hours.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input className="form-input" type="text" id="name" placeholder="Your name" required />
                </div>
                <div>
                  <label className="form-label" htmlFor="email">Email</label>
                  <input className="form-input" type="email" id="email" placeholder="you@example.com" required />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label className="form-label" htmlFor="phone">Phone</label>
                  <input className="form-input" type="tel" id="phone" placeholder="+91 90000 00000" />
                </div>
                <div>
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <select className="form-input" id="subject" style={{ cursor: 'pointer' }}>
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Volunteering</option>
                    <option>Donation Info</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-input" id="message" placeholder="How can we help you?" required style={{ minHeight: '150px', resize: 'vertical' }}></textarea>
              </div>
              
              <button type="button" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <ContactInfo icon={<MapPin size={22} />} title="Head Office" lines={['NexZen Foundation', 'Parbotipur, Eroali, Khargram', 'Murshidabad - 742147', 'West Bengal, India']} delay="1" />
            <ContactInfo icon={<Phone size={22} />} title="Phone" lines={['+91 70030 66680']} delay="2" />
            <ContactInfo icon={<Mail size={22} />} title="Email" lines={['info@nexzenfoundation.in']} delay="3" />

            {/* Map Placeholder */}
            <div className="reveal reveal-delay-4" style={{ width: '100%', height: '220px', background: 'var(--nex-grey-50)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--nex-grey-200)', color: 'var(--nex-grey-400)', fontWeight: 500, fontSize: '0.95rem' }}>
              Google Maps Embed
            </div>
          </div>
        </div>
      </section>
    </>
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
        {lines.map((line, i) => (
          <p key={i} style={{ color: 'var(--nex-grey-500)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{line}</p>
        ))}
      </div>
    </div>
  );
}

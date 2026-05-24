'use client';
import './globals.css';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  GraduationCap, Building2, BookOpen, HeartPulse, HeartHandshake, School,
  Menu, X, ChevronUp, ShieldCheck, BadgeCheck, FileText, Moon, Sun, Heart, ArrowRight
} from 'lucide-react';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#D42B2B" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Primary SEO */}
        <title>NexZen Foundation | Empowering Communities in West Bengal</title>
        <meta name="description" content="NexZen Foundation is a registered NGO in West Bengal offering free career consultancy, scholarships, healthcare camps, and institutional development. Trust Reg: IV-1901-01209-2025 | 80G Certified." />
        <meta name="keywords" content="NexZen Foundation, NGO West Bengal, free career counselling West Bengal, educational NGO Kolkata, scholarship West Bengal, NEET guidance West Bengal, nursing college advisory, 80G donation India, charitable trust West Bengal" />
        <meta name="author" content="NexZen Foundation" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://www.nexzenfoundation.in" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="NexZen Foundation" />
        <meta property="og:title" content="NexZen Foundation | Empowering Communities in West Bengal" />
        <meta property="og:description" content="Free career consultancy, scholarships, healthcare camps, and institutional development for West Bengal. 80G certified charitable trust." />
        <meta property="og:url" content="https://www.nexzenfoundation.in" />
        <meta property="og:image" content="https://www.nexzenfoundation.in/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="NexZen Foundation — Empowering Communities in West Bengal" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NexZen Foundation | Empowering Communities in West Bengal" />
        <meta name="twitter:description" content="Free career consultancy, scholarships, healthcare camps. 80G certified NGO, West Bengal." />
        <meta name="twitter:image" content="https://www.nexzenfoundation.in/images/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD — NGO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "NexZen Foundation",
            "alternateName": "NexZen",
            "url": "https://www.nexzenfoundation.in",
            "logo": "https://www.nexzenfoundation.in/images/logo.png",
            "image": "https://www.nexzenfoundation.in/images/og-image.jpg",
            "description": "NexZen Foundation is a registered charitable trust in West Bengal offering free career consultancy, scholarships, healthcare camps, and institutional development.",
            "foundingDate": "2025",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "West Bengal",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "admin@nexzenfoundation.in",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.nexzenfoundation.in"
            ],
            "knowsAbout": [
              "Career Counselling", "Educational Consultancy", "Scholarship Guidance",
              "Healthcare", "NEET Guidance", "WBJEE Strategy", "Institutional Development"
            ],
            "nonprofitStatus": "Nonprofit501c3",
            "taxID": "AAFTN1149JF20261"
          })}}
        />

      </head>
      <body>
        <ScrollProgressBar />
        <Navbar />
        <main style={{ minHeight: '80vh', paddingTop: '80px' }}>{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
        <StickyDonateBar />

        <ScrollRevealScript />
      </body>
    </html>
  );
}

/* ─── SCROLL PROGRESS ─── */
function ScrollProgressBar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return <div className="scroll-progress-bar" style={{ width: `${width}%` }} />;
}

/* ─── ANNOUNCEMENT BANNER ─── */
function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="announcement-bar">
      🎓 <strong>Savitribai Phule Scholarship 2026</strong> — Applications opening soon!&nbsp;
      <Link href="/programmes/scholarships">Learn More →</Link>
      <button className="close-btn" onClick={() => setVisible(false)} aria-label="Close">✕</button>
    </div>
  );
}

/* ─── CUSTOM CURSOR ─── */
function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (dot.current) { dot.current.style.left = `${e.clientX}px`; dot.current.style.top = `${e.clientY}px`; }
      if (ring.current) { ring.current.style.left = `${e.clientX}px`; ring.current.style.top = `${e.clientY}px`; }
    };
    const hover = () => ring.current?.classList.add('hovered');
    const unhover = () => ring.current?.classList.remove('hovered');
    window.addEventListener('mousemove', move, { passive: true });
    document.querySelectorAll('a,button,[role="button"]').forEach(el => {
      el.addEventListener('mouseenter', hover);
      el.addEventListener('mouseleave', unhover);
    });
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}

/* ─── BACK TO TOP ─── */
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <button className={`back-to-top ${visible ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
      <ChevronUp size={22} />
    </button>
  );
}

/* ─── WHATSAPP BUTTON ─── */
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917003066680?text=Hi%2C%20I%20found%20NexZen%20Foundation%20online%20and%20would%20like%20to%20know%20more."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}

/* ─── STICKY DONATE BAR ─── */
function StickyDonateBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();
  const isDonate = pathname === '/donate';

  useEffect(() => {
    if (isDonate || dismissed) return;
    const fn = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [isDonate, dismissed]);

  if (isDonate || dismissed) return null;

  return (
    <div className={`sticky-donate-bar ${visible ? 'visible' : ''}`}>
      <p>❤️ <strong>Tax-deductible</strong> under Section 80G · Cert. No. AAFTN1149JF20261</p>
      <Link href="/donate" className="sticky-btn">
        Donate Now <Heart size={13} />
      </Link>
      <button className="sticky-close" onClick={() => setDismissed(true)} aria-label="Dismiss">✕</button>
    </div>
  );
}

/* ─── NAV CONSULTANCY ─── */
const consultancyLinks = [
  { href: '/consultancy/individual', icon: <GraduationCap size={18} />, title: 'For Individuals', desc: 'Students · Career · College Advisory' },
  { href: '/consultancy/institutional', icon: <Building2 size={18} />, title: 'For Institutions', desc: 'Schools · Digital · Compliance' },
];

/* ─── NAV PROGRAMMES ─── */
const programmes = [
  { href: '/programmes/scholarships', icon: <GraduationCap size={18} />, title: 'Scholarships', desc: 'Savitri Bai Phule & NTSE' },
  { href: '/programmes/ipec', icon: <Building2 size={18} />, title: 'IPEC', desc: 'Professional Colleges' },
  { href: '/programmes/healthcare', icon: <HeartPulse size={18} />, title: 'Healthcare', desc: 'Community Health Camps' },
  { href: '/programmes/social-services', icon: <HeartHandshake size={18} />, title: 'Social Services', desc: 'Welfare & Relief' },
  { href: '/programmes/school-upgradation', icon: <School size={18} />, title: 'Smart Bangla Classroom', desc: 'NEP 2020 · SDG 4 Aligned' },
];

/* ─── NAVBAR ─── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : '');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="nav-logo">
          <img src="/images/logo.png" alt="NexZen Foundation" />
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>

          {/* Consultancy — top-level dropdown */}
          <div className="nav-item-dropdown">
            <Link href="/consultancy" className={`nav-link ${pathname.startsWith('/consultancy') ? 'active' : ''}`}>Consultancy</Link>
            <div className="nav-dropdown-menu">
              {consultancyLinks.map(c => (
                <Link key={c.href} href={c.href} className="dropdown-item">
                  <div className="dropdown-item-icon">{c.icon}</div>
                  <div>
                    <div className="dropdown-item-title">{c.title}</div>
                    <div className="dropdown-item-desc">{c.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-item-dropdown">
            <Link href="/programmes" className={`nav-link ${pathname.startsWith('/programmes') ? 'active' : ''}`}>Programmes</Link>
            <div className="nav-dropdown-menu">
              {programmes.map(p => (
                <Link key={p.href} href={p.href} className="dropdown-item">
                  <div className="dropdown-item-icon">{p.icon}</div>
                  <div>
                    <div className="dropdown-item-title">{p.title}</div>
                    <div className="dropdown-item-desc">{p.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/leadership" className={`nav-link ${pathname === '/leadership' ? 'active' : ''}`}>Leadership</Link>
          <Link href="/gallery" className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
          <Link href="/transparency" className={`nav-link ${pathname === '/transparency' ? 'active' : ''}`}>Transparency</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="dark-toggle" onClick={toggleDark} aria-label="Toggle dark mode">
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="/donate" className="nav-donate">Donate ♥</Link>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', display: 'inline-block', marginBottom: '1.25rem' }}>
              <img src="/images/logo.png" alt="NexZen Foundation" style={{ height: '40px' }} />
            </div>
            <p className="footer-tagline">Empowering communities through education, healthcare, and holistic social development across West Bengal.</p>
            <p className="footer-tagline" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Est. 12th August 2025 · Murshidabad, West Bengal</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            {[['About Us', '/about'], ['Our Programmes', '/programmes'], ['Volunteer', '/volunteer'], ['FAQ', '/faq'], ['Leadership', '/leadership'], ['Transparency', '/transparency']].map(([l, h]) => (
              <Link key={h} href={h} className="footer-link">{l}</Link>
            ))}
          </div>
          <div>
            <h4>Programmes</h4>
            {[['Free Consultancy', '/consultancy'], ['For Individuals', '/consultancy/individual'], ['For Institutions', '/consultancy/institutional'], ['Scholarships', '/programmes/scholarships'], ['Healthcare', '/programmes/healthcare'], ['Smart Bangla Classroom', '/programmes/school-upgradation']].map(([l, h]) => (
              <Link key={h} href={h} className="footer-link">{l}</Link>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            <p className="footer-text">info@nexzenfoundation.in</p>
            <p className="footer-text">+91 70030 66680</p>
            <p className="footer-text">Parbotipur, Eroali, Khargram</p>
            <p className="footer-text">Murshidabad - 742147</p>
            <Link href="/donate" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', background: 'linear-gradient(135deg, var(--nex-red), var(--nex-red-dark))', color: 'white', padding: '0.6rem 1.25rem', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 600 }}>
              Donate Now ♥
            </Link>
          </div>
        </div>

        <div className="footer-trust-strip">
          <div className="footer-trust-item"><FileText size={14} /><span>Trust Reg. <strong>IV-1901-01209-2025</strong></span></div>
          <div className="footer-trust-item" style={{ color: 'rgba(255,255,255,0.12)' }}>|</div>
          <div className="footer-trust-item"><BadgeCheck size={14} /><span>Darpan ID: <strong>WB/2025/0892907</strong></span></div>
          <div className="footer-trust-item" style={{ color: 'rgba(255,255,255,0.12)' }}>|</div>
          <div className="footer-trust-item"><ShieldCheck size={14} /><span>80G Cert: <strong>AAFTN1149JF20261</strong></span></div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} NexZen Foundation. All Rights Reserved. | Donations eligible for tax deduction under Sec. 80G of the Income Tax Act, 1961.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── SCROLL REVEAL + COUNTERS ─── */
function ScrollRevealScript() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('revealed'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    // Counter animation
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.animated) return;
        el.dataset.animated = 'true';
        counterObserver.unobserve(el);

        const raw = el.getAttribute('data-count');
        const isRupee = raw.startsWith('₹');
        const suffix = raw.replace(/[0-9₹.,]/g, '');
        const numStr = raw.replace(/[^0-9.]/g, '');
        const target = parseFloat(numStr);
        const duration = 2000;
        const start = performance.now();

        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(ease * target);
          const display = isRupee ? `₹${current.toLocaleString('en-IN')}` : current.toLocaleString('en-IN');
          el.textContent = display + (progress >= 1 ? suffix : '');
          if (progress < 1) requestAnimationFrame(step);
          else el.classList.add('counting');
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
    }, 80);

    return () => { clearTimeout(timer); observer.disconnect(); counterObserver.disconnect(); };
  }, [pathname]);

  return null;
}

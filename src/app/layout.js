'use client';
import './globals.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Globe, MessageCircle, ExternalLink, Heart, ChevronRight, Menu, X } from 'lucide-react';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NexZen Foundation | Empowering Communities, Transforming Futures</title>
        <meta name="description" content="NexZen Foundation is a charitable trust dedicated to democratizing access to quality education, professional training, and essential social services in West Bengal." />
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: '80vh', paddingTop: '80px' }}>{children}</main>
        <Footer />
        <ScrollRevealScript />
      </body>
    </html>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img src="/images/logo.png" alt="NexZen Foundation Logo" />
        </Link>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/programmes" className={`nav-link ${pathname.startsWith('/programmes') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Programmes</Link>
          <Link href="/leadership" className={`nav-link ${pathname === '/leadership' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Leadership</Link>
          <Link href="/gallery" className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link href="/transparency" className={`nav-link ${pathname === '/transparency' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Transparency</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/donate" className="nav-donate" onClick={() => setMenuOpen(false)}>Support Us</Link>
        </div>
        
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', display: 'inline-block', marginBottom: '1.25rem' }}>
              <img src="/images/logo.png" alt="NexZen Foundation" style={{ height: '40px' }} />
            </div>
            <p className="footer-tagline">
              Empowering communities through education, healthcare, and holistic social development across West Bengal.
            </p>
          </div>
          
          <div>
            <h4>Quick Links</h4>
            <Link href="/about" className="footer-link">About Us</Link>
            <Link href="/programmes" className="footer-link">Our Programmes</Link>
            <Link href="/leadership" className="footer-link">Leadership</Link>
            <Link href="/gallery" className="footer-link">Gallery</Link>
            <Link href="/transparency" className="footer-link">Transparency</Link>
          </div>
          
          <div>
            <h4>Programmes</h4>
            <Link href="/programmes/scholarships" className="footer-link">Scholarships</Link>
            <Link href="/programmes/ipec" className="footer-link">IPEC</Link>
            <Link href="/programmes/consultancy" className="footer-link">Consultancy</Link>
            <Link href="/programmes/healthcare" className="footer-link">Healthcare</Link>
          </div>
          
          <div>
            <h4>Contact</h4>
            <p className="footer-text">info@nexzenfoundation.in</p>
            <p className="footer-text">+91 70030 66680</p>
            <p className="footer-text">Parbotipur, Eroali, Khargram</p>
            <p className="footer-text">Murshidabad - 742147</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} NexZen Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function ScrollRevealScript() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

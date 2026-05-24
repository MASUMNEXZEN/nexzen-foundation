'use client';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/images/6093388120406561429_121.jpg', caption: 'Community Outreach Programme' },
  { src: '/images/6093388120406561430_121.jpg', caption: 'Educational Support Session' },
  { src: '/images/6093388120406561431_121.jpg', caption: 'Healthcare Camp — Murshidabad' },
  { src: '/images/6093388120406561432_121.jpg', caption: 'Interactive Classroom Activity' },
  { src: '/images/6093388120406561433_121.jpg', caption: 'Scholarship Distribution Ceremony' },
  { src: '/images/6093388120406561434_121.jpg', caption: 'Team Strategy & Planning Session' },
  { src: '/images/hero_healthcare.png', caption: 'Mobile Health Unit' },
  { src: '/images/hero_scholarship.png', caption: 'Student Mentorship Programme' },
  { src: '/images/hero_school.png', caption: 'Smart Bangla Classroom — Demo' },
  { src: '/images/hero_social.png', caption: 'Social Services Outreach' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index or null

  const openLightbox = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevImg = useCallback(() => setLightbox(i => (i - 1 + images.length) % images.length), []);
  const nextImg = useCallback(() => setLightbox(i => (i + 1) % images.length), []);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prevImg();
      else if (e.key === 'ArrowRight') nextImg();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, [lightbox, prevImg, nextImg]);

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561432_121.jpg")', minHeight: '45vh' }}>
        <div className="page-hero-overlay"></div>
        <div className="container text-center page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>VISUAL STORY</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>
            Impact Gallery
          </h1>
          <p className="animate-fade-in" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            A visual journey through our work across West Bengal. Click any photo to explore.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container section-padding">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item reveal reveal-delay-${(i % 4) + 1}`}
              style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', position: 'relative', aspectRatio: '4/3', boxShadow: 'var(--shadow-md)', transition: 'transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out)' }}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && openLightbox(i)}
              aria-label={`View ${img.caption}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s var(--ease-out)' }}
              />
              {/* Hover overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.2) 50%, transparent 100%)',
                opacity: 0, transition: 'opacity 0.3s ease',
                display: 'flex', alignItems: 'flex-end', padding: '1.25rem',
              }} className="gallery-overlay">
                <div style={{ color: 'white', fontWeight: 500, fontSize: '0.9rem', lineHeight: 1.4 }}>{img.caption}</div>
              </div>
              {/* Zoom icon */}
              <div style={{
                position: 'absolute', top: '0.75rem', right: '0.75rem',
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '0.85rem', opacity: 0,
                transition: 'opacity 0.2s ease', pointerEvents: 'none',
              }} className="zoom-hint">🔍</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          {/* Counter */}
          <div className="lightbox-counter">{lightbox + 1} / {images.length}</div>

          {/* Close */}
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <X size={20} />
          </button>

          {/* Prev */}
          <button className="lightbox-nav prev" onClick={e => { e.stopPropagation(); prevImg(); }} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <img
            src={images[lightbox].src}
            alt={images[lightbox].caption}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
            key={lightbox}
          />

          {/* Next */}
          <button className="lightbox-nav next" onClick={e => { e.stopPropagation(); nextImg(); }} aria-label="Next">
            <ChevronRight size={24} />
          </button>

          {/* Caption */}
          <div className="lightbox-caption">{images[lightbox].caption}</div>
        </div>
      )}

      <style>{`
        .gallery-item:hover > div.gallery-overlay { opacity: 1 !important; }
        .gallery-item:hover .zoom-hint { opacity: 1 !important; }
        .gallery-item:hover img { transform: scale(1.05); }
        .gallery-item:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important; }
      `}</style>
    </>
  );
}

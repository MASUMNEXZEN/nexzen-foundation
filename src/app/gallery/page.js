export default function Gallery() {
  const images = [
    { src: '/images/6093388120406561429_121.jpg', caption: 'Community Outreach Programme' },
    { src: '/images/6093388120406561430_121.jpg', caption: 'Educational Support Session' },
    { src: '/images/6093388120406561431_121.jpg', caption: 'Healthcare Camp' },
    { src: '/images/6093388120406561432_121.jpg', caption: 'Classroom Interaction' },
    { src: '/images/6093388120406561433_121.jpg', caption: 'Scholarship Distribution' },
    { src: '/images/6093388120406561434_121.jpg', caption: 'Team Coordination Meeting' },
    { src: '/images/hero_healthcare.png', caption: 'Mobile Health Unit' },
    { src: '/images/hero_scholarship.png', caption: 'Student Mentorship' },
  ];

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url("/images/6093388120406561432_121.jpg")', minHeight: '45vh' }}>
        <div className="page-hero-overlay"></div>
        <div className="container text-center page-hero-content" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
          <div className="section-label animate-fade-in" style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: 0 }}>VISUAL STORY</div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', animationDelay: '0.15s', opacity: 0 }}>Impact Gallery</h1>
          <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '550px', margin: '0 auto', animationDelay: '0.3s', opacity: 0 }}>
            A visual journey of our work across West Bengal.
          </p>
        </div>
      </section>

      <section className="container section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {images.map((img, i) => (
            <div key={i} className={`gallery-item reveal reveal-delay-${(i % 4) + 1}`} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
              <img src={img.src} alt={img.caption} style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block', transition: 'transform 0.6s var(--ease-out)' }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem 1rem 1rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                color: 'white',
                fontWeight: 500,
                fontSize: '0.95rem',
                opacity: 0,
                transform: 'translateY(10px)',
                transition: 'all 0.3s var(--ease-out)',
              }} className="gallery-caption">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

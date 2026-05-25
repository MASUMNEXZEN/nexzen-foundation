import Link from 'next/link';
import { Newspaper, ExternalLink, Calendar, MapPin, ArrowRight, Quote } from 'lucide-react';

const pressItems = [
  {
    id: 1,
    outlet: 'পুবের কলম (Puber Kalom)',
    outletEn: 'Puber Kalom',
    date: 'December 2, 2025',
    dateISO: '2025-12-02',
    page: 'Page 5',
    language: 'Bengali',
    headline: 'নার্সিং-সহ চাকরি পরীক্ষায় দিশা দেখাচ্ছে নেক্সজেন ইনস্টিটিউট',
    headlineEn: 'NexZen Institute Guiding Students in Nursing and Competitive Exam Paths',
    excerpt: 'The article highlights how NexZen Foundation is guiding over 60 students from Bengal in GNMM, GNM examination and placement in government nursing colleges. The foundation, established at 11, Nabin Chandra Saha Road, Palpara, Baranagar, Kolkata, has been recognised for its work in making nursing and competitive exam pathways accessible to students across West Bengal.',
    excerptBengali: 'নার্সিং সহ প্রতিযোগিতামূলক পরীক্ষার পথ দেখাচ্ছে নেক্সজেন ইনস্টিটিউট। মাত্র ৬০ জন পড়ুয়াকে নিয়ে পথচলা শুরু এই প্রতিষ্ঠানের।',
    sourceUrl: 'https://epaper.puberkalom.com/clip/26140',
    sourceName: 'epaper.puberkalom.com',
    category: 'Education & Social Welfare',
    highlight: 'NexZen Foundation featured for making nursing and competitive exam guidance accessible to West Bengal students',
  },
];

export default function NewsPage() {
  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "NexZen Institute Guiding Students in Nursing and Competitive Exam Paths",
    "name": "নার্সিং-সহ চাকরি পরীক্ষায় দিশা দেখাচ্ছে 'নেক্সজেন ইনস্টিটিউট'",
    "datePublished": "2025-12-02",
    "dateModified": "2025-12-02",
    "publisher": {
      "@type": "Organization",
      "name": "Puber Kalom",
      "url": "https://epaper.puberkalom.com"
    },
    "about": {
      "@type": "Organization",
      "name": "NexZen Foundation",
      "url": "https://www.nexzenfoundation.in"
    },
    "url": "https://epaper.puberkalom.com/clip/26140",
    "description": "Puber Kalom features NexZen Foundation for guiding West Bengal students in nursing and competitive examination pathways.",
    "inLanguage": "bn-IN",
    "image": "https://www.nexzenfoundation.in/images/og-image.jpg",
    "articleSection": "Education",
    "keywords": ["NexZen Foundation", "nursing guidance West Bengal", "GNMM GNM", "career counselling West Bengal", "competitive exams West Bengal"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }} />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        padding: '7rem 0 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,43,43,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.5)', paddingLeft: 0, marginBottom: '1rem' }}>
            PRESS & MEDIA
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
            In the <span style={{ color: '#D42B2B' }}>News</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.7 }}>
            Press coverage and media mentions of NexZen Foundation's work across West Bengal.
          </p>
        </div>
      </section>

      {/* Coverage Count */}
      <div style={{ background: 'linear-gradient(135deg, #D42B2B, #a01e1e)', padding: '1.25rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
              <Newspaper size={20} />
              <span style={{ fontWeight: 600 }}>1 Published Article</span>
            </div>
            <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.3)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
              <MapPin size={20} />
              <span style={{ fontWeight: 600 }}>West Bengal Print Media</span>
            </div>
            <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.3)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
              <Calendar size={20} />
              <span style={{ fontWeight: 600 }}>December 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Articles */}
      <section className="container section-padding">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {pressItems.map((item) => (
            <article key={item.id} style={{
              background: 'white',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.06)',
              marginBottom: '2rem',
            }}>
              {/* Article Header */}
              <div style={{
                background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
                padding: '1.5rem 2rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ color: '#D42B2B', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>
                    {item.outlet}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={13} /> {item.date}
                    </span>
                    <span>{item.page}</span>
                    <span style={{
                      background: 'rgba(212,43,43,0.2)',
                      border: '1px solid rgba(212,43,43,0.3)',
                      color: '#ff6b6b',
                      padding: '0.1rem 0.6rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                    }}>{item.language}</span>
                  </div>
                </div>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    background: '#D42B2B', color: 'white', padding: '0.6rem 1.25rem',
                    borderRadius: '8px', textDecoration: 'none', fontWeight: 600,
                    fontSize: '0.875rem', whiteSpace: 'nowrap',
                    transition: 'transform 0.2s',
                  }}
                >
                  Read Article <ExternalLink size={15} />
                </a>
              </div>

              {/* Bengali Headline */}
              <div style={{ padding: '2rem 2rem 0' }}>
                <div style={{
                  fontFamily: 'serif',
                  fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                  fontWeight: 700,
                  color: '#1a1a2e',
                  lineHeight: 1.4,
                  marginBottom: '0.75rem',
                }}>
                  {item.headline}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#666',
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid #f0f0f0',
                }}>
                  {item.headlineEn}
                </div>

                {/* Bengali Excerpt */}
                <div style={{
                  background: 'linear-gradient(135deg, #fffbf0, #fff8e7)',
                  border: '1px solid #ffe5a0',
                  borderLeft: '4px solid #D42B2B',
                  borderRadius: '0 8px 8px 0',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '1.5rem',
                  position: 'relative',
                }}>
                  <Quote size={20} style={{ color: '#D42B2B', marginBottom: '0.5rem', opacity: 0.6 }} />
                  <p style={{ color: '#5a3e00', fontSize: '1rem', lineHeight: 1.8, margin: 0, fontFamily: 'serif' }}>
                    {item.excerptBengali}
                  </p>
                </div>

                {/* English Summary */}
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  {item.excerpt}
                </p>

                {/* Highlight Tag */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: '#fff0f0', border: '1px solid #ffd0d0',
                  color: '#D42B2B', padding: '0.5rem 1rem', borderRadius: '8px',
                  fontSize: '0.875rem', fontWeight: 500, marginBottom: '2rem',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D42B2B', display: 'inline-block' }} />
                  {item.highlight}
                </div>
              </div>

              {/* Footer */}
              <div style={{
                padding: '1rem 2rem',
                background: '#f8f9fa',
                borderTop: '1px solid #f0f0f0',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div style={{ fontSize: '0.8rem', color: '#999' }}>
                  Source: <span style={{ color: '#555' }}>{item.sourceName}</span>
                  <span style={{ margin: '0 0.5rem' }}>·</span>
                  {item.category}
                </div>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#D42B2B', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  View Original <ExternalLink size={13} />
                </a>
              </div>
            </article>
          ))}

          {/* Be in the News CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
            borderRadius: '1.25rem',
            padding: '2.5rem',
            textAlign: 'center',
          }}>
            <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Media Enquiries
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Journalists and content creators are welcome to reach out for interviews, quotes, and story collaborations about our work in West Bengal.
            </p>
            <a
              href="mailto:admin@nexzenfoundation.in?subject=Media%20Enquiry%20%E2%80%94%20NexZen%20Foundation"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#D42B2B', color: 'white',
                padding: '0.85rem 2rem', borderRadius: '10px',
                fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
              }}
            >
              Contact for Media <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


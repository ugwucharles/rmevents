import { FadeIn } from './FadeIn';
import "../gallery.css";
import { galleryImages } from '../data/content'

interface CaseStudy {
  title: string;
  location: string;
  client: string;
  description: string;
  images: (string | { image: string })[];
  guestSize?: string;
}

// Helper to get image URL from both seeded and CMS-generated formats
const getStudyImage = (study: CaseStudy): string => {
  if (!study.images || study.images.length === 0) {
    return 'https://images.unsplash.com/photo-1519167758481-83f29da8c2f3?auto=format&fit=crop&w=1200&q=80';
  }
  const first = study.images[0];
  if (typeof first === 'string') return first;
  return first?.image || '';
};

// Dynamically load case study JSONs from the CMS directory at build time
const caseStudyModules = import.meta.glob<{ default: CaseStudy }>('/src/content/case-studies/*.json', { eager: true });
const featuredCaseStudies: CaseStudy[] = Object.values(caseStudyModules).map(
  (mod) => mod.default || mod
);

export function Gallery() {
  return (
    <section id="gallery" className="rm-section rm-section--cream-dark">
      <div className="rm-container">
        <FadeIn className="rm-gallery__intro">
          <p className="rm-eyebrow">Portfolio</p>
          <h2 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem' }}>
            Moments composed with care
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgba(20,20,20,0.75)' }}>
            A selection of celebrations composed with care.
          </p>
        </FadeIn>

        <div className="rm-gallery__grid">
          {galleryImages.map((img, i) => (
            <FadeIn
              key={img.src}
              delay={0.04 * i}
              className={`rm-gallery__item${img.span === 'tall' ? ' rm-gallery__item--tall' : ''}${img.span === 'wide' ? ' rm-gallery__item--wide' : ''}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </FadeIn>
          ))}
        </div>

        {/* Featured Case Studies / Signature Endeavors */}
        <FadeIn delay={0.1} style={{ marginTop: '6rem' }}>
          <div className="rm-gallery__intro" style={{ marginBottom: '3rem' }}>
            <p className="rm-eyebrow">Signature Endeavors</p>
            <h3 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem' }}>
              Featured Client Celebrations
            </h3>
            <p style={{ marginTop: '1rem', color: 'rgba(20,20,20,0.75)' }}>
              Curated collection of exclusive experiences and destination logistics.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {featuredCaseStudies.map((study, i) => (
              <FadeIn key={study.title} delay={0.05 * i} className="rm-study-card" style={{
                background: 'var(--cream)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                border: '1px solid rgba(20,20,20,0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={getStudyImage(study)} alt={study.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="rm-study-img" />
                  <span style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'rgba(20, 20, 20, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--gold-light)',
                    fontSize: '0.65rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '99px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 600
                  }}>
                    {study.location}
                  </span>
                </div>
                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 className="rm-heading" style={{ fontSize: '1.4rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{study.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(20,20,20,0.7)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{study.description}</p>
                  </div>
                  <div style={{
                    borderTop: '1px solid rgba(20,20,20,0.08)',
                    paddingTop: '1rem',
                    fontSize: '0.8rem',
                    color: 'rgba(20,20,20,0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }}>
                    <div><strong>Client:</strong> {study.client}</div>
                    {'guestSize' in study && study.guestSize && (
                      <div><strong>Guest Count:</strong> {study.guestSize}</div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

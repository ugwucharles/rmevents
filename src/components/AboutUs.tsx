import { useState, useEffect } from 'react'
import { FadeIn } from './FadeIn'
import { aboutUs } from '../data/content'

export function AboutUs() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Close on Escape key
  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen])

  return (
    <section id="about-us" className="rm-section rm-section--dark">
      <div className="rm-container">
        <FadeIn className="rm-about-us__intro">
          <p className="rm-eyebrow rm-eyebrow--light">{aboutUs.label}</p>
          <h2 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem', color: 'var(--cream)' }}>
            {aboutUs.title}
          </h2>
        </FadeIn>

        <div className="rm-about-us__content">
          {aboutUs.paragraphs.map((p, i) => (
            <FadeIn key={i} delay={0.08 * i}>
              <p className="rm-about-us__paragraph">{p}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="rm-about-us__founder">
            <div className="rm-about-us__founder-accent" />
            <img loading="lazy"
              src="/media/avatar.avif"
              alt={aboutUs.founder.name}
              className="rm-about-us__founder-avatar"
              onClick={() => setLightboxOpen(true)}
              style={{
                objectFit: 'cover',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                boxShadow: '0 0 0 2px var(--gold)',
              }}
              title="View photo"
            />
            <div className="rm-about-us__founder-info">
              <h3 className="rm-about-us__founder-name">{aboutUs.founder.name}</h3>
              <p className="rm-about-us__founder-role">{aboutUs.founder.role}</p>
              <p className="rm-about-us__founder-bio">{aboutUs.founder.bio}</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(0, 0, 0, 0.88)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          <img
            src="/media/avatar.avif"
            alt={aboutUs.founder.name}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 'min(90vw, 480px)',
              maxHeight: '85vh',
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
              border: '1px solid rgba(196, 163, 90, 0.4)',
              animation: 'scaleIn 0.3s cubic-bezier(0.22,1,0.36,1)',
            }}
          />
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close photo"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              color: '#fff',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}

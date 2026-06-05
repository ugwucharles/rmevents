import { useState } from 'react'
import { FadeIn } from './FadeIn'
import { signatureEndeavours } from '../data/content'

export function SignatureEndeavours() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({})

  return (
    <section id="signature-endeavours" className="rm-section rm-section--dark">
      <div className="rm-container">

        {/* Header */}
        <FadeIn className="rm-gallery__intro" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="rm-eyebrow rm-eyebrow--light">{signatureEndeavours.label}</p>
          <h2 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem', color: 'var(--cream)' }}>
            {signatureEndeavours.title}
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgba(247,243,236,0.7)', maxWidth: '38rem', marginInline: 'auto' }}>
            {signatureEndeavours.lead}
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="rm-sig-grid">
          {signatureEndeavours.events.map((event, i) => {
            const hasError = imageErrors[i] || !event.image
            const isLoaded = imageLoaded[i]

            return (
              <FadeIn key={`${event.name}-${event.edition}`} delay={0.07 * i}>
                <article className="rm-sig-card">
                  {/* Image slot */}
                  <div className="rm-sig-card__image">
                    {!hasError && (
                      <img
                        src={event.image}
                        alt={`${event.name} – ${event.edition}`}
                        loading="lazy"
                        onLoad={() => setImageLoaded(prev => ({ ...prev, [i]: true }))}
                        onError={() => setImageErrors(prev => ({ ...prev, [i]: true }))}
                        style={{
                          opacity: isLoaded ? 1 : 0,
                          transition: 'opacity 0.3s ease',
                        }}
                      />
                    )}

                    {hasError && (
                      <div className="rm-sig-card__image-fallback" aria-hidden>
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span>Image coming soon</span>
                      </div>
                    )}
                    <div className="rm-sig-card__overlay" />
                  </div>

                  {/* Body */}
                  <div className="rm-sig-card__body">
                    <p className="rm-sig-card__edition">{event.edition}</p>
                    <h3 className="rm-sig-card__title">{event.name}</h3>

                    <div className="rm-sig-card__divider" />

                    <dl className="rm-sig-card__meta">
                      <div className="rm-sig-card__meta-row">
                        <dt>Venue</dt>
                        <dd>{event.venue}</dd>
                      </div>
                      <div className="rm-sig-card__meta-row">
                        <dt>Guest Size</dt>
                        <dd>{event.guestSize}</dd>
                      </div>
                      <div className="rm-sig-card__meta-row">
                        <dt>Client</dt>
                        <dd>{event.client}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>

      </div>
    </section>
  )
}

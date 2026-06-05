import { FadeIn } from './FadeIn'
import { testimonials } from '../data/content'

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="rm-section" style={{ borderTop: '1px solid rgba(20,20,20,0.05)' }}>
      <div className="rm-container">
        <FadeIn className="rm-gallery__intro" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <p className="rm-eyebrow rm-eyebrow--light">{testimonials.label}</p>
          <h2 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem' }}>
            {testimonials.title}
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgba(20,20,20,0.75)', maxWidth: '38rem', marginInline: 'auto' }}>
            {testimonials.lead}
          </p>
        </FadeIn>

        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {testimonials.items.map((item, i) => (
            <FadeIn key={item.author} delay={0.06 * i}>
              <div className="rm-review-card">
                <div>
                  <div className="rm-review-stars">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <StarIcon key={starIndex} />
                    ))}
                  </div>
                  <p className="rm-review-text">
                    "{item.text}"
                  </p>
                </div>
                <div>
                  <div style={{ width: '2rem', height: '1px', background: 'var(--gold)', margin: '1rem 0' }}></div>
                  <h4 className="rm-review-author">{item.author}</h4>
                  <span className="rm-review-role">{item.role}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

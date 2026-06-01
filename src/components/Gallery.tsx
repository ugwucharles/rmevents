import { FadeIn } from './FadeIn'
import { galleryImages } from '../data/content'

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
      </div>
    </section>
  )
}

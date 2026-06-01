import { FadeIn } from './FadeIn'
import { about } from '../data/content'

export function About() {
  return (
    <section id="about" className="rm-section">
      <div className="rm-container rm-about">
        <FadeIn>
          <div className="rm-about__text">
            <p className="rm-eyebrow">{about.label}</p>
            <h2 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem' }}>
              {about.title}
            </h2>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} style={{ marginTop: '1.5rem' }}>
                {p}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="rm-about__image-wrap">
            <div className="rm-about__frame" aria-hidden />
            <img src={about.image} alt={about.imageAlt} className="rm-about__image" loading="lazy" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

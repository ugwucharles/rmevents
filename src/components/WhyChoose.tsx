import { FadeIn } from './FadeIn'
import { whyChoose } from '../data/content'

export function WhyChoose() {
  return (
    <section id="why-rm" className="rm-section">
      <div className="rm-container">
        <FadeIn className="rm-gallery__intro">
          <p className="rm-eyebrow">{whyChoose.label}</p>
          <h2 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem' }}>
            {whyChoose.title}
          </h2>
          <p style={{ marginTop: '1.25rem', fontSize: '1.1rem', color: 'rgba(20,20,20,0.8)' }}>
            {whyChoose.intro}
          </p>
        </FadeIn>

        <div className="rm-pillars">
          {whyChoose.pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={0.07 * i}>
              <article className="rm-pillar">
                <div className="rm-pillar__num">0{i + 1}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

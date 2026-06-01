import { FadeIn } from './FadeIn'
import { serviceCategories, servicesIntro } from '../data/content'

export function Services() {
  return (
    <section id="services" className="rm-section rm-section--dark">
      <div className="rm-container">
        <FadeIn>
          <p className="rm-eyebrow rm-eyebrow--light">{servicesIntro.label}</p>
          <h2 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem', color: 'var(--cream)' }}>
            {servicesIntro.title}
          </h2>
          <p style={{ marginTop: '1.25rem', maxWidth: '40rem', fontSize: '1.1rem', fontWeight: 300, color: 'rgba(247,243,236,0.8)' }}>
            {servicesIntro.lead}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="rm-highlight">
            <h3>{servicesIntro.highlight.title}</h3>
            <p style={{ margin: 0, color: 'rgba(247,243,236,0.75)', lineHeight: 1.7 }}>
              {servicesIntro.highlight.body}
            </p>
          </div>
        </FadeIn>

        <div className="rm-grid-4">
          {serviceCategories.map((cat, i) => (
            <FadeIn key={cat.title} delay={0.05 * i}>
              <article className="rm-card">
                <h3>{cat.title}</h3>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <p
            style={{
              marginTop: '3rem',
              textAlign: 'center',
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: 'rgba(247,243,236,0.55)',
            }}
          >
            And many more. Tell us what you envision.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

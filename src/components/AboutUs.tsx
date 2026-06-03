import { FadeIn } from './FadeIn'
import { aboutUs } from '../data/content'

export function AboutUs() {
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
            <div className="rm-about-us__founder-avatar">RM</div>
            <div className="rm-about-us__founder-info">
              <h3 className="rm-about-us__founder-name">{aboutUs.founder.name}</h3>
              <p className="rm-about-us__founder-role">{aboutUs.founder.role}</p>
              <p className="rm-about-us__founder-bio">{aboutUs.founder.bio}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

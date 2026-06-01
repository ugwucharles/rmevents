import { SmoothLink } from './SmoothLink'
import { hero } from '../data/content'

export function Hero() {
  return (
    <section id="home" className="rm-hero">
      <div className="rm-hero__media">
        <img src={hero.image} alt={hero.imageAlt} fetchPriority="high" />
        <div className="rm-hero__overlay" />
      </div>

      <div className="rm-hero__content">
        <p className="rm-eyebrow rm-eyebrow--light">{hero.eyebrow}</p>
        <h1 className="rm-heading rm-heading-xl rm-hero__title">
          {hero.title}
          <br />
          <em>{hero.titleAccent}</em>
        </h1>
        <p className="rm-hero__subtitle">{hero.subtitle}</p>
        <div className="rm-hero__actions">
          <SmoothLink href="#contact" className="rm-btn rm-btn--gold">
            {hero.ctaPrimary}
          </SmoothLink>
          <SmoothLink href="#gallery" className="rm-btn rm-btn--outline">
            {hero.ctaSecondary}
          </SmoothLink>
        </div>
      </div>
    </section>
  )
}

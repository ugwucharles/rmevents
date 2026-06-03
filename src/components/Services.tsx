import { FadeIn } from './FadeIn'
import { serviceCategories, servicesIntro, luxuryEnhancements } from '../data/content'

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

        {/* Signature Enhancements */}
        <FadeIn delay={0.2} style={{ marginTop: '5rem' }}>
          <h3 className="rm-heading" style={{ color: 'var(--gold-light)', fontSize: '1.8rem', borderBottom: '1px solid rgba(196, 163, 90, 0.2)', paddingBottom: '1rem', marginBottom: '2.5rem' }}>
            Signature Offerings & Keepsakes
          </h3>
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {luxuryEnhancements.map((item) => {
              const isVideoKeepsake = 'videoUrl' in item && item.videoUrl;
              return (
                <div
                  key={item.title}
                  className={isVideoKeepsake ? 'rm-card rm-card--keepsake' : 'rm-card'}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'rgba(255, 255, 255, 0.01)',
                    height: 'auto'
                  }}
                >
                  <div className={isVideoKeepsake ? 'rm-card__text' : ''}>
                    <span className="rm-eyebrow" style={{ fontSize: '0.6rem', color: 'var(--gold)' }}>{item.tag}</span>
                    <h4 className="rm-heading" style={{ color: 'var(--cream)', fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{item.title}</h4>
                    <p style={{ color: 'rgba(247,243,236,0.7)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.description}</p>
                  </div>
                  {isVideoKeepsake && (
                    <div className="rm-services__video-container">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/-lPxg5bvLu0?autoplay=0&rel=0&modestbranding=1"
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ display: 'block', width: '100%', height: '100%', border: 'none' }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            style={{
              marginTop: '4rem',
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

import { SmoothLink } from './SmoothLink'
import { contact, LOGO_URL, navLinks } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="rm-footer">
      <div className="rm-container">
        <div className="rm-footer__top">
          <img src={LOGO_URL} alt="RM Events Experience" className="rm-footer__logo" />

          <nav className="rm-footer__nav" aria-label="Footer">
            {navLinks.map((link) => (
              <SmoothLink key={link.href} href={link.href}>
                {link.label}
              </SmoothLink>
            ))}
          </nav>

          <div style={{ fontSize: '0.9rem', color: 'rgba(247,243,236,0.7)' }}>
            <p style={{ margin: 0 }}>{contact.location.city}</p>
            <p style={{ margin: '0.15rem 0' }}>{contact.location.country}</p>
            <a href={`tel:${contact.phoneTel}`} style={{ display: 'block', marginTop: '0.5rem', color: 'var(--cream)' }}>
              Tel: {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} style={{ display: 'block', marginTop: '0.25rem', color: 'var(--cream)' }}>
              {contact.email}
            </a>
          </div>
        </div>

        <div className="rm-footer__bottom">
          <span>© {year} RM Events Experience</span>
          <div className="rm-footer__nav">
            {contact.social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

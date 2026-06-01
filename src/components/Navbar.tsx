import { useEffect, useRef, useState } from 'react'
import { useLakeComoMenu } from '../hooks/useLakeComoMenu'
import { useSmoothScroll } from '../context/SmoothScrollContext'
import { LOGO_URL, navLinks } from '../data/content'
import { SmoothLink } from './SmoothLink'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { activeHash } = useSmoothScroll()
  const menuRef = useRef<HTMLDivElement>(null)

  const closeMenu = () => setOpen(false)
  useLakeComoMenu(menuRef, open, closeMenu)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('rm-menu-open', open)
    return () => document.body.classList.remove('rm-menu-open')
  }, [open])

  return (
    <>
      <header
        className={`rm-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open menu-open' : ''}`}
      >
        <div className="rm-nav__inner">
          <SmoothLink href="#home" className="rm-nav__brand" onNavigate={closeMenu}>
            <img src={LOGO_URL} alt="RM Events Experience" className="rm-nav__logo" />
          </SmoothLink>

          <button
            type="button"
            id="menu-button"
            className={`rm-nav__menu-btn${open ? ' active' : ''}`}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span id="hamburger" className="rm-nav__hamburger" aria-hidden>
              <span className="line" />
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </span>
          </button>
        </div>
      </header>

      <div ref={menuRef} id="menu" aria-hidden={!open}>
        <div className="rm-menu__bubble" aria-hidden />
        <div className="rm-menu__container">
          <div className="rm-menu__wrapper">
            <div className="rm-menu__all">
              <div className="rm-menu__items menu-items">
                <ul>
                  {navLinks.map((link, index) => (
                    <li key={link.href}>
                      <SmoothLink
                        href={link.href}
                        className={`rm-menu__link${activeHash === link.href ? ' is-active' : ''}`}
                        scrollDelayMs={520}
                        onNavigate={closeMenu}
                      >
                        <span className="rm-menu__index">0{index + 1}</span>
                        <span className="rm-menu__label">{link.label}</span>
                      </SmoothLink>
                    </li>
                  ))}
                  <li>
                    <SmoothLink
                      href="#contact"
                      className="rm-menu__cta"
                      scrollDelayMs={520}
                      onNavigate={closeMenu}
                    >
                      Book a consultation
                    </SmoothLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

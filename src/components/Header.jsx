import { useEffect, useRef, useState } from 'react'
import { MenuIcon, MoonIcon, SunIcon } from './icons'
import { navigation, ui } from '../data/portfolio'
import { useSite } from '../theme'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const { lang, setLang, theme, toggleTheme, t } = useSite()

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 981px)')
    const closeOnDesktop = (event) => {
      if (event.matches) closeMenu()
    }
    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <div
      className="header-wrap"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isMenuOpen) {
          closeMenu()
          menuButtonRef.current?.focus()
        }
      }}
    >
      <header className="header">
        <a className="brand" href="#inicio" aria-label="RA. — Ir para o início" onClick={closeMenu}>
          RA<span>.</span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="header-tools">
          <div className="seg" role="group" aria-label="Idioma">
            <button type="button" aria-pressed={lang === 'pt'} onClick={() => setLang('pt')}>
              PT
            </button>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
              EN
            </button>
          </div>

          <button
            className="button button-icon"
            type="button"
            onClick={toggleTheme}
            aria-label={t(ui.theme)}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <a className="button button-primary header-cta" href="#contato">
            {t(ui.headerCta)}
          </a>

          <button
            className="button button-icon menu-toggle"
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={t(ui.menu)}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div className={`mobile-nav${isMenuOpen ? ' is-open' : ''}`} id="primary-navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {t(item.label)}
          </a>
        ))}
        <a href="#contato" onClick={closeMenu}>
          {t(ui.contactNav)}
        </a>
      </div>
    </div>
  )
}

export default Header

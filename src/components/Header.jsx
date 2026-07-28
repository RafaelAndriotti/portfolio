import { useEffect, useRef, useState } from 'react'
import { navigation } from '../data/portfolio'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1001px)')
    const closeOnDesktop = (event) => {
      if (event.matches) closeMenu()
    }

    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <header
      className="header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isMenuOpen) {
          closeMenu()
          menuButtonRef.current?.focus()
        }
      }}
    >
      <a
        className="brand"
        href="#inicio"
        aria-label="RA. — Ir para o início"
        onClick={closeMenu}
      >
        RA<span>.</span>
      </a>

      <button
        className="menu-toggle"
        ref={menuButtonRef}
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`nav${isMenuOpen ? ' nav-open' : ''}`}
        id="primary-navigation"
        aria-label="Navegação principal"
      >
        {navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="nav-contact" href="#contato" onClick={closeMenu}>
          Contato
        </a>
      </nav>

      <a className="header-cta" href="#contato" onClick={closeMenu}>
        Vamos conversar
      </a>
    </header>
  )
}

export default Header

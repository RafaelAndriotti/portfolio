import { ArrowIcon } from '../icons'
import { footer, hero } from '../../data/portfolio'
import { useSite } from '../../theme'
import foto from './assets/foto-perfil.jpeg'

function Hero() {
  const { t } = useSite()

  return (
    <section className="hero section" id="inicio">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-copy">
        <p className="eyebrow">
          <span /> {t(hero.eyebrow)}
        </p>
        <h1>
          {t(hero.titleStart)}
          <em>{t(hero.titleAccent)}</em>
        </h1>
        <p className="hero-description">{t(hero.description)}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            {t(hero.primaryCta)} <ArrowIcon />
          </a>
          <a className="btn-ghost" href="#sobre">
            {t(hero.secondaryCta)}
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-art">
          <img src={foto} alt="Rafael Andriotti" />
        </div>
        <p className="visual-note">Node · TypeScript · SQL</p>
      </div>
    </section>
  )
}

export default Hero

import ArrowIcon from '../ArrowIcon'
import heroImage from '../../assets/hero.png'

function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">
          <span /> Disponível para novos projetos
        </p>
        <h1>
          Eu construo o back-end que <em>sustenta o produto.</em>
        </h1>
        <p className="hero-description">
          Olá, sou <strong>Rafael</strong>, desenvolvedor back-end focado em
          APIs REST bem estruturadas, modelagem de dados consistente e código
          que continua legível meses depois.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver projetos <ArrowIcon />
          </a>
          <a className="text-link" href="#sobre">
            Mais sobre mim
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="portrait-art">
          <img src={heroImage} alt="" />
        </div>
        <div className="code-sticker">{'{ }'}</div>
        <p className="visual-note">Node · SQL · APIs REST</p>
      </div>
    </section>
  )
}

export default Hero

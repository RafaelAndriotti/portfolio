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
          Sou <strong>Rafael</strong>, desenvolvedor back-end. Trabalho com
          APIs REST em Node.js e TypeScript, modelagem de dados em PostgreSQL e
          MongoDB, e código que ainda faz sentido seis meses depois.
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
        <div className="portrait-art">
          <img src={heroImage} alt="" />
        </div>
        <p className="visual-note">Node · TypeScript · SQL</p>
      </div>
    </section>
  )
}

export default Hero

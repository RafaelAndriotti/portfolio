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
          Eu crio experiências digitais que <em>fazem sentido.</em>
        </h1>
        <p className="hero-description">
          Olá, sou <strong>Rafael</strong>, desenvolvedor front-end focado em
          transformar boas ideias em interfaces claras, responsivas e agradáveis
          de usar.
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
        <div className="code-sticker">{'</>'}</div>
        <p className="visual-note">Design + código + propósito</p>
      </div>
    </section>
  )
}

export default Hero

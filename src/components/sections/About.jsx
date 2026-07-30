import ArrowIcon from '../ArrowIcon'
import SectionLabel from '../SectionLabel'

function About() {
  return (
    <section className="about section" id="sobre">
      <SectionLabel number="01">Sobre mim</SectionLabel>

      <div className="about-content">
        <h2>
          Back-end é onde eu <em>escolhi trabalhar.</em>
        </h2>
        <div className="about-text">
          <p>
            Trabalho na camada que fica atrás da interface: rotas, regras de
            negócio e banco de dados. É onde as decisões custam caro se forem
            mal tomadas, e é a parte que eu gosto de resolver.
          </p>
          <p>
            Aprendi construindo. Meus projetos começam de um diretório vazio,
            não de um boilerplate, porque é assim que eu entendo o que
            acontece entre a requisição e a resposta.
          </p>
          <a className="text-link" href="#experiencia">
            Conheça minha trajetória <ArrowIcon />
          </a>
        </div>
      </div>

      <dl className="stats" aria-label="Destaques profissionais">
        <div>
          <dd>+15</dd>
          <dt>Repositórios públicos</dt>
        </div>
        <div>
          <dd>3</dd>
          <dt>APIs REST próprias</dt>
        </div>
        <div>
          <dd>4</dd>
          <dt>Linguagens em uso</dt>
        </div>
      </dl>
    </section>
  )
}

export default About

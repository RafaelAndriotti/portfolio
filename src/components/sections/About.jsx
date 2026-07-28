import ArrowIcon from '../ArrowIcon'
import SectionLabel from '../SectionLabel'

function About() {
  return (
    <section className="about section" id="sobre">
      <SectionLabel number="01">Sobre mim</SectionLabel>

      <div className="about-content">
        <h2>
          Tecnologia e criatividade trabalhando <em>juntas.</em>
        </h2>
        <div className="about-text">
          <p>
            Gosto de construir produtos digitais que sejam simples por fora e
            bem pensados por dentro. Meu trabalho combina desenvolvimento,
            atenção aos detalhes e foco nas pessoas que usarão cada projeto.
          </p>
          <p>
            Minha trajetória é construída por estudos e projetos práticos, com
            curiosidade para aprender e cuidado para evoluir a cada nova entrega.
          </p>
          <a className="text-link" href="#experiencia">
            Conheça minha trajetória <ArrowIcon />
          </a>
        </div>
      </div>

      <dl className="stats" aria-label="Destaques profissionais">
        <div>
          <dd>+10</dd>
          <dt>Projetos concluídos</dt>
        </div>
        <div>
          <dd>100%</dd>
          <dt>Foco em qualidade</dt>
        </div>
        <div>
          <dd>∞</dd>
          <dt>Vontade de aprender</dt>
        </div>
      </dl>
    </section>
  )
}

export default About

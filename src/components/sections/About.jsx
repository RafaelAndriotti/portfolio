import ArrowIcon from '../ArrowIcon'
import SectionLabel from '../SectionLabel'

function About() {
  return (
    <section className="about section" id="sobre">
      <SectionLabel number="01">Sobre mim</SectionLabel>

      <div className="about-content">
        <h2>
          A parte que ninguém vê é a que <em>sustenta tudo.</em>
        </h2>
        <div className="about-text">
          <p>
            Gosto de trabalhar na camada que fica por baixo da interface: APIs,
            regras de negócio e banco de dados. É ali que uma decisão bem
            tomada evita meses de retrabalho — e é ali que eu prefiro estar.
          </p>
          <p>
            Minha trajetória vem de estudo contínuo e projetos práticos,
            construídos do zero em vez de partir de um boilerplate pronto, para
            entender de fato o que acontece entre a requisição e a resposta.
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
          <dd>∞</dd>
          <dt>Vontade de aprender</dt>
        </div>
      </dl>
    </section>
  )
}

export default About

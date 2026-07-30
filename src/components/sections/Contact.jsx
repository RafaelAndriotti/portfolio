import ArrowIcon from '../ArrowIcon'
import GithubIcon from '../GithubIcon'
import { contact } from '../../data/portfolio'

function Contact() {
  return (
    <section className="contact section" id="contato">
      <p className="eyebrow">Tem um problema para resolver?</p>
      <h2>Vamos construir algo sólido juntos.</h2>
      <p>
        Estou aberto a oportunidades, projetos e boas conversas sobre APIs,
        dados e arquitetura. Me conte o que você está planejando.
      </p>
      <div className="contact-actions">
        {contact.email ? (
          <a className="button button-light" href={`mailto:${contact.email}`}>
            Enviar um e-mail <ArrowIcon />
          </a>
        ) : (
          <button className="button button-light" type="button" disabled>
            E-mail em atualização
          </button>
        )}
        {contact.github ? (
          <a
            className="button button-ghost"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon /> Ver GitHub
          </a>
        ) : null}
      </div>
      <span className="contact-shape shape-one" aria-hidden="true" />
      <span className="contact-shape shape-two" aria-hidden="true" />
    </section>
  )
}

export default Contact

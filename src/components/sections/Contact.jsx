import ArrowIcon from '../ArrowIcon'
import GithubIcon from '../GithubIcon'
import LinkedinIcon from '../LinkedinIcon'
import { contact } from '../../data/portfolio'

function Contact() {
  return (
    <section className="contact section" id="contato">
      <p className="eyebrow">Tem um problema para resolver?</p>
      <h2>Vamos conversar sobre o seu back-end.</h2>
      <p>
        Estou aberto a oportunidades e a boas conversas sobre APIs, banco de
        dados e arquitetura. Me conte o que você está construindo.
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

        <div className="contact-socials">
          {contact.github ? (
            <a href={contact.github} target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
          ) : null}
          {contact.linkedin ? (
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Contact

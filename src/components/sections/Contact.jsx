import ArrowIcon from '../ArrowIcon'
import { contact } from '../../data/portfolio'

function Contact() {
  return (
    <section className="contact section" id="contato">
      <p className="eyebrow">Tem uma ideia em mente?</p>
      <h2>Vamos criar algo incrível juntos.</h2>
      <p>
        Estou aberto a oportunidades, projetos e boas conversas. Entre em
        contato e me conte o que você está planejando.
      </p>
      {contact.email ? (
        <a className="button button-light" href={`mailto:${contact.email}`}>
          Enviar um e-mail <ArrowIcon />
        </a>
      ) : (
        <button className="button button-light" type="button" disabled>
          E-mail em atualização
        </button>
      )}
      <span className="contact-shape shape-one" aria-hidden="true" />
      <span className="contact-shape shape-two" aria-hidden="true" />
    </section>
  )
}

export default Contact

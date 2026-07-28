import { contact } from '../data/portfolio'

function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#inicio" aria-label="RA. — Voltar ao início">
        RA<span>.</span>
      </a>
      <p>Desenvolvido com React e muita curiosidade.</p>
      <div>
        {contact.github ? (
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : (
          <span className="footer-link-unavailable">GitHub</span>
        )}
        {contact.linkedin ? (
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        ) : (
          <span className="footer-link-unavailable">LinkedIn</span>
        )}
      </div>
    </footer>
  )
}

export default Footer

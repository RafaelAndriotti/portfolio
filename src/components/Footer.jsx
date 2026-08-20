import { contact, cursorName, footer } from '../data/portfolio'
import { useSite } from '../theme'

function Footer() {
  const { t, openNamePrompt } = useSite()

  return (
    <footer className="footer rule-top">
      <a className="brand" href="#inicio" aria-label="RA. — Voltar ao início">
        RA<span>.</span>
      </a>
      <p>{t(footer.note)}</p>
      <div>
        <button type="button" className="cursor-name-change" onClick={openNamePrompt}>
          {t(cursorName.change)}
        </button>
        <a href={contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer

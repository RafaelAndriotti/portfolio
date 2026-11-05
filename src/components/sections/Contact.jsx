import { ArrowIcon, GithubIcon, LinkedinIcon } from '../icons'
import SectionLabel from '../SectionLabel'
import { contact, ui } from '../../data/portfolio'
import { useSite } from '../../theme'

function Contact() {
  const { t } = useSite()

  return (
    <section className="contact section" id="contato">
      <SectionLabel>{ui.contactNav}</SectionLabel>
      <div className="contact-card">
        <div className="contact-inner">
          <h2>{t(contact.title)}</h2>
          <p>{t(contact.description)}</p>

          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${contact.email}`}>
              {t(contact.cta)} <ArrowIcon />
            </a>

            <div className="contact-socials">
              <a href={contact.github} target="_blank" rel="noreferrer">
                <GithubIcon /> GitHub
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

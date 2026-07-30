import { ArrowIcon, GithubIcon, LinkedinIcon } from '../icons'
import { contact } from '../../data/portfolio'
import { useSite } from '../../theme'

function Contact() {
  const { t } = useSite()

  return (
    <section className="contact section" id="contato">
      <div className="contact-card">
        <div className="contact-inner">
          <p className="eyebrow">
            <span />
            {t(contact.eyebrow)}
          </p>
          <h2>{t(contact.title)}</h2>
          <p>{t(contact.description)}</p>

          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${contact.email}`}>
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

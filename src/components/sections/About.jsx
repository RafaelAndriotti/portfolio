import { ArrowIcon } from '../icons'
import SectionLabel from '../SectionLabel'
import { about } from '../../data/portfolio'
import { useSite } from '../../theme'

function About() {
  const { t } = useSite()

  return (
    <section className="about section" id="sobre">
      <SectionLabel>{about.label}</SectionLabel>

      <div className="about-content">
        <h2 className="section-title">
          {t(about.title)}
        </h2>
        <div className="about-text">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.pt}>{t(paragraph)}</p>
          ))}
          <a className="btn-ghost" href="#experiencia">
            {t(about.link)} <ArrowIcon />
          </a>
        </div>
      </div>

      <p className="about-proof rule-top">{t(about.proof)}</p>
    </section>
  )
}

export default About

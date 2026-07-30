import { ArrowIcon } from '../icons'
import SectionLabel from '../SectionLabel'
import { about } from '../../data/portfolio'
import { useSite } from '../../theme'

function About() {
  const { t } = useSite()

  return (
    <section className="about section" id="sobre">
      <SectionLabel number="01">{about.label}</SectionLabel>

      <div className="about-content">
        <h2 className="section-title">
          {t(about.titleStart)}
          <em>{t(about.titleAccent)}</em>
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

      <dl className="stats rule-top">
        {about.stats.map((stat) => (
          <div key={stat.value}>
            <dd>{stat.value}</dd>
            <dt>{t(stat.label)}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default About

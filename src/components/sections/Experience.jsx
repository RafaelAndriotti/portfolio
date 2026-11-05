import SectionLabel from '../SectionLabel'
import { experienceSection, experiences } from '../../data/portfolio'
import { useSite } from '../../theme'

function Experience() {
  const { t } = useSite()

  return (
    <section className="experience" id="experiencia">
      <div className="experience-inner section">
        <SectionLabel>{experienceSection.label}</SectionLabel>
        <div className="experience-heading">
          <h2 className="section-title">
            {t(experienceSection.titleStart)}{t(experienceSection.titleAccent)}
          </h2>
          <p>{t(experienceSection.intro)}</p>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-item rule-top" key={experience.number}>
              <div className="experience-meta">
                <strong>{t(experience.category)}</strong>
                <span>{t(experience.period)}</span>
              </div>
              <div className="experience-content">
                <h3>{t(experience.title)}</h3>
                <p>{t(experience.description)}</p>
                <ul className="tag-list">
                  {experience.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

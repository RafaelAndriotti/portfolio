import SectionLabel from '../SectionLabel'
import { skillGroups, skills } from '../../data/portfolio'
import { useSite } from '../../theme'

function Skills() {
  const { t } = useSite()

  return (
    <section className="skills-section section" id="habilidades">
      <SectionLabel>{skills.label}</SectionLabel>
      <div className="skills-heading">
        <h2 className="section-title">
          {t(skills.titleStart)}{t(skills.titleAccent)}
        </h2>
        <p>{t(skills.intro)}</p>
      </div>

      <div className="skill-list">
        {skillGroups.map((group) => (
          <article className="skill-row" key={group.title.pt}>
            <h3>{t(group.title)}</h3>
            <p>{t(group.description)}</p>
            <div className="skill-evidence">
              <strong>{t(skills.evidenceLabel)}</strong>
              <p>{t(group.evidence)}</p>
            </div>
            <ul className="tag-list" aria-label={t(group.title)}>
              {group.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills

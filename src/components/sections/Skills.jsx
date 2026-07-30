import SectionLabel from '../SectionLabel'
import { skillGroups, skills } from '../../data/portfolio'
import { useSite } from '../../theme'

function Skills() {
  const { t } = useSite()

  return (
    <section className="skills-section section" id="habilidades">
      <div className="skills-heading">
        <div>
          <SectionLabel number="02">{skills.label}</SectionLabel>
          <h2 className="section-title">
            {t(skills.titleStart)}
            <em>{t(skills.titleAccent)}</em>
          </h2>
        </div>
        <p>{t(skills.intro)}</p>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card card" key={group.title.pt}>
            <span className="skill-number">0{index + 1}</span>
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

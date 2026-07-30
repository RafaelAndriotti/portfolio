import SectionLabel from '../SectionLabel'
import { skillGroups } from '../../data/portfolio'

function Skills() {
  return (
    <section className="skills-section section" id="habilidades">
      <div className="skills-heading">
        <div>
          <SectionLabel number="02">Habilidades</SectionLabel>
          <h2>
            O que eu uso, e <em>para quê.</em>
          </h2>
        </div>
        <p>
          Três frentes que aparecem em praticamente todo serviço que eu
          construo, com as ferramentas que uso em cada uma.
        </p>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <span className="skill-number">0{index + 1}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-evidence">
              <strong>Como aplico</strong>
              <p>{group.evidence}</p>
            </div>
            <ul aria-label={`Tecnologias de ${group.title}`}>
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

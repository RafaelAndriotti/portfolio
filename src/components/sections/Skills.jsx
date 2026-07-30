import SectionLabel from '../SectionLabel'
import { skillGroups } from '../../data/portfolio'

function Skills() {
  return (
    <section className="skills-section section" id="habilidades">
      <div className="skills-heading">
        <div>
          <SectionLabel number="02">Habilidades</SectionLabel>
          <h2>
            Ferramentas que ganham valor na <em>prática.</em>
          </h2>
        </div>
        <p>
          Mais do que uma lista de tecnologias, estas são as frentes que uso
          para construir serviços estáveis e fáceis de manter.
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

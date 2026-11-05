import SectionLabel from './SectionLabel'
import { techIcons } from '../data/techIcons'
import { techSection, techStack } from '../data/portfolio'
import { useSite } from '../theme'

import './TechCarousel.css'

// Tabela da stack: tudo visível de uma vez, sem hover. O logo herda a cor do
// texto (`currentColor`), então nenhuma cor de marca entra na paleta.
function TechCarousel() {
  const { t } = useSite()
  const columns = techStack[0].meta.map((row) => row.label)

  return (
    <section className="tech section" id="stack">
      <SectionLabel>{techSection.label}</SectionLabel>
      <h2 className="section-title">{t(techSection.title)}</h2>

      <div className="stack-table">
        <div className="stack-head" aria-hidden="true">
          <span>{t(techSection.toolColumn)}</span>
          {columns.map((label) => (
            <span key={label.pt}>{t(label)}</span>
          ))}
        </div>

        <ul className="stack-rows">
          {techStack.map((tech) => {
            const mark = techIcons[tech.icon]
            return (
              <li className="stack-row" key={tech.name}>
                <div className="stack-tool">
                  {mark ? (
                    <svg viewBox={mark.viewBox} aria-hidden="true">
                      <path d={mark.d} />
                    </svg>
                  ) : null}
                  <div>
                    <h3>{tech.name}</h3>
                    <p>{t(tech.category)}</p>
                  </div>
                </div>
                <dl>
                  {tech.meta.map((row) => (
                    <div key={row.label.pt}>
                      <dt>{t(row.label)}</dt>
                      <dd>{t(row.value)}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default TechCarousel

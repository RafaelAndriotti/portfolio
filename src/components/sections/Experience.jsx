import SectionLabel from '../SectionLabel'
import { experiences } from '../../data/portfolio'

function Experience() {
  return (
    <section className="experience" id="experiencia">
      <div className="experience-inner section">
        <div className="experience-heading">
          <SectionLabel number="03">Minha trajetória</SectionLabel>
          <h2>
            Experiência construída entre <em>estudo e prática.</em>
          </h2>
          <p>
            Não venho de anos de empresa. Venho de projetos que eu levantei do
            zero, quebrei e arrumei até funcionar direito.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-item" key={experience.number}>
              <span className="experience-number">{experience.number}</span>
              <div className="experience-meta">
                <strong>{experience.category}</strong>
                <span>{experience.period}</span>
              </div>
              <div className="experience-content">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <ul>
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

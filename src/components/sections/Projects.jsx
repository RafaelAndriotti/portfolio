import ArrowIcon from '../ArrowIcon'
import SectionLabel from '../SectionLabel'
import { projects } from '../../data/portfolio'

function Projects() {
  return (
    <section className="projects section" id="projetos">
      <div className="section-heading">
        <SectionLabel number="04">Projetos selecionados</SectionLabel>
        <h2>Alguns trabalhos que contam a minha história.</h2>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className={`project-cover ${project.color}`}>
              <span>{project.number}</span>
              <div className="browser-mockup">
                <div className="browser-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="mockup-content">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
            <div className="project-info">
              <div>
                <p>Projeto {project.number}</p>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver projeto: ${project.title}`}
                >
                  Ver projeto <ArrowIcon />
                </a>
              ) : (
                <span className="project-status">Detalhes em breve</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

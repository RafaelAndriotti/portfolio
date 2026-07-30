import ArrowIcon from '../ArrowIcon'
import GithubIcon from '../GithubIcon'
import SectionLabel from '../SectionLabel'
import { contact, featuredProjects, repositories } from '../../data/portfolio'

function EndpointMockup({ endpoint }) {
  return (
    <div className="endpoint-mockup" aria-hidden="true">
      <div className="endpoint-bar">
        <b data-method={endpoint.method}>{endpoint.method}</b>
        <span>{endpoint.path}</span>
      </div>
      <div className="endpoint-body">
        <p className="endpoint-status">
          <i /> {endpoint.status}
        </p>
        <div className="endpoint-payload">
          <span>{'{'}</span>
          {endpoint.lines.map((line) => (
            <span className="endpoint-line" key={line}>
              {line}
            </span>
          ))}
          <span>{'}'}</span>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section className="projects section" id="projetos">
      <div className="section-heading">
        <SectionLabel number="04">Projetos selecionados</SectionLabel>
        <h2>
          Serviços que eu construí <em>de ponta a ponta.</em>
        </h2>
      </div>

      <div className="project-list">
        {featuredProjects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className={`project-cover ${project.color}`}>
              <span>{project.number}</span>
              <EndpointMockup endpoint={project.endpoint} />
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
                  aria-label={`Ver ${project.title} no GitHub`}
                >
                  Ver no GitHub <ArrowIcon />
                </a>
              ) : (
                <span className="project-status">Detalhes em breve</span>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="repos">
        <div className="repos-heading">
          <h3>Outros repositórios</h3>
          {contact.github ? (
            <a
              className="text-link"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon /> Ver perfil completo
            </a>
          ) : null}
        </div>

        <ul className="repo-grid">
          {repositories.map((repo) => (
            <li className="repo-card" key={repo.name}>
              <h4>
                <a href={repo.url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
              <div className="repo-footer">
                <span className="repo-language" data-language={repo.language}>
                  <i aria-hidden="true" />
                  {repo.language}
                </span>
                <ul aria-label={`Tecnologias de ${repo.name}`}>
                  {repo.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects

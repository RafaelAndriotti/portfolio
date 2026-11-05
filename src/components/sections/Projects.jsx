import { useEffect, useRef, useState } from 'react'
import { ArrowUpRightIcon, CloseIcon, GithubIcon } from '../icons'
import SectionLabel from '../SectionLabel'
import {
  contact,
  featuredProjects,
  projectsSection,
  repositories,
  ui,
} from '../../data/portfolio'
import { useSite } from '../../theme'

function EndpointMockup({ endpoint }) {
  return (
    <div className="endpoint-mockup" aria-hidden="true">
      <div className="endpoint-bar">
        <b>{endpoint.method}</b>
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

function CaseStudyDialog({ project, onClose }) {
  const { t } = useSite()

  const closeRef = useRef(null)

  // Foco entra no modal ao abrir e volta para o botão que o abriu ao fechar;
  // a página por baixo não rola enquanto ele está aberto.
  useEffect(() => {
    const opener = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [onClose])

  return (
    <div className="dialog-backdrop" onClick={onClose} role="presentation">
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="dialog-head">
          <div style={{ flex: 1 }}>
            <p className="dialog-kicker">{t(projectsSection.caseStudy)}</p>
            <h3 className="dialog-title">{project.title}</h3>
          </div>
          <button
            className="button button-icon"
            type="button"
            onClick={onClose}
            ref={closeRef}
            aria-label={t(ui.close)}
          >
            <CloseIcon />
          </button>
        </div>

        <div>
          <h4>{t(projectsSection.problem)}</h4>
          <p className="dialog-body">{t(project.caseStudy.problem)}</p>
        </div>
        <div>
          <h4>{t(projectsSection.built)}</h4>
          <p className="dialog-body">{t(project.caseStudy.built)}</p>
        </div>
        <div>
          <h4>{t(projectsSection.learned)}</h4>
          <p className="dialog-body">{t(project.caseStudy.learned)}</p>
        </div>

        <div className="dialog-actions">
          <a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">
            {t(projectsSection.openCode)}
          </a>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [openProject, setOpenProject] = useState(null)
  const { t } = useSite()

  return (
    <section className="projects section" id="projetos">
      <SectionLabel>{projectsSection.label}</SectionLabel>
      <h2 className="section-title">
        {t(projectsSection.title)}
      </h2>
      <p className="projects-hint">{t(projectsSection.hint)}</p>

      <div className="project-list">
        {featuredProjects.map((project) => (
          <article className="project-row" key={project.number}>
            <div className="project-cover">
              <EndpointMockup endpoint={project.endpoint} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{t(project.description)}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-actions">
                <button
                  className="button button-primary"
                  type="button"
                  onClick={() => setOpenProject(project)}
                >
                  {t(projectsSection.caseStudy)}
                </button>
                <a className="btn-ghost" href={project.url} target="_blank" rel="noreferrer">
                  {t(projectsSection.viewCode)} <ArrowUpRightIcon />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="repos">
        <div className="repos-heading">
          <h3>{t(projectsSection.otherRepos)}</h3>
          <a className="btn-ghost" href={contact.github} target="_blank" rel="noreferrer">
            <GithubIcon /> {t(projectsSection.fullProfile)}
          </a>
        </div>

        <ul className="repo-list">
          {repositories.map((repo) => (
            <li className="repo-row" key={repo.name}>
              <h4>
                <a href={repo.url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </h4>
              <p>{t(repo.description)}</p>
              <div className="repo-footer">
                <span className="repo-language">
                  {repo.language}
                </span>
                <ul className="tag-list" aria-label={repo.name}>
                  {repo.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {openProject ? (
        <CaseStudyDialog project={openProject} onClose={() => setOpenProject(null)} />
      ) : null}
    </section>
  )
}

export default Projects

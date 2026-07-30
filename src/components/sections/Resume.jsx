import ArrowIcon from '../ArrowIcon'
import DownloadIcon from '../DownloadIcon'
import SectionLabel from '../SectionLabel'
import { resume } from '../../data/portfolio'

function ResumeActions() {
  if (!resume.available) {
    return (
      <>
        <div className="resume-actions">
          <button className="button button-primary" type="button" disabled>
            Visualizar currículo <ArrowIcon />
          </button>
          <button className="button button-outline" type="button" disabled>
            Baixar PDF <DownloadIcon />
          </button>
        </div>
        <p className="resume-status">Currículo em atualização.</p>
      </>
    )
  }

  return (
    <div className="resume-actions">
      <a
        className="button button-primary"
        href={resume.path}
        target="_blank"
        rel="noreferrer"
      >
        Visualizar currículo <ArrowIcon />
      </a>
      <a className="button button-outline" href={resume.path} download>
        Baixar PDF <DownloadIcon />
      </a>
    </div>
  )
}

function Resume() {
  return (
    <section className="resume section" id="curriculo">
      <SectionLabel number="05">Currículo</SectionLabel>

      <div className="resume-card">
        <div className="resume-copy">
          <p className="resume-kicker">Perfil profissional</p>
          <h2>Minha trajetória, reunida em uma página.</h2>
          <p>
            Uma visão direta das minhas habilidades, estudos e experiências com
            desenvolvimento back-end.
          </p>
          <ul className="resume-highlights">
            <li>Desenvolvimento back-end</li>
            <li>APIs REST e modelagem de dados</li>
            <li>Node.js, TypeScript e SQL</li>
          </ul>
          <ResumeActions />
        </div>

        <div className="resume-document" aria-hidden="true">
          <div className="document-topline">
            <span>Rafael</span>
            <b>CV</b>
          </div>
          <strong>Desenvolvedor back-end</strong>
          <div className="document-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="document-columns">
            <span />
            <span />
          </div>
          <p>Node · TypeScript · SQL</p>
        </div>
      </div>
    </section>
  )
}

export default Resume

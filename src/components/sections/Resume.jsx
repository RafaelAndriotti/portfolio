import { ArrowIcon, DownloadIcon } from '../icons'
import SectionLabel from '../SectionLabel'
import { resume } from '../../data/portfolio'
import { useSite } from '../../theme'

function Resume() {
  const { t } = useSite()

  return (
    <section className="resume section" id="curriculo">
      <SectionLabel number="06">{resume.label}</SectionLabel>

      <div className="resume-card card">
        <div className="resume-copy">
          <p className="resume-kicker">{t(resume.kicker)}</p>
          <h2>{t(resume.title)}</h2>
          <p>{t(resume.description)}</p>
          <ul className="resume-highlights">
            {resume.highlights.map((highlight) => (
              <li key={highlight.pt}>{t(highlight)}</li>
            ))}
          </ul>

          <div className="resume-actions">
            <a
              className="button button-primary"
              href={resume.path}
              target="_blank"
              rel="noreferrer"
            >
              {t(resume.view)} <ArrowIcon />
            </a>
            <a className="button button-outline" href={resume.path} download>
              {t(resume.download)} <DownloadIcon />
            </a>
            <span className="resume-status">{t(resume.note)}</span>
          </div>
        </div>

        <a className="resume-document" href={resume.path} target="_blank" rel="noreferrer">
          <div className="document-topline">
            <span>Guaíba, RS</span>
            <b>CV</b>
          </div>
          <div>
            <strong>Rafael Andriotti Rebelo</strong>
            <span>{t(resume.role)}</span>
          </div>
          <div className="document-rows">
            {resume.rows.map((row) => (
              <div className="document-row" key={row.label.pt}>
                <span>{t(row.label)}</span>
                <span>{t(row.value)}</span>
              </div>
            ))}
          </div>
        </a>
      </div>
    </section>
  )
}

export default Resume

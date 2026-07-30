import { useState } from 'react'
import { technologies, ui } from '../data/portfolio'
import { useSite } from '../theme'

function Row() {
  return (
    <span>
      {technologies.map((technology) => (
        <span key={technology} style={{ display: 'contents' }}>
          {technology}
          <b>+</b>
        </span>
      ))}
    </span>
  )
}

function SkillsStrip() {
  const [isPaused, setIsPaused] = useState(false)
  const { t } = useSite()

  return (
    <div
      className={`skills-strip${isPaused ? ' is-paused' : ''}`}
      aria-label="Tecnologias em destaque"
    >
      <div className="strip-track" aria-hidden="true">
        <Row />
        <Row />
      </div>
      <button
        className="ticker-control"
        type="button"
        aria-pressed={isPaused}
        onClick={() => setIsPaused((current) => !current)}
      >
        {isPaused ? t(ui.play) : t(ui.pause)}
      </button>
    </div>
  )
}

export default SkillsStrip

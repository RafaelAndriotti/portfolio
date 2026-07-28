import { useState } from 'react'
import { technologies } from '../data/portfolio'

function SkillsStrip() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className={`skills-strip${isPaused ? ' is-paused' : ''}`}
      aria-label="Tecnologias em destaque"
    >
      <button
        className="ticker-control"
        type="button"
        aria-pressed={isPaused}
        onClick={() => setIsPaused((current) => !current)}
      >
        {isPaused ? 'Reproduzir faixa' : 'Pausar faixa'}
      </button>
      <div aria-hidden="true">
        {[...technologies, ...technologies].map((technology, index) => (
          <span key={`${technology}-${index}`}>
            {technology} <b>+</b>
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillsStrip

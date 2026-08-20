import { useEffect, useMemo, useRef, useState } from 'react'

import './InteractiveGrid.css'

const DURATION = 200
const LEAVE_DELAY = 200

/**
 * Grade de cartões que reage ao ponteiro: o alvo cresce, os quatro vizinhos
 * ortogonais crescem menos, e o resto fica parado.
 *
 * Mudança em relação ao original: ele preenchia `columns * rows` células e
 * repetia as imagens em ciclo. Aqui a grade tem exatamente um cartão por item,
 * porque repetir logo de stack lê como enchimento. `columns` continua mandando
 * na largura, e o número de linhas cai por conta do `grid-auto-flow`.
 */
function InteractiveGrid({
  items,
  columns = 7,
  onHoverChange,
  className = '',
}) {
  const cols = Math.max(1, Math.round(columns))
  const count = items.length

  const [hovered, setHovered] = useState(null)
  const leaveTimer = useRef(null)

  useEffect(() => () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
  }, [])

  useEffect(() => {
    if (onHoverChange) onHoverChange(hovered)
  }, [hovered, onHoverChange])

  const neighbours = useMemo(() => {
    if (hovered === null) return []
    const out = []
    if (hovered % cols !== 0) out.push(hovered - 1)
    if (hovered % cols !== cols - 1) out.push(hovered + 1)
    out.push(hovered - cols)
    out.push(hovered + cols)
    return out.filter((n) => n >= 0 && n < count)
  }, [hovered, cols, count])

  const enter = (i) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current)
      leaveTimer.current = null
    }
    setHovered(i)
  }

  const leave = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    leaveTimer.current = setTimeout(() => setHovered(null), LEAVE_DELAY)
  }

  return (
    <div className={`igrid ${className}`.trim()}>
      <ul
        className="igrid-track"
        style={{ '--igrid-cols': cols, '--igrid-duration': `${DURATION}ms` }}
        onPointerLeave={leave}
      >
        {items.map((item, i) => {
          const big = hovered === i
          const small = !big && neighbours.includes(i)
          return (
            <li
              key={item.key}
              className={`igrid-card${big ? ' is-big' : ''}${small ? ' is-small' : ''}`}
              style={{ zIndex: big ? count + 1 : i + 1 }}
              onPointerEnter={() => enter(i)}
            >
              {/* Botão de verdade: o realce tem de chegar pelo teclado também,
                  senão a informação do painel fica só no mouse. */}
              <button
                type="button"
                aria-label={item.label}
                aria-pressed={big}
                onFocus={() => enter(i)}
                onBlur={leave}
              >
                <img src={item.src} alt="" draggable={false} />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default InteractiveGrid

import { useId } from 'react'

import './DotPattern.css'

/**
 * Malha de pontos em SVG. Um `<pattern>` de um círculo só, repetido por
 * `userSpaceOnUse`, então cresce com o container sem reflow.
 *
 * A cor sai do CSS (`fill`), não de prop, para seguir os tokens do tema. O
 * recorte também é CSS: quem usa aplica `mask-image` e decide onde a malha
 * aparece e onde ela some.
 */
function DotPattern({
  width = 24,
  height = 24,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className = '',
}) {
  // useId devolve ":r0:", que não é id válido em seletor de url().
  const id = `dot-pattern-${useId().replace(/:/g, '')}`

  return (
    <svg aria-hidden="true" className={`dot-pattern ${className}`.trim()}>
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  )
}

export default DotPattern

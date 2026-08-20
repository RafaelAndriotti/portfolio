import { useCallback, useMemo, useState } from 'react'

import InteractiveGrid from './InteractiveGrid'
import SectionLabel from './SectionLabel'
import { techIcons } from '../data/techIcons'
import { techSection, techStack } from '../data/portfolio'
import { useSite } from '../theme'

const hexToRgb = (hex) => {
  const h = hex.replace('#', '')
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16))
}

const toHex = (rgb) =>
  `#${rgb.map((c) => Math.round(c).toString(16).padStart(2, '0')).join('')}`

/**
 * O logo vai como <img>, então a cor tem de ser assada no SVG — não dá para
 * resolver com color-mix no CSS. Marcas quase pretas (Express, JWT, Prisma)
 * sumiriam no preto polido, então cada uma é puxada na direção do tema.
 */
const liftedColor = (brand, theme) => {
  const lift = theme === 'light' ? [0, 0, 0] : [255, 255, 255]
  const amount = theme === 'light' ? 0.62 : 0.55
  const rgb = hexToRgb(brand).map((c, i) => amount * c + (1 - amount) * lift[i])
  return toHex(rgb)
}

const toDataUri = (mark, fill) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${mark.viewBox}"><path fill="${fill}" d="${mark.d}"/></svg>`,
  )}`

function TechCarousel() {
  const { t, theme } = useSite()
  const [active, setActive] = useState(null)

  const items = useMemo(
    () =>
      techStack.map((tech) => {
        const mark = techIcons[tech.icon]
        return {
          key: tech.name,
          label: tech.name,
          src: mark ? toDataUri(mark, liftedColor(mark.hex, theme)) : '',
        }
      }),
    [theme],
  )

  const onHoverChange = useCallback((index) => setActive(index), [])

  const shown = techStack[active ?? 0]

  return (
    <section className="tech section" id="stack">
      <SectionLabel number="03">{techSection.label}</SectionLabel>
      <h2 className="section-title">{t(techSection.title)}</h2>
      <p className="section-hint">{t(techSection.hint)}</p>

      <InteractiveGrid items={items} columns={7} onHoverChange={onHoverChange} />

      <div className="tech-readout" aria-live="polite">
        <p className="tech-readout-name">
          {shown.name}
          <span>{t(shown.category)}</span>
        </p>
        <dl>
          {shown.meta.map((row) => (
            <div key={row.label.pt}>
              <dt>{t(row.label)}</dt>
              <dd>{t(row.value)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default TechCarousel

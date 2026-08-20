import { useLayoutEffect, useRef, useState } from 'react'

import './ArchGallery.css'

const ROTATE_STEP = 6
const Y_STEP = 18
const OVERLAP = 0.58
const HOVER_SCALE = 1.08
const HOVER_LIFT = 16

/**
 * Leque de cartas em arco. Cada item é `{ key, label, href, render }` —
 * o conteúdo da carta fica por conta de quem chama, então serve tanto para
 * foto quanto para um painel montado em JSX.
 */
function ArchGallery({
  items,
  cardWidth = 180,
  cardHeight = 240,
  cornerRadius = 18,
  label = 'Galeria',
  className = '',
}) {
  const total = items.length
  const mid = (total - 1) / 2

  const wrapRef = useRef(null)
  const [fit, setFit] = useState(1)
  const [hovered, setHovered] = useState(null)

  // O palco tem largura fixa em px, então numa tela estreita ele estouraria
  // a página. Mede o container e encolhe a carta até o leque caber.
  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el) return undefined

    const base = cardWidth + Math.abs(mid) * 2 * cardWidth * OVERLAP + cardWidth * 0.2
    const measure = () => {
      const available = el.clientWidth
      if (!available) return
      setFit(Math.min(1, available / base))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    // O ResizeObserver cobre mudança de layout sem resize de janela; o evento
    // cobre o caso de a entrega do observer estar suspensa (aba em segundo
    // plano, por exemplo). Os dois convergem para o mesmo `fit`.
    window.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [cardWidth, mid])

  const width = Math.round(cardWidth * fit)
  const height = Math.round(cardHeight * fit)
  const stageWidth = width + Math.abs(mid) * 2 * width * OVERLAP + width * 0.2
  const stageHeight = height + Math.abs(mid) * Y_STEP * fit + 48 * fit

  return (
    <div
      ref={wrapRef}
      className={`arch ${className}`.trim()}
      role="group"
      aria-label={label}
    >
      <div className="arch-stage" style={{ width: stageWidth, height: stageHeight }}>
        {items.map((item, index) => {
          const offset = index - mid
          const rotate = offset * ROTATE_STEP
          const translateY = Math.abs(offset) * Y_STEP * fit
          const translateX = offset * width * OVERLAP
          const baseZ = total - Math.abs(offset)
          const isHovered = hovered === index

          const style = {
            width,
            height,
            marginLeft: -width / 2,
            marginTop: -height / 2,
            borderRadius: cornerRadius * fit,
            transform: isHovered
              ? `translate(${translateX}px, ${translateY - HOVER_LIFT}px) rotate(0deg) scale(${HOVER_SCALE})`
              : `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(1)`,
            zIndex: isHovered ? total + 1 : baseZ,
          }

          // Carta com destino vira link de verdade, para chegar pelo teclado
          // e abrir no Enter. Sem destino, continua um cartão estático.
          const Tag = item.href ? 'a' : 'div'
          const linkProps = item.href
            ? { href: item.href, target: '_blank', rel: 'noreferrer' }
            : { tabIndex: 0 }

          return (
            <Tag
              key={item.key}
              className="arch-card"
              style={style}
              aria-label={item.label}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(index)}
              onBlur={() => setHovered(null)}
              {...linkProps}
            >
              {item.render()}
            </Tag>
          )
        })}
      </div>
    </div>
  )
}

export default ArchGallery

import { useEffect, useRef, useState } from 'react'
import { cursorName } from '../data/portfolio'
import { useSite } from '../theme'
import './CustomCursor.css'

/* Cursor próprio: uma seta que segue o ponteiro com mola rápida e uma pílula
   com o nome que vem atrás numa mola mais lenta — ela inclina conforme a
   velocidade horizontal e encolhe junto com a seta enquanto o botão está
   pressionado. Some em telas de toque, onde não existe ponteiro para seguir. */

const ARROW_SIZE = 31
const OFFSET = { x: 0, y: 0 }
const LABEL_OFFSET = { x: ARROW_SIZE * 0.9, y: ARROW_SIZE * 0.2 + 6 }
const PRESS_SCALE = 0.92
const TILT_STRENGTH = 25
const MAX_SPEED = 1500 // px/s: acima disso a inclinação já está no máximo

const ARROW_SPRING = { stiffness: 380, damping: 32, mass: 0.6 }
const LABEL_SPRING = { stiffness: 220, damping: 26, mass: 0.7 }
const SCALE_SPRING = { stiffness: 500, damping: 28, mass: 0.5 }
const TILT_SPRING = { stiffness: 200, damping: 24, mass: 0.6 }

function createSpring(config, initial = 0) {
  return { value: initial, velocity: 0, target: initial, ...config }
}

// Integração em passos fixos de 1/240s: com molas rígidas (k=500) o Euler
// explode se o quadro atrasar, então o quadro longo vira vários passos curtos.
const FIXED_STEP = 1 / 240

function stepSpring(spring, dt) {
  let remaining = dt
  while (remaining > 0) {
    const step = Math.min(FIXED_STEP, remaining)
    const accel =
      (-spring.stiffness * (spring.value - spring.target) - spring.damping * spring.velocity) /
      spring.mass
    spring.velocity += accel * step
    spring.value += spring.velocity * step
    remaining -= step
  }
}

function settleSpring(spring, value) {
  spring.value = value
  spring.target = value
  spring.velocity = 0
}

function isSpringAtRest(spring) {
  return Math.abs(spring.value - spring.target) < 0.01 && Math.abs(spring.velocity) < 0.01
}

export default function CustomCursor() {
  const { t, visitorName, previewName } = useSite()
  // O que o visitante está digitando ganha do que ele já salvou; sem nenhum dos
  // dois, o cursor se apresenta como visitante.
  const label = previewName.trim() || visitorName || t(cursorName.guest)

  // Só monta em ponteiro fino: touch não tem cursor para substituir.
  const [enabled, setEnabled] = useState(false)

  const arrowRef = useRef(null)
  const labelRef = useRef(null)
  const frameRef = useRef(0)
  const lastTimeRef = useRef(0)
  const lastSampleRef = useRef(null)
  const visibleRef = useRef(false)
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined
    const query = window.matchMedia('(pointer: fine)')
    const sync = () => setEnabled(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotionRef.current = motionQuery.matches
    const syncMotion = () => {
      reducedMotionRef.current = motionQuery.matches
    }
    motionQuery.addEventListener('change', syncMotion)

    const springs = {
      arrowX: createSpring(ARROW_SPRING),
      arrowY: createSpring(ARROW_SPRING),
      labelX: createSpring(LABEL_SPRING),
      labelY: createSpring(LABEL_SPRING),
      scale: createSpring(SCALE_SPRING, 1),
      tilt: createSpring(TILT_SPRING),
    }
    const springList = Object.values(springs)

    const draw = () => {
      const arrow = arrowRef.current
      const label = labelRef.current
      if (!arrow || !label) return
      const scale = springs.scale.value
      arrow.style.transform =
        'translate3d(' +
        springs.arrowX.value +
        'px, ' +
        springs.arrowY.value +
        'px, 0) scale(' +
        scale +
        ')'
      label.style.transform =
        'translate3d(' +
        (springs.labelX.value + LABEL_OFFSET.x) +
        'px, ' +
        (springs.labelY.value + LABEL_OFFSET.y) +
        'px, 0) rotate(' +
        springs.tilt.value +
        'deg) scale(' +
        scale +
        ')'
    }

    const tick = (time) => {
      const previous = lastTimeRef.current || time
      // Teto de 100ms: aba em segundo plano não devolve um salto gigante.
      const dt = Math.min(0.1, (time - previous) / 1000)
      lastTimeRef.current = time

      springList.forEach((spring) => {
        if (reducedMotionRef.current) settleSpring(spring, spring.target)
        else stepSpring(spring, dt)
      })
      draw()

      // Parado e escondido: encerra o loop até o próximo evento de ponteiro.
      if (!visibleRef.current && springList.every(isSpringAtRest)) {
        frameRef.current = 0
        lastTimeRef.current = 0
        return
      }
      frameRef.current = requestAnimationFrame(tick)
    }

    const startLoop = () => {
      if (frameRef.current) return
      lastTimeRef.current = 0
      frameRef.current = requestAnimationFrame(tick)
    }

    const show = () => {
      if (visibleRef.current) return
      visibleRef.current = true
      arrowRef.current?.classList.add('is-visible')
      labelRef.current?.classList.add('is-visible')
    }

    const hide = () => {
      visibleRef.current = false
      lastSampleRef.current = null
      springs.tilt.target = 0
      arrowRef.current?.classList.remove('is-visible')
      labelRef.current?.classList.remove('is-visible')
      startLoop()
    }

    const onMove = (event) => {
      const x = event.clientX + OFFSET.x
      const y = event.clientY + OFFSET.y
      const now = performance.now()
      const last = lastSampleRef.current

      if (last) {
        const dt = Math.max(1, now - last.t)
        const vx = ((x - last.x) / dt) * 1000
        const vy = ((y - last.y) / dt) * 1000
        const speed = Math.hypot(vx, vy)
        const sign = vx === 0 ? 0 : Math.sign(vx)
        springs.tilt.target = sign * Math.min(1, speed / MAX_SPEED) * TILT_STRENGTH
      } else {
        // Primeiro ponto: cola tudo na posição real, senão a seta vem voando da origem.
        settleSpring(springs.arrowX, x)
        settleSpring(springs.arrowY, y)
        settleSpring(springs.labelX, x)
        settleSpring(springs.labelY, y)
      }

      lastSampleRef.current = { x, y, t: now }
      springs.arrowX.target = x
      springs.arrowY.target = y
      springs.labelX.target = x
      springs.labelY.target = y

      show()
      startLoop()
    }

    const onDown = () => {
      springs.scale.target = PRESS_SCALE
      startLoop()
    }

    const onUp = () => {
      springs.scale.target = 1
      startLoop()
    }

    // Sair pela borda da janela esconde; volta a aparecer no primeiro movimento.
    const onDocumentLeave = (event) => {
      if (event.relatedTarget === null) hide()
    }

    const onBlur = () => {
      springs.scale.target = 1
      hide()
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseout', onDocumentLeave)
    window.addEventListener('blur', onBlur)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseout', onDocumentLeave)
      window.removeEventListener('blur', onBlur)
      motionQuery.removeEventListener('change', syncMotion)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
      lastSampleRef.current = null
      visibleRef.current = false
      root.classList.remove('has-custom-cursor')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div className="cursor-label" ref={labelRef}>
        <span className="cursor-label-text">{label}</span>
      </div>
      <div className="cursor-arrow" ref={arrowRef}>
        <svg width={ARROW_SIZE} height={ARROW_SIZE} viewBox="0 0 28 28" fill="none">
          <path d="M5 3 L23 14 L14 16 L11 24 Z" strokeWidth="0.6" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

import { useId } from 'react'

import DotPattern from './DotPattern'
import { spark } from '../data/portfolio'
import { useSite } from '../theme'

import './CreationSpark.css'

/**
 * Uma mão só, desenhada em espaço local: o punho na origem, os dedos indo para
 * +x. A outra mão é a mesma, espelhada por `scale(-1, 1)` — por isso nada de
 * texto entra aqui dentro, só forma simétrica.
 *
 * Tudo é traço, nada é preenchimento: cada parte é uma linha de ponta redonda,
 * grossa o bastante para virar volume. Sai mais barato que uma silhueta única e
 * deixa a curva de cada dedo ser ajustada sem refazer o contorno inteiro.
 */
const HAND = {
  forearm: 'M -380 -12 C -260 -18, -140 -10, -22 0',
  palm: 'M -22 2 C 16 -6, 48 -4, 74 8',
  thumb: 'M 6 -44 C 12 -84, 32 -110, 62 -124',
  index: 'M 92 -34 C 150 -50, 200 -56, 250 -58',
  middle: 'M 96 4 C 160 -6, 202 4, 214 32',
  ring: 'M 86 34 C 146 32, 178 44, 186 72',
  pinky: 'M 74 62 C 120 64, 148 78, 152 102',
}

const WIDTH = { forearm: 96, palm: 122, thumb: 34, index: 36, middle: 34, ring: 32, pinky: 28 }

const PARTS = Object.keys(HAND)

/**
 * O contorno é o mesmo caminho desenhado duas vezes: primeiro 7px mais grosso
 * na cor da borda, depois na cor do corpo. Assim os dedos se fundem na mão sem
 * costura interna — que é o que apareceria se cada peça tivesse `stroke`
 * próprio.
 */
function Hand({ transform, body, rim, children }) {
  return (
    <g transform={transform}>
      <g fill="none" stroke={`url(#${rim})`} strokeLinecap="round" strokeLinejoin="round">
        {PARTS.map((part) => (
          <path key={part} d={HAND[part]} strokeWidth={WIDTH[part] + 7} />
        ))}
      </g>
      <g fill="none" stroke={`url(#${body})`} strokeLinecap="round" strokeLinejoin="round">
        {PARTS.map((part) => (
          <path key={part} d={HAND[part]} strokeWidth={WIDTH[part]} />
        ))}
      </g>
      {children}
    </g>
  )
}

/** Estrela de raios no dorso da mão da máquina. Simétrica de propósito: ela
 *  atravessa o espelhamento sem virar do avesso. */
function Burst({ x, y, r = 26 }) {
  const rays = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4
    const inner = r * 0.28
    const outer = i % 2 === 0 ? r : r * 0.66
    return (
      <line
        key={i}
        x1={x + Math.cos(angle) * inner}
        y1={y + Math.sin(angle) * inner}
        x2={x + Math.cos(angle) * outer}
        y2={y + Math.sin(angle) * outer}
      />
    )
  })

  return (
    <g className="spark-burst">
      <circle cx={x} cy={y} r={r * 1.5} className="spark-burst-ring" />
      <g strokeLinecap="round">{rays}</g>
      <circle cx={x} cy={y} r={3.4} className="spark-burst-core" />
    </g>
  )
}

/**
 * A Criação de Adão em duas mãos: a de carne entra pela esquerda, a da máquina
 * pela direita, e o vão entre os indicadores é o único ponto quente do site —
 * o resto continua preto piano. A brasa fica numa camada com `screen` por cima
 * das mãos, então ela acende as pontas dos dedos sem precisar pintar cada
 * traço de novo.
 */
function CreationSpark() {
  const { t } = useSite()
  const uid = useId().replace(/:/g, '')
  const body = `spark-body-${uid}`
  const rim = `spark-rim-${uid}`
  const halo = `spark-halo-${uid}`
  const core = `spark-core-${uid}`

  return (
    <figure className="creation-spark">
      <DotPattern className="on-ink" cx={1} cy={1} cr={1} />

      <div className="spark-head">
        <p className="spark-kicker">{t(spark.kicker)}</p>
        <p className="spark-caption">{t(spark.caption)}</p>
      </div>

      <svg
        className="spark-canvas"
        viewBox="0 76 1200 354"
        role="img"
        aria-label={t(spark.alt)}
      >
        <defs>
          <linearGradient id={body} gradientUnits="userSpaceOnUse" x1="0" y1="-150" x2="0" y2="150">
            <stop offset="0" stopColor="#1e1e24" />
            <stop offset="1" stopColor="#060608" />
          </linearGradient>
          <linearGradient id={rim} gradientUnits="userSpaceOnUse" x1="0" y1="-150" x2="0" y2="150">
            <stop offset="0" stopColor="rgba(255,255,255,0.44)" />
            <stop offset="0.55" stopColor="rgba(255,255,255,0.13)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
          <radialGradient id={halo} gradientUnits="userSpaceOnUse" cx="585" cy="169" r="270">
            <stop className="stop-core" offset="0" stopOpacity="0.95" />
            <stop className="stop-warm" offset="0.22" stopOpacity="0.55" />
            <stop className="stop-hot" offset="0.55" stopOpacity="0.22" />
            <stop className="stop-hot" offset="1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={core} gradientUnits="userSpaceOnUse" cx="585" cy="169" r="46">
            <stop offset="0" stopColor="#ffffff" />
            <stop className="stop-core" offset="0.3" stopOpacity="0.85" />
            <stop className="stop-hot" offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* mão humana */}
        <Hand transform="translate(300, 268) rotate(-7)" body={body} rim={rim}>
          <g className="spark-crease">
            <path d="M 44 -40 C 54 -30, 56 -18, 50 -8" />
            <path d="M 74 -34 C 84 -24, 86 -12, 80 -2" />
            <path d="M 168 -50 C 174 -44, 174 -36, 168 -30" />
          </g>
        </Hand>

        {/* mão da máquina: mesma forma, espelhada, com circuito e estrela */}
        <Hand transform="translate(870, 250) scale(-1, 1) rotate(-8)" body={body} rim={rim}>
          <g className="spark-circuit">
            <path d="M -330 -26 H -244 l 14 14 H -150" />
            <path d="M -318 22 H -206 l 16 -16 H -120" />
            <path d="M 120 -40 H 168" />
            <path d="M 128 14 H 176" />
            <circle cx="-330" cy="-26" r="4" />
            <circle cx="-318" cy="22" r="4" />
            <circle cx="-150" cy="-12" r="4" />
          </g>
          <Burst x={18} y={-6} />
        </Hand>

        {/* a brasa por cima: acende as pontas sem repintar os traços */}
        <g className="spark-glow">
          <circle cx="585" cy="169" r="270" fill={`url(#${halo})`} />
        </g>

        <g className="spark-arc">
          <path d="M 541 180 C 570 166, 600 156, 630 158" />
          <path d="M 541 180 C 574 190, 604 174, 630 158" />
        </g>

        <circle className="spark-core" cx="585" cy="169" r="46" fill={`url(#${core})`} />
        <circle className="spark-point" cx="585" cy="169" r="4.5" />

        <text className="spark-tag" x="96" y="404">
          {t(spark.human)}
        </text>
        <text className="spark-tag" x="1104" y="404" textAnchor="end">
          {t(spark.machine)}
        </text>
      </svg>
    </figure>
  )
}

export default CreationSpark

import { useSite } from '../theme'

// Cabeçalho corrido da seção: uma linha cheia e o nome em mono. Sem número —
// a ordem das seções não carrega informação para quem lê.
function SectionLabel({ children }) {
  const { t } = useSite()
  return <p className="section-label">{t(children)}</p>
}

export default SectionLabel

import { useSite } from '../theme'

function SectionLabel({ number, children }) {
  const { t } = useSite()
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      <p>{t(children)}</p>
    </div>
  )
}

export default SectionLabel

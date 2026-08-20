import { useEffect, useRef, useState } from 'react'
import { cursorName as copy } from '../data/portfolio'
import { useSite } from '../theme'
import './CursorNamePrompt.css'

/* O navegador não sabe quem entrou no site — então perguntamos, uma vez só.
   O nome vai para o localStorage e volta a aparecer no cursor nas próximas
   visitas; quem fecha sem responder continua como "Visitante". */

const ASK_DELAY = 2200

export default function CursorNamePrompt() {
  const {
    t,
    visitorName,
    setPreviewName,
    saveVisitorName,
    hasBeenAsked,
    namePromptOpen,
    openNamePrompt,
    dismissNamePrompt,
  } = useSite()

  const [draft, setDraft] = useState('')
  const inputRef = useRef(null)

  // Primeira visita em ponteiro fino: pergunta depois de um respiro, para não
  // atropelar o hero no primeiro segundo.
  useEffect(() => {
    if (visitorName || hasBeenAsked()) return undefined
    if (!window.matchMedia('(pointer: fine)').matches) return undefined

    const timer = setTimeout(openNamePrompt, ASK_DELAY)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!namePromptOpen) return undefined
    setDraft(visitorName)
    setPreviewName(visitorName)
    inputRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') dismissNamePrompt()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [namePromptOpen])

  if (!namePromptOpen) return null

  const onSubmit = (event) => {
    event.preventDefault()
    // Confirmar com o campo vazio apaga o nome: é como o visitante volta a ser
    // anônimo. Fechar pelo "Agora não" ou pelo Esc mantém o que já estava lá.
    saveVisitorName(draft)
    dismissNamePrompt()
  }

  return (
    <div className="cursor-name-prompt" role="dialog" aria-label={t(copy.question)}>
      <form onSubmit={onSubmit}>
        <p className="cursor-name-question">{t(copy.question)}</p>
        <p className="cursor-name-hint">{t(copy.hint)}</p>
        <input
          ref={inputRef}
          type="text"
          value={draft}
          maxLength={18}
          autoComplete="given-name"
          placeholder={t(copy.placeholder)}
          aria-label={t(copy.placeholder)}
          onChange={(event) => {
            setDraft(event.target.value)
            setPreviewName(event.target.value)
          }}
        />
        <div className="cursor-name-actions">
          <button type="button" className="cursor-name-skip" onClick={dismissNamePrompt}>
            {t(copy.dismiss)}
          </button>
          <button type="submit" className="cursor-name-confirm">
            {t(copy.confirm)}
          </button>
        </div>
      </form>
    </div>
  )
}

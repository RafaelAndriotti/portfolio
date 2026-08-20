import { createContext, useContext, useEffect, useState } from 'react'

const SiteContext = createContext(null)

const VISITOR_NAME_KEY = 'portfolio:visitor-name'
const VISITOR_ASKED_KEY = 'portfolio:visitor-name-asked'
const NAME_MAX_LENGTH = 18

// localStorage quebra em modo privado de alguns navegadores; o cursor não pode
// derrubar a página por causa disso, então toda leitura e escrita é protegida.
function readStorage(key) {
  try {
    return window.localStorage.getItem(key) || ''
  } catch {
    return ''
  }
}

function writeStorage(key, value) {
  try {
    if (value) window.localStorage.setItem(key, value)
    else window.localStorage.removeItem(key)
  } catch {
    /* sem persistência: o nome vale só para esta sessão */
  }
}

// Enquanto digita só cortamos quebras de linha e o excesso de caracteres —
// trim aqui impediria escrever nome composto, porque o espaço sumiria na tecla.
function trimName(value) {
  return String(value)
    .replace(/[\r\n\t]+/g, ' ')
    .slice(0, NAME_MAX_LENGTH)
}

function sanitizeName(value) {
  return trimName(value).replace(/\s+/g, ' ').trim()
}

export function SiteProvider({ children }) {
  const [lang, setLang] = useState('pt')
  const [theme, setTheme] = useState('dark')

  // Nome que o visitante escolheu para o cursor. `previewName` é o que ele está
  // digitando agora — aparece no cursor na hora, mas só vira `visitorName`
  // (e vai para o localStorage) quando ele confirma.
  const [visitorName, setVisitorName] = useState(() => readStorage(VISITOR_NAME_KEY))
  const [previewName, setPreviewName] = useState('')
  const [namePromptOpen, setNamePromptOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [theme, lang])

  const saveVisitorName = (value) => {
    const clean = sanitizeName(value)
    setVisitorName(clean)
    setPreviewName('')
    writeStorage(VISITOR_NAME_KEY, clean)
    writeStorage(VISITOR_ASKED_KEY, '1')
  }

  const dismissNamePrompt = () => {
    setPreviewName('')
    setNamePromptOpen(false)
    writeStorage(VISITOR_ASKED_KEY, '1')
  }

  const value = {
    lang,
    theme,
    setLang,
    toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    t: (entry) => (entry && typeof entry === 'object' ? entry[lang] : entry),
    visitorName,
    previewName,
    setPreviewName: (next) => setPreviewName(trimName(next)),
    saveVisitorName,
    hasBeenAsked: () => readStorage(VISITOR_ASKED_KEY) === '1',
    namePromptOpen,
    openNamePrompt: () => setNamePromptOpen(true),
    dismissNamePrompt,
  }

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

export function useSite() {
  const context = useContext(SiteContext)
  if (!context) throw new Error('useSite precisa estar dentro de <SiteProvider>')
  return context
}

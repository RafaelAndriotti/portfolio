import { createContext, useContext, useEffect, useState } from 'react'

const SiteContext = createContext(null)

export function SiteProvider({ children }) {
  const [lang, setLang] = useState('pt')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [theme, lang])

  const value = {
    lang,
    theme,
    setLang,
    toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    t: (entry) => (entry && typeof entry === 'object' ? entry[lang] : entry),
  }

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

export function useSite() {
  const context = useContext(SiteContext)
  if (!context) throw new Error('useSite precisa estar dentro de <SiteProvider>')
  return context
}

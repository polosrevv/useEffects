import { createContext, useState } from 'react'
 
const translations = {
  en: { greeting: 'Welcome to class!', start: 'Start' },
  es: { greeting: '¡Bienvenidos a la clase!', start: 'Empezar' },
}
 
export const LanguageContext = createContext(null)
 
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]   // the words for the current language
 
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

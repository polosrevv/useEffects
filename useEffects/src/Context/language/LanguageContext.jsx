import { createContext, useState } from 'react'
 
const translations = {
  en: { greeting: 'Welcome to class!', start: 'Start', end: 'End' },
  es: { greeting: '¡Bienvenidos a la clase!', start: 'Empezar', end: 'Terminar' },
  pt: { greeting: 'Bem-vindo à aula!', start: 'Começar', end: 'Terminar' },
}
 
export const LanguageContext = createContext(null)
 
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]   // the words for the current language
 
  return (
    <>
      <LanguageContext.Provider value={{ lang, setLang, t }}>
        {children}
      </LanguageContext.Provider>
      <select onClick={(event) => setLang(event.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="pt">Portuguese</option>
      </select>
    </>
  )
}

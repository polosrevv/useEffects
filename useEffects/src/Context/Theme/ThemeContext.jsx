import { createContext, useEffect, useState } from 'react'
 
export const ThemeContext = createContext(null)
 
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

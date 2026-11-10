import { useContext } from 'react'
import { ThemeContext } from '../Context/Theme/ThemeContext'
 
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return <button onClick={toggleTheme}>Theme: {theme}</button>
}

export default ThemeButton

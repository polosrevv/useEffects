// Steven Gonell
// 11/9/2026
// Main App component that renders various effects and teacher tools.

import { useState } from 'react'
import UserProfile from './effects/UserProfile'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import QuizTimer from './effects/QuizTimer'
import InboxTitle from './effects/InboxTitle'
import ScreenSize from './effects/ScreenSize'
import AutoSaveNote from './effects/AutoSaveNote'
import UserContextProvider from './Context/User/UserContext'
import './styles/styles.css'
import  ThemeProvider  from './Context/Theme/ThemeContext'
import ThemeButton from './effects/ThemeButton'
import LoginButtons from './Context/User/LoginButtons'
import UserProvider from './Context/User/UserProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <UserProvider>
        <LoginButtons />
      </UserProvider>
      <ThemeButton />
      <QuizTimer />
      
      <InboxTitle />
      <UserProfile />
      <AutoSaveNote />
    </ThemeProvider>
  )
}

export default App

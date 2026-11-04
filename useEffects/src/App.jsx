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
import './styles/styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuizTimer />
      <InboxTitle />
      <UserProfile />
      <ScreenSize />
      <AutoSaveNote />
    </>
  )
}

export default App

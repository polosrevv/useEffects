// Steven Gonell
// 11/9/2026
// Main App component that renders various effects and teacher tools.
import { Routes, Route } from 'react-router'
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
import { LanguageProvider } from './Context/language/LanguageContext'
import Greeting from './Context/User/Greeting'
import { CartContext } from './Context/Cart/CartContext'
import { products } from './Context/User/ProductList'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Member from './pages/Member.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [cartAmount, setCartAmount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/members/:name" element={<Member />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      <ThemeProvider>
        <UserProvider>
          <LoginButtons />
        </UserProvider>
        <ThemeButton />
        <QuizTimer />
        <LanguageProvider>
          <Greeting />
        </LanguageProvider>
        <InboxTitle />
        <UserProfile />
        <AutoSaveNote />
      </ThemeProvider>
    </>
    
  )
}

export default App

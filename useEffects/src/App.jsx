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
import { LanguageProvider } from './Context/language/LanguageContext'
import Greeting from './Context/User/Greeting'
import { CartContext } from './Context/Cart/CartContext'
import { products } from './Context/User/ProductList'

function App() {
  const [count, setCount] = useState(0)
  const [cartAmount, setCartAmount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  return (
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
      <CartContext>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button onClick = {() => product.isInCart = true}>{product.isInCart ? 'In Cart' : 'Add to Cart'}</button>
        </div>
      ))}
      {products.map((product) => product.isInCart && (
        cartAmount + 1
        cartTotal + product.price
      ))}
    </CartContext>
    </ThemeProvider>
    
  )
}

export default App

import { createContext, useState } from 'react'
import { products } from '../User/ProductList'
export const CartContext = createContext(null)
 
export function CartProvider({ children }) {
  const [items, setItems] = useState([])
 
  const addToCart = (product) => setItems([...items, product])
 
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

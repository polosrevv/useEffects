import { createContext, useState } from 'react'
 
export const UserContext = createContext(null)
 
export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
 
  const login = (name, role) => setUser({ name, role })
  const logout = () => setUser(null)
 
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

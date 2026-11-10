import { useContext } from 'react'
import { UserContext } from './UserContext'
 
function LoginButtons() {
  const { user, login } = useContext(UserContext)
  return (
    <div>
      {user? <h1>Hi, {user.name}!</h1> : null}
      <button onClick={() => login('Maria', 'student')}>Log in as student</button>
      <button onClick={() => login('Mr. Islam', 'teacher')}>Log in as teacher</button>
    </div>
  )
}
 
export default LoginButtons

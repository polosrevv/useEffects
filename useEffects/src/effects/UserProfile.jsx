// Steven Gonell
// 11/3/2026
// First I import useState and useEffect from React
import { useState, useEffect } from 'react'
 
function UserProfile() {
  // Variables, with useState for managing component state
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null) // I had to make a variable for the error in order to use it for a p tag(idk any other way to do this, and I need a set so I can call state on it)
 
  useEffect(() => {
    // This effect runs whenever the userId changes
    // Change loading state after each step of the process, this will make the text "LOading..." appear and dissapear due to the ternary operators
    let active = true
    setLoading(true)
    setError(null)
    // Fetching data from the API based on the current userId
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch user')
        return res.json()
      })
      .then((data) => {
        if (active) {
          setUser(data)
          setLoading(false)
        }
      })
      // Handling errors if the fetch request fails
      .catch((error) => {
        console.error('Error fetching user:', error)
        if (active) {
          setError(error)
          setLoading(false)
        }
      })
    return () => { active = false }
  }, [userId])

  
 // This is what will be displayed on the page thanks to the instructions before
  return (
    <div className="user-profile">
      {loading ? <p>Loading…</p> : error ? <p>Error loading user</p> : <h3>{user.name}</h3>}
      {loading ? <p>Loading…</p> : error ? <p>Error loading user</p> : <p>{user.email}</p>}
      {loading ? <p>Loading…</p> : error ? <p>Error loading user</p> : <p>{user.phone}</p>}
      <p>Current userId: {userId}</p>
      {/* same as before except I use setUserId(obvious mistake, i know) */}
      <button onClick={() => setUserId((id) => id === 10 ? 1 : id + 1)}>Next user</button>
      <button onClick={() => setUserId((id) => id === 1 ? 10 : id - 1)}>Previous user</button>
    </div>
  )
}
 
export default UserProfile

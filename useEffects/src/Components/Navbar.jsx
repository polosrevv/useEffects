import { NavLink } from 'react-router'
 
function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">CS Club</span>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/members">Members</NavLink>
    </nav>
  )
}
 
export default Navbar

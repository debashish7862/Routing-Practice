import { Link } from 'react-router-dom'
import './style.css'
export default function Navbar() {
  return (
    <div className="navBar">
      <div className="anchorTag">
      <Link to ="/">Home</Link>
        <Link to="/aboutUs">AboutUs</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/logIn">LogIn</Link>
        <Link to="/technologies">Technologies</Link>
      </div>
        
    
    </div>
  )
}

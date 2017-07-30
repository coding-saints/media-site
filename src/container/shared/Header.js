import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => (
    <header>
        <span className="brand"><Link to="/"><img className="logo" src={require("../../public/assets/smlogo.png")} /></Link></span>
    <nav className="nav-wrapper">
        
                <Link className="link-1" to='/'>Home</Link>
                <Link className="link-1" to='/price'>Pricing</Link>
                <Link className="link-1" to='/contact'>Contact</Link>
                <Link className="link-1" to='/blog'>Blog</Link>
    
    </nav>
    </header>
)

export default Header;
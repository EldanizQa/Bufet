import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';




const Navbar = () => {

    const [isMobile, setisMobile] = useState(false)

  return (
    <nav className="navbar">
        {/* <NavLink to='/'> */}
            {/* <img className="logo" src={require('../../assets/Icons/logo.png')}/> */}
        {/* </NavLink> */}
        {/* <h3 className='logo'>RestMap</h3> */}
        <h3 className="logo">RestMap</h3>
        <ul className={isMobile? 'nav-links-mobile': 'nav-links'}
        onClick={() => setisMobile(false)}>
            <Link to="/home" className='home'>
                <li>Home</li>
            </Link>
            <Link to="/about" className='about'>
                <li>About</li>
            </Link>
            <Link to="/travel" className='travel'>
                <li>Travel</li>
            </Link>
            <Link to="/contact" className='contact'>
                <li>Contact</li>
            </Link>
        </ul>
        <button className='mobile-menu-icon'
        onClick={() => setisMobile(!isMobile)}>
        {isMobile ? (
            <i className='fas fa-times'></i>
        ) : (
            <i className='fas fa-bars'></i>
        )}
        </button>
    </nav>
  )
}

export default Navbar
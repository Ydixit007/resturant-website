import './navbar.css';

import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            Rest<span className='au'>au</span>rant
        </div>
        <ul className='links'>
            <li className='link' >Home</li>
            <li className='link' >Menu</li>
            <li className='link' >Service</li>
            <li className='link' >About</li>
            <li className='link' >Gallery</li>
        </ul>
        <div className="account">
            <div className="cart"></div>
            <div className="login">Login</div>
            <div className="create-account">Create Account</div>
        </div>
    </div>
  )
}

export default Navbar
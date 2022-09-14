import React from 'react'
import './Navbar.scss'
import img from '../../assets/images/789489.png'

const Navbar = () => {
  return (
    <div className='navbar-main'>
        <div className="nav-img">
            <img className='nav-icon' src={img} alt="nav-logo" />
        </div>
        <div className="nav-pages">
            <a href="/">Home</a>
            <a href="/">Index</a>
        </div>
    </div>
  )
}

export default Navbar
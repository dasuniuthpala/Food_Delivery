import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <img src={assets.logo} alt="logo" className='logo' />
        <ul className='navbar-menu'>
          <li>home</li>
          <li>menu</li>
          <li>mobile-app</li>
          <li>contact us</li>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt="search" className='navbar-icon' />
          <div className="navbar-basket-wrapper">
            <img src={assets.basket_icon} alt="basket" className='navbar-icon' />
            <div className="dot"></div>
          </div>
          <button className='navbar-button'>sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <footer className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-context-left'>
          <div className="footer-logo">
            <img src={assets.logo} alt="Logo" />
          </div>
          <p>Delicious food delivered to your door, fast and fresh.</p>
          <div className="footer-social">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter} alt="Twitter" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className='footer-context-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='footer-context-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>078-5828988</li>
            <li>dasuniuthpala2002@gmail.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-details">© 2025 Tomato.com - All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
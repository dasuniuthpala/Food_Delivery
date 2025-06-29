import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext' 



function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("home");
  const location = useLocation();
  const {getTotalCartAmount} = useContext(StoreContext);

  // Smooth scroll to section if on home page
  const handleScroll = (id, menuName) => (e) => {
    setMenu(menuName);
    if (location.pathname === "/") {
      e.preventDefault();
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If not on home, let anchor work (will jump after navigation)
  };

  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <Link to="/"><img src={assets.logo} alt="logo" className='logo' /></Link>
        <ul className='navbar-menu'>
          <li>
            <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
              home
            </Link>
          </li>
          <li>
            <a
              href="/#explore-menu-section"
              onClick={handleScroll("explore-menu-section", "menu")}
              className={menu === "menu" ? "active" : ""}
            >
              menu
            </a>
          </li>
          <li>
            <a
              href="/#app-download"
              onClick={handleScroll("app-download", "mobile-app")}
              className={menu === "mobile-app" ? "active" : ""}
            >
              mobile app
            </a>
          </li>
          <li>
            <a
              href="/#footer"
              onClick={handleScroll("footer", "contact-us")}
              className={menu === "contact-us" ? "active" : ""}
            >
              contact us
            </a>
          </li>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt="search" className='navbar-icon' />
          <div className="navbar-basket-wrapper">
            <Link to="/cart"><img src={assets.basket_icon} alt="basket" className='navbar-icon' /></Link>
            <div className={getTotalCartAmount()===0? "" : "dot"}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
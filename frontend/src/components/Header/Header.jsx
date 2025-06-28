import React from 'react';
import "./Header.css";
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className='header'>
      <img src={assets.header_img} alt="food" className="header-bg-img" />
      <div className='header-contents'>
        <h2>Order your<br/>favourite food here</h2>
        <p className="header-desc">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button className="header-btn">View Menu</button>
      </div>
    </div>
  )
}

export default Header
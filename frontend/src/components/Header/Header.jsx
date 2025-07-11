import React from 'react';
import "./Header.css";
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header-hero'>
      
      <img
        src={assets.header_img}
        alt="food"
        className="header-bg-img"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/cart')}
      />
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
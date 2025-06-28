import React, { useState, useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

function FoodItem({ id, name, image, price }) {

  const {cartItems,  addToCart, removeFromCart} = useContext(StoreContext)
  const itemCount = cartItems[id] || 0;

  return (
    <div className="food-card">
      <div className="food-item-img-container">
        <img className='food-card-img' src={image} alt={name} />
        
        {!itemCount ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter-group">
            <img
              className="add-icon-red"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="-"
            />
            <span className="food-item-counter-value">{itemCount}</span>
            <img
              className="add-icon-green"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="+"
            />
          </div>
        )}
      </div>
      <div className="food-card-body">
        <div className="food-card-title-rating">
          <span className="food-card-title">{name}</span>
          <img src={assets.rating_starts} alt="rating stars" className="food-card-rating" />
        </div>
        <div className="food-card-desc">
          Food provides essential nutrients for overall health and well-being
        </div>
        <div className="food-card-price">${price}</div>
      </div>
    </div>
  )
}

export default FoodItem
import React, { useContext } from 'react'
import "./PlaceOrder.css";
import { StoreContext } from '../../context/StoreContext';

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <div className='place-order'>
      <div className="place-order-left">
        <div className='delivery-title'>Delivery Information</div>
        <div className="delivery-grid">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
          <input type="text" placeholder='Email address'/>
          <input type="text" placeholder='Phone'/>
          <input type="text" placeholder='Street'/>
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
      </div>
      <div className="cart-summary">
        <h2>Cart Totals</h2>
        <div className="cart-summary-row">
          <span>Subtotal</span>
          <span>${getTotalCartAmount()}</span>
        </div>
        <div className="cart-summary-row">
          <span>Delivery Fee</span>
          <span>${getTotalCartAmount() ===0?0:2}</span>
        </div>
        <div className="cart-summary-row cart-summary-total">
          <span>Total</span>
          <span>${getTotalCartAmount() ===0?0:getTotalCartAmount() + 2}</span>
        </div>
        <button className="checkout-btn" >PROCEED TO PAYMENT</button>
      </div>
    </div>
  )
}

export default PlaceOrder

import React from 'react';
import "./Cart.css";
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/order');
  };

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <React.Fragment key={item.id}>
                <div className="cart-items-item">
                  <img 
                    src={item.image.startsWith('data:') ? item.image : `http://localhost:4000/uploads/${item.image}`}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <p>{item.name}</p>                                                          {/* Title column: name */}
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${(item.price * cartItems[item.id]).toFixed(2)}</p>
                  <p onClick={() => removeFromCart(item.id)} className="remove-btn">x</p>
                </div>
                <hr />
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Shipping</p>
              <p>${getTotalCartAmount() ===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() ===0?0:getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
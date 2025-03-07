import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='Fist Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-field">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-field">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:19}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+19}</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder

import React from 'react';
import { getBasketTotal } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket }] = useStateValue();
    const basketTotal = getBasketTotal(basket);
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <h1>Shopping Cart</h1>   
              <div className='checkout__product'>
                  {basket?.map((item) => {
                      return <CheckoutProduct
                          id={item.id}
                          price={item.price}
                          description={item.description}
                          rating={item.rating}
                          image={item.image}   
                      />
                  })}
            </div>  
        </div>
        <div className='subtotal'>
              <p className='subtotal__note'><span>Part of your order qualifies for FREE Delivery.</span> Select this option at checkout.</p>
              <span className="subtotal__total">
                  Subtotal ({basket?.length} items): <strong>₹ {basketTotal}</strong>
              </span>
              <div className='subtotal__gift'>
                  <input type="checkbox" />
                  <p>This order contains a gift</p>
              </div>
              <div className='subtotal__button'>
                <button>Proceed to Buy</button>
              </div>
          </div>
          
    </div>
  )
}

export default Checkout

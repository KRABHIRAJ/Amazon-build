import React from 'react';
import { useStateValue } from '../context/StateProvider';
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, price, rating, description }) {
    const [state, dispatch] = useStateValue();
    const removeFromBasket = (e) => {
        e.stopPropagation();
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: {id},
        })
    }
  return (
    <div className='checkoutProduct'>
        <div className='checkout__image'>
              <img
                  className='checkout__image'
                  src={image}
                  alt=""
              />
          </div>
          <div className='product__info'>
              <span className='description'>{description.substring(0, 120)}...</span>
              <div className='product__rating'>
                  {Array(rating).fill().map(() => {
                      return (<p>⭐</p>)
                  })}
              </div>
              <span className='availability'>In Stock</span>
              <span className='free__delivery'>Eligible for FREE Shipping</span>
              <strong>₹ {price}</strong>
              <button onClick={removeFromBasket} className='checkoutproduct__button'>Remove From Basket</button>
          </div>
    </div>
  )
}

export default CheckoutProduct;

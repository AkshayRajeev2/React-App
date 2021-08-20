import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider"

function Checkout() {
 
    const [{basket},dispatch] = useStateValue();



  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello,</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

            {basket.map(basket => 
            // <div className="product">
            // <div className="product__info">
            //     <p>{basket.title}</p>
            //     <p className="product__price">
            //     <small>$</small>
            //     <strong>{basket.price}</strong> 
            //     </p>
            //     <div className="product__rating">
            //     {Array(basket.rating)
            //     .fill()
            //     .map((_, i) => (
            //     <p>🌟</p>
            //     ))}
            //     </div>
            //     <img src={basket.image} alt="" />

            //     <button  onClick={removeFromBasket(basket.price)}  >Remove from Basket</button>
            // </div>
            // </div>
            <CheckoutProduct
            id={basket.id}
            title={basket.title}
            price={basket.price}
            rating={basket.rating}
            image={basket.image}
          />
        )}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
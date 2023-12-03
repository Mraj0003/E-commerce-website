import React from "react";
import "./checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="Checkout">
      <div className="Checkout_left">
        <img
          className="Checkout_ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/blog/AmazonAdvertising.jpg"
          alt=""
        />
        <div>
          <h1 className=" Checkout_title">Your Shouping</h1>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className=" Checkout_right">
          <Subtotal />
        </h1>
      </div>
    </div>
  );
}

export default Checkout;

import React from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import "./Payment.css";

function Payment() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="Payment">
      <div className="Payment_container">
        <h1>
          Checkout (<a href="/checkout">{basket.length} item </a>)
        </h1>

        <div className="Payment_section">
          <div className="Payment_title">
            <h3>Delivery</h3>
          </div>
          <div className="Payment_address">
            <p>No:15 MGR nagar </p>

            <p>lawspet puducherry-605008</p>
          </div>
        </div>
        <div className="Payment_section">
          <div className="Payment_title">
            <h3>Review item</h3>
          </div>
          <div className="Payment_item">
            {basket.map((item) => (
              <CheckoutProduct
                id="12345"
                title="The NO-BS Self-Help Book: The No-Fluff Guide to Self-Mastery Kindle Edition"
                price={12.0}
                image="https://www.cnet.com/a/img/resize/68eef9c4c6893adaf39a4deb333f5125a9dd73cc/hub/2019/11/13/1e4b40a1-81a8-40e7-a379-386d1e544b9e/cnet-amazon-fire-stick.jpg?auto=webp&width=1200"
                rating={5}
              />
            ))}
          </div>
        </div>
        <div className="Payment_section">
          <div className="Payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="Payment_details">
            <h3>Payment Method</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

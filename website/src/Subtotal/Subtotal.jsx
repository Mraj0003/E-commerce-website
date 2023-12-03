import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import { getBasketTotal } from "../reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="container-fluid">
      <div className="Subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <div>
              <p>
                Subtotal ({basket.length} items):
                <strong>{value} </strong>
              </p>
              <small className="Subtotal_gift">
                <input type="checkbox" />
                This Order
              </small>
            </div>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        {/*<button type="" onClick={(e) => history.push("/Payment")}>
        Product Checkout{" "}
        </button>*/}
        <button type="button">
          <a href="/Payment" type="button">
            {" "}
            Product Checkout{" "}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Subtotal;

import React from "react";
import "./ProductView01.css";
import { useStateValue } from "../StateProvider/StateProvider";

function ProductView01({
  id,
  title,
  price,
  Pasent,
  MRP,
  save,
  rating,
  day,
  date,
  mon,
}) {
  return (
    <div className="ProductView01">
      <div className="ProductView01_Info">
        <h5>{title}</h5>
        <p className="ProductView01_Price">
          <h2>₹ {price}</h2>
          <h6>(incl all Taxes)</h6>
          <small className="text-decoration-line-through"> ₹{MRP}</small>
          <strong>
            (save ₹{save}) ({Pasent}%off)
          </strong>
          <br />
          <small>
            Get it by {day}, {date} {mon} FREE Delivery by ___{" "}
          </small>
        </p>
      </div>
    </div>
  );
}

export default ProductView01;

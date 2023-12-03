import React from "react";
import "./Product01.css";
import { useStateValue } from "../StateProvider/StateProvider";

function Product01({ id, title, image, price, rating }) {
  return (
    <div className="Product">
      <img src={image} alt="" />
      <div className="Product_Info">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Product01;

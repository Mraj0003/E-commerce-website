import React from "react";
import "./ProductViewImage.css";

function ProductViewImage({ item }) {
  return (
    <div className="ProductViewImage">
      {item && item.ProductImage && (
        <img
          src={`http://localhost:3001/ProductImages/${item.ProductImage}`}
          alt={item.ProductTitle && item.ProductTitle[0]}
        />
      )}
    </div>
  );
}

export default ProductViewImage;

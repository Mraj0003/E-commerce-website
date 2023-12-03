import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductInfo.css";

function ProductInfo() {
  const [selectProduct, setSelectProduct] = useState(0);
  const [quantity, setquantity] = useState(1);
  const { id } = useParams();
  const [Category, setCategory] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [ProductTitle, setProductTitle] = useState("");
  const [ProductImage, setProductImage] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [OriginalPrice, setOriginalPrice] = useState("");
  const [SellingPrice, setSellingPrice] = useState("");
  const [Saving, setSaving] = useState("");
  const [Percentage, setPercentage] = useState("");
  const [Date, setDate] = useState("");
  const [Description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/MobilePhoneGet/` + id)
      .then((response) => {
        const data = response.data;
        setCategory(data.Category);
        setBrandName(data.BrandName);
        setProductTitle(data.ProductTitle);
        setProductImage(data.ProductImage);
        setQuantity(data.Quantity);
        setOriginalPrice(data.OriginalPrice);
        setSellingPrice(data.SellingPrice);
        setSaving(data.Saving);
        setPercentage(data.Percentage);
        setDate(data.Date);
        setDescription(data.Description);
      })
      .catch((err) => console.log(err));
  }, []);

  const image = [
    "https://m.media-amazon.com/images/I/81pmO0iVNhL._SX522_.jpg",
    "https://m.media-amazon.com/images/I/71LNvTy+lWL._SY606_.jpg",
    "https://m.media-amazon.com/images/I/71xS2jgnxcL._SY606_.jpg",
  ];

  return (
    <div className="ProductInfo">
      <div className="left">
        <div className="images">
          {image.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Product ${index + 1}`}
              onClick={() => setSelectProduct(index)}
            />
          ))}
        </div>
        <div className="MainImage">
          <img
            src={`http://localhost:3001/ProductImages/${ProductImage}`}
            alt={`Product ${selectProduct + 1}`}
          />
        </div>
      </div>
      <div className="right">
        <h3>{ProductTitle}</h3>
        <span className="SellingPrice">Selling Price Today</span>

        <h1 className="">
          {" "}
          <span className="Percentage">-{Percentage}% </span>₹{SellingPrice}
        </h1>

        <h6>
          M.R.P <span className="MRPPrice">₹{OriginalPrice}</span>{" "}
        </h6>
        <p style={{ fontWeight: "500", color: "red" }}>
          (Inclusive of all taxes)
        </p>
        <h5>About this item</h5>
        <p>{Description}</p>
        <div className="Quantity">
          <Button
            type=""
            onClick={() => setquantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </Button>
          {quantity}
          <Button
            type=""
            variant="danger"
            onClick={() => setquantity((prev) => prev + 1)}
          >
            +
          </Button>
        </div>
        <div className="AddProduct">
          <Button type="" className="m-2 BuyNow">
            Buy Now
          </Button>
          <Button type="" variant="warning" className="m-2">
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;

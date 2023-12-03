import React, { useState } from "react";
import "./Header.css";
import Logo from "./Amazon Logo.jpeg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { useStateValue } from "../StateProvider/StateProvider";
import LoginPg from "../LoginPg/LoginPg";

function Header({ email, setEmail }) {
  const [{ basket }, dispatch] = useStateValue();
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="nav">
      <div className="Header col-12 col-md-auto">
        <a href="/">
          {" "}
          <img className="header_Logo" src={Logo} alt="" />
        </a>

        <div className="header_search">
          <input className="searchIn" type="text" name="" />
          <AiOutlineSearch className="header_searchIcon" />
        </div>
        <div className="header_nave">
          <div className="header_option">
            <span className="optionLineUp">Hello</span>
            <button onClick={togglePopup}>
              <span className="optionLineDown">{email}</span>
            </button>
            &nbsp;
          </div>
          <div className="header_option">
            <span className="optionLineUp">Hello</span>
            <a href="/Product_View">
              <span className="optionLineDown">All Products</span>
            </a>
          </div>
          <div className="header_option">
            <span className="optionLineUp">Hello</span>
            <span className="optionLineDown">{email}</span>
          </div>
          <a href="/Checkout">
            <div className="header_optionBasket">
              <BsFillBagFill />
              <span className="header_optionBasketCount">{basket.length}</span>
            </div>
          </a>
        </div>
      </div>
      {isPopupVisible && <LoginPg closePopup={() => setPopupVisible(false)} />}
    </div>
  );
}

export default Header;

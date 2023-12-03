import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import "./Product_View.css";
import axios from "axios";

import ProductView01 from "../ProductView01/ProductView01";
import ProductViewImage from "../ProductView01/ProductViewImage";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Product_View() {
  const [admin, setMobilePhone] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:3001/MobilePhoneView")
      .then((response) => setMobilePhone(response.data))
      .catch((err) => console.log(err));
  }, []);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="Product_View ">
      <div className={`AdminPage_Product ${isCollapsed ? "isCollapsed" : ""}`}>
        <div className="sidebar_Product">
          <h3>Filter By</h3>
          <ul className="sidebar-nav_Product">
            <h6 className="p-1">Categories</h6>
            <li className="sidebar-item_Product">
              <input id="check01" className="" type="checkbox" />
              <label htmlFor="check01">Android Phone</label>
            </li>
            <li className="list-group-item">
              {" "}
              <input id="check02" className="" type="checkbox" />
              <label htmlFor="check02">IPhone</label>
            </li>
            <li className="list-group-item">
              {" "}
              <input id="check03" className="" type="checkbox" />
              <label htmlFor="check03">Flip Mobile Phone</label>
            </li>
            <li className="list-group-item">
              {" "}
              <input id="check04" className="" type="checkbox" />
              <label htmlFor="check04">Fold Mobile Phone</label>
            </li>
            <li className="list-group-item">
              {" "}
              <input id="check05" className="" type="checkbox" />
              <label htmlFor="check05">Keypad Mobile Phone</label>
            </li>
            <h6 className="p-1">Rating</h6>
            <li className="list-group-item">
              {" "}
              <label htmlFor="star01">
                ⭐⭐⭐⭐
                <CiStar />
              </label>
            </li>
            <li className="list-group-item">
              {" "}
              <label htmlFor="star02">
                ⭐⭐⭐
                <CiStar />
                <CiStar />
              </label>
            </li>
            <li className="list-group-item">
              {" "}
              <label htmlFor="star03">
                ⭐⭐
                <CiStar />
                <CiStar />
                <CiStar />
              </label>
            </li>
            <li className="list-group-item">
              {" "}
              <label htmlFor="star04">
                ⭐
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </label>
            </li>
            <h6 className="p-1">Categories</h6>
            <li class="list-group-item">
              <input type="checkbox" id="samsung" />
              <label for="samsung">Samsung</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="motorola" />
              <label for="motorola">Motorola</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="realme" />
              <label for="realme">realme</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="Lava" />
              <label for="Lava">Lava</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="POCO" />
              <label for="POCO">POCO</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="Vivo" />
              <label for="Vivo">Vivo</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="Apple" />
              <label for="Apple">Apple</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="MI" />
              <label for="MI">MI</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="Xiaomi" />
              <label for="Xiaomi">Xiaomi</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="OnePlus" />
              <label for="OnePlus">OnePlus</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="Honor" />
              <label for="Honor">Honor</label>
            </li>
            <h6 className="p-1">Price</h6>
            <li class="list-group-item">
              <input type="checkbox" id="10001_20000" />
              <label for="10001_20000">10,000 - 20,000 </label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="5001_10000" />
              <label for="5001_10000">5,000 - 10,000</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="20001_30000" />
              <label for="20001_30000">20,000 - 30,000 </label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="30001_40000" />
              <label for="30001_40000">30,000 - 40,000 </label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="3001_5000" />
              <label for="3001_5000">3,000 - 5,000 </label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="100001_200000" />
              <label for="100001_200000">1,00,000 - 2,00,000 </label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="70001_80000" />
              <label for="70001_80000">70,000 - 80,000 </label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="40001_50000" />
              <label for="40001_50000">40,000 - 50,000</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="50001_60000" />
              <label for="50001_60000">50,000 - 60,000 </label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="60001_70000" />
              <label for="60001_70000">60,000 - 70,000 </label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="80001_90000" />
              <label for="80001_90000">80,000 - 90,000 </label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" id="90001_100000" />
              <label for="90001_100000">90,000 - 1,00,000 </label>
            </li>
            <h6 className="p-1">Storage</h6>
            <li className="list-group-item">
              {" "}
              <input id="8gb" className="" type="checkbox" />
              <label htmlFor="8gb"> 8Gb</label>
            </li>
            <li className="list-group-item">
              {" "}
              <input id="16Gb" className="" type="checkbox" />
              <label htmlFor="16Gb">16Gb</label>
            </li>
            <li className="list-group-item">
              {" "}
              <input id="128Gb" className="" type="checkbox" />
              <label htmlFor="128Gb">128Gb</label>
            </li>
          </ul>
          <li className="sidebar-item_Product">
            <Link to="/ProductPage" className="sidebar-link">
              <h6> </h6>
            </Link>
          </li>
        </div>
        <div className="main">
          <nav className="navbar navbar-expand px-3 border-bottom">
            <button className="btn" type="button" onClick={handleToggle}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
          <div className="Product_Views col-sm-10 col-md-10 col-lg-10 col-xl-10">
            {" "}
            <div className="row">
              <div className="Product_Images p-4">
                {admin.map((item, index) => (
                  <div
                    key={index}
                    className="product-item col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    onClick={() => history.push(`/ProductInfo/${item._id}`)}
                  >
                    <ProductViewImage item={item} />
                  </div>
                ))}
              </div>
              <div className="Product_Details">
                {admin.map((item, index) => (
                  <div
                    key={index}
                    className="product-item col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    onClick={() => history.push(`/ProductInfo/${item._id}`)}
                  >
                    <ProductView01
                      title={item.ProductTitle}
                      price={item.SellingPrice}
                      Pasent={item.Percentage}
                      MRP={item.OriginalPrice}
                      save={item.Saving}
                      rating={item.Rating}
                      day="Sunday"
                      date={item.Date}
                      mon="October"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_View;

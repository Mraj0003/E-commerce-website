import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Home.css";
import Product01 from "../Products/Product01";
import OfferLatestProductViews0 from "../AdminPage/OfferLatestProduct/OfferLatestProductViews/OfferLatestProductViews0";
import OfferLatestProductViews01 from "../AdminPage/OfferLatestProduct/OfferLatestProductViews/OfferLatestProductViews01";
import OfferLatestProductViews02 from "../AdminPage/OfferLatestProduct/OfferLatestProductViews/OfferLatestProductViews02";
import OfferLatestProductViews03 from "../AdminPage/OfferLatestProduct/OfferLatestProductViews/OfferLatestProductViews03";
import OfferLatestProductViews04 from "../AdminPage/OfferLatestProduct/OfferLatestProductViews/OfferLatestProductViews04";
import OfferLatestProductViews05 from "../AdminPage/OfferLatestProduct/OfferLatestProductViews/OfferLatestProductViews05";

function Home() {
  return (
    <div className="Home">
      <div className="Home_container">
        <Carousel pause="hover">
          <Carousel.Item>
            <img
              className="Home_Image"
              src="https://i.pinimg.com/originals/ed/12/f4/ed12f41427cffbc0c655203ca3ffb7df.jpg"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Home_Image"
              src="https://i.pinimg.com/originals/43/b3/dd/43b3dde666838ad802bfe4594b9981f0.jpg"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Home_Image"
              src="https://www.huaweicentral.com/wp-content/uploads/2019/08/huawei-nova5t-featured-1.jpg"
              alt=""
            />
          </Carousel.Item>
        </Carousel>

        <div className="home_row">
          <OfferLatestProductViews0 images={"images"} />
          <OfferLatestProductViews01 images={"images"} />
        </div>
        <h1>Latest Product</h1>

        <div className="home_row">
          <OfferLatestProductViews02 images={"images"} />
          <OfferLatestProductViews03 images={"images"} />
          <OfferLatestProductViews04 images={"images"} />
          <OfferLatestProductViews05 images={"images"} />
        </div>
        <h1>Choose Your Type</h1>

        <div className="home_row">
          <Product01
            image="https://m.media-amazon.com/images/I/31tyUh1todL._SY445_SX342_QL70_FMwebp_.jpg"
            title="Iphone"
          />

          <Product01
            title="Smart Phone"
            image="https://m.media-amazon.com/images/I/41GsqdiCvOL._SX300_SY300_QL70_FMwebp_.jpg"
          />

          <Product01
            title="Keypad Mobile"
            image="https://m.media-amazon.com/images/I/61OnW8Rbo0L._SX679_.jpg"
          />
        </div>
        <h1>Pick Your Smartphone Brand</h1>
        <div className="Home_container">
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="home_row">
                <Product01 image="https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UL320_.jpg" />
                <Product01 image="https://m.media-amazon.com/images/I/81guvfQzeVL._AC_UL320_.jpg" />
                <Product01 image="https://m.media-amazon.com/images/I/81jXL12hXYL._AC_UL320_.jpg" />
                <Product01 image="https://m.media-amazon.com/images/I/71BiCb7N5YL._AC_UL320_.jpg" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="home_row">
                <Product01 image="https://m.media-amazon.com/images/I/51Kc8y7X+3L._AC_UL320_.jpg" />
                <Product01 image="https://m.media-amazon.com/images/I/71xJz8lOdpL._AC_UY218_.jpg" />
                <Product01 image="https://m.media-amazon.com/images/I/61aKBXoAeAL._AC_UL320_.jpg" />
                <Product01 image="https://m.media-amazon.com/images/I/31uG4CJG-FL._AC_UY218_.jpg" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <h1>For Your Budget</h1>
        <div className="Home_container">
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="home_row">
                <Product01 image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242609/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_below5K_15May2023_k8wvhd.png?tr=w-720" />
                <Product01 image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242610/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_5Kto10K_15May2023_xm9iqq.png?tr=w-720" />
                <Product01 image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242606/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_10Kto20K_15May2023_fuop6n.png?tr=w-720" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="home_row">
                <Product01 image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242609/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_30Kto50K_15May2023_qspz8w.png?tr=w-720" />
                <Product01 image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242607/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_above50K_15May2023_bznsjt.png?tr=w-720" />
                <Product01 image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242607/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_20Kto30K_15May2023_yrfh2g.png?tr=w-720" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <h1>SmartWatch</h1>

        <div className="home_row">
          <Product01 image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686061217/Croma%20Assets/CMS/PCP/June%20-2023/06-06-2023/Mobiles/4split_PCP_wearbles_Fireboltt-Ninja_06June2023_thujpz.png?tr=w-1024" />
          <Product01 image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686061218/Croma%20Assets/CMS/PCP/June%20-2023/06-06-2023/Mobiles/4split_PCP_wearbles_Noise_06June2023_vgaj4u.png?tr=w-1024" />

          <Product01 image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686061217/Croma%20Assets/CMS/PCP/June%20-2023/06-06-2023/Mobiles/4split_PCP_wearbles_Fireboltt-Shark_06June2023_oiwfjo.png?tr=w-1024" />
          <Product01 image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686061217/Croma%20Assets/CMS/PCP/June%20-2023/06-06-2023/Mobiles/4split_PCP_wearbles_Oneplus_06June2023_rxup1r.png?tr=w-1024" />
        </div>
        <h1>Accessories</h1>

        <div className="home_row">
          <Product01
            title="Power Bank"
            image="https://m.media-amazon.com/images/I/71lVwl3q-kL._AC_UY218_.jpg"
          />
          <Product01
            title="Tempered Glass"
            image="https://m.media-amazon.com/images/I/71zxFLQJfHL._AC_UY218_.jpg"
          />
          <Product01
            title="USB Cable"
            image="https://m.media-amazon.com/images/I/41Uxh-zyjdL._AC_UY218_.jpg"
          />
          <Product01
            title="Mobile Case"
            image="https://m.media-amazon.com/images/I/71Ta5+09A3L._AC_UY218_.jpg"
          />
          <Product01
            title="HeadPhone"
            image="https://m.media-amazon.com/images/I/31VM4MszXiL._AC_UY218_.jpg"
          />
        </div>
        <div className="home_row">
          <Product01
            id="1234567890"
            image="https://www.sellerapp.com/blog/wp-content/uploads/2020/05/selling-alibaba-on-amazon.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

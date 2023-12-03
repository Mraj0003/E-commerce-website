import React, { useEffect } from "react";
import "./PreLoader.css";
import { BiMobileVibration } from "react-icons/bi";
import { preLoaderAnim } from "./LoadingAnimation";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Happy,</span>
        <span>Mobiles,</span>
        <span style={{ fontSize: "2em" }}>
          <BiMobileVibration />
        </span>
      </div>
    </div>
  );
};

export default PreLoader;

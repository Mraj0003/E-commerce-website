import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OfferLatestProductView.css";
function OfferLatestProductViews05() {
  const [images, setImage] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getImage")
      .then((res) => setImage(res.data[5].images))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="OfferLatestProduct">
      {" "}
      <img src={`http://localhost:3001/Images/` + images} alt="no Images" />
    </div>
  );
}

export default OfferLatestProductViews05;

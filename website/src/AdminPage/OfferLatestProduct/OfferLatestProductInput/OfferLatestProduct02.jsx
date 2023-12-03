import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OfferLatestProduct02() {
  const [file, setFile] = useState();
  const [images, setImage] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("OfferLatestProductImage", file);

    axios
      .post("http://localhost:3001/upload", formData)
      .then((res) => {
        toast.success("File uploaded successfully!");
        console.log(res);
      })
      .catch((error) => {
        toast.error("Error uploading file");
        console.error("Error uploading file: ", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/getImage")
      .then((res) => setImage(res.data[2].images))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h4>Upload Images</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          className="btn btn-warning"
        />
        <br />
        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <br />
        <br />
        <img
          src={`http://localhost:3001/Images/` + images}
          alt="no Images"
          style={{ width: "300px", height: "300px" }}
        />
      </form>
      <ToastContainer />
    </div>
  );
}

export default OfferLatestProduct02;

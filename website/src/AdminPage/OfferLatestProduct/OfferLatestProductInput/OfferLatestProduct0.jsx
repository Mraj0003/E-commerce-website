import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function OfferLatestProduct0() {
  const [file, setFile] = useState();
  const [images, setImage] = useState();
  const [imageId, setImageId] = useState(); // Add state to store the image ID

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
        setImageId(res.data.imageId); // Store the image ID in state
      })
      .catch((error) => {
        toast.error("Error uploading file");
        console.error("Error uploading file: ", error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!imageId) {
      toast.warning("Please upload an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    axios
      .put(`http://localhost:3001/updateImage/${imageId}`, formData) // Send image ID to update endpoint
      .then((res) => {
        toast.success("Image updated successfully!");
        console.log(res);
      })
      .catch((error) => {
        toast.error("Error updating image");
        console.error("Error updating image: ", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/getImage")
      .then((res) => {
        setImage(res.data[0].images);
        setImageId(res.data[0]._id); // Store the image ID in state
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h4>Upload Images </h4>
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
      </form>
      <br />
      <form onSubmit={handleUpdate}>
        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
      <br />
      <img
        src={`http://localhost:3001/Images/` + images}
        alt="no Images"
        style={{ width: "300px", height: "300px" }}
      />
      <ToastContainer />
    </div>
  );
}

export default OfferLatestProduct0;

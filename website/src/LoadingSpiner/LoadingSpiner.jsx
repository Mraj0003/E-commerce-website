// LoadingSpinner.js
import React from "react";
import "./LoadingSpiner.css";
import SyncLoader from "react-spinners/SyncLoader";
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner">
        <SyncLoader
          color="#3498db"
          margin={3}
          loading
          size={20}
          speedMultiplier={1}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminLoginPg.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const AdminLoginPg = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = {};

    if (!Username.trim()) {
      validationError.Username = "Username is required";
    }
    if (!Password.trim()) {
      validationError.Password = "Password is required";
    }

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      try {
        const result = await axios.post("http://localhost:3001/Login", {
          Username,
          Password,
        });

        if (result.data === "Success") {
          toast.success("User logged in successfully!");
          window.location.href = "/AdminPage";
        } else {
          toast.error("Login failed! Please check Your Username Password");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error occurred while logging in. Please try again.");
      }
    }
  };

  return (
    <div className="container-fluid" id="Loginpg">
      <div className=" mt-5 pt-5">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="mb-3">
                  <label htmlFor="Username">Username</label>
                  <input
                    className=""
                    type="text"
                    name="Username"
                    placeholder="Username"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.Username && <span>{errors.Username}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="Password">Password</label>
                  <input
                    className=""
                    type="password"
                    name="Password"
                    placeholder="Enter a password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.Password && <span>{errors.Password}</span>}
                </div>

                <div className="mb-3">
                  <button type="submit" className="btn btn-success">
                    Sign In
                  </button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPg;

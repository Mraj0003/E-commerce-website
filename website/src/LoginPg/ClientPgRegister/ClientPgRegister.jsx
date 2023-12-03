import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./ClientPgRegister.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
function ClientPgRegister() {
  const [Username, setUsername] = useState("");
  const [Address, setAddress] = useState("");
  const [Number, setNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setError] = useState({});

  const form = useRef();

  const saveUser = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, Password);
      console.log(email + "" + Password);
    } catch (error) {
      console.log(error);
    }

    const validationError = {};

    if (!Username.trim()) {
      validationError.Username = "Username is required";
    }
    if (!email.trim()) {
      validationError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationError.email = "Email is not valid";
    }
    if (!Password.trim()) {
      validationError.Password = "Password is required";
    } else if (Password.length < 6) {
      validationError.Password = "Password must be at least 6 characters";
    }
    if (!Number.trim()) {
      validationError.Number = "Number is required";
    } else if (Number.length !== 10) {
      validationError.Number = "Number must be 10 digits";
    }
    if (!Address.trim()) {
      validationError.Address = "Address is required";
    }

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      axios

        .post("http://localhost:3001/ClientPgRegister", {
          Username,
          Number,
          Address,
          Password,
          email,
        })

        .then((result) => {
          console.log(result);
          toast.success("User registered successfully!");
        })
        .catch((err) => {
          console.error(err);

          toast.error("Error registering user. Please try again.");
        });
    }
  };

  return (
    <div className="container-fluid" id="ClientPgRegister">
      <div className="mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <a href="/login">
              <img
                className="LoginPg_logo"
                src="https://telecomtalk.info/wp-content/uploads/2023/01/amazon-prime-lite-subscription-in-india-for.png"
                alt=""
              />
            </a>
            <div className="card">
              <div className="card-body">
                <form ref={form} onSubmit={saveUser}>
                  <div className="text-center">
                    <h1>Register</h1>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="login">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Username"
                      placeholder="Enter a Name"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.Username && <span>{errors.Username}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="login">Number</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Number"
                      placeholder=" Number"
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    {errors.Number && <span>{errors.Number}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="login">Address</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      name="Address"
                      placeholder="Current Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors.Address && <span>{errors.Address}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="login">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="Password"
                      placeholder="Enter a password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.Password && <span>{errors.Password}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">E-mail</label>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      placeholder="Enter Your email "
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span>{errors.email}</span>}
                  </div>
                  <div className="text-center mb-3">
                    <a href="/ClientPgLogin">Login</a>
                  </div>
                  <div className="text-center SaveBtn">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                  </div>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPgRegister;

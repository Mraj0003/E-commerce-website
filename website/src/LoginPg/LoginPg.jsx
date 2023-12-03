import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./LoginPg.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function LoginPg({ closePopup }) {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setError] = useState({});

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, Password);
      console.log(email + "" + Password);
      setEmail(email);
    } catch (error) {
      console.log(error);
    }

    const validationError = {};

    if (!email.trim()) {
      validationError.email = "Email is required";
    }
    if (!Password.trim()) {
      validationError.password = "Password is required";
    }

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      try {
        const result = await axios.post("http://localhost:3001/ClientPgLogin", {
          email,
          Password,
        });

        if (result.data === "Success") {
          toast.success("User logged in successfully!");
          history.push("/");
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
    <div className="LoginPg">
      <a href="/">
        <img
          className="LoginPg_logo"
          src="https://telecomtalk.info/wp-content/uploads/2023/01/amazon-prime-lite-subscription-in-india-for.png"
          alt=""
        />
      </a>
      <div className="LoginPg_container">
        <button className="CloseBtn" onClick={closePopup}>
          X
        </button>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
          <h5>Password</h5>
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
          <button
            type="submit"
            onClick={handleSubmit}
            className="LoginPg_SignIn"
          >
            Sign In
          </button>
          <p>
            Welcome back! Your shopping journey continues here. Ready to shop?
            Let's get you logged in!
          </p>
          <Link to="/ClientPgRegister" className="ClientPgRegister_link">
            Create Account
          </Link>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default LoginPg;

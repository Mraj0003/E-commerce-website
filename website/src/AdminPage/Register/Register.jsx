import axios from "axios";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiProducthunt } from "react-icons/si";
import { MdOutlineFavorite } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import "./Register.css";
import { MdOutlineCable } from "react-icons/md";
import { ImMobile2 } from "react-icons/im";
import { ImHeadphones } from "react-icons/im";
import { TbDeviceMobileBolt } from "react-icons/tb";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Registration() {
  const [Username, setUsername] = useState("");
  const [Number, setNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [mail, setEmail] = useState("");
  const [errors, setError] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(false);

  const form = useRef();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const saveUser = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, Username, Password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });

    const validationError = {};

    if (!Username.trim()) {
      validationError.Username = "Username is required";
    }
    if (!mail.trim()) {
      validationError.mail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(mail)) {
      validationError.mail = "Email is not valid";
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

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      axios

        .post("http://localhost:3001/Register", {
          Username,
          Number,
          Password,
          mail,
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
    <div className={`AdminPage ${isCollapsed ? "isCollapsed" : ""}`}>
      <div className="sidebar">
        <div className="sidebar_logo">
          <a href="#">
            <h3>Happy Mobiles</h3>
          </a>
        </div>
        <ul className="sidebar-nav">
          <h4>Happy Mobiles</h4>

          <li className="sidebar-item">
            <Link to="/AdminUsers" className="sidebar-link">
              <h6>
                {" "}
                <FaUserAlt className="icon" /> User
              </h6>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/Register" className="sidebar-link">
              <h6>
                {" "}
                <BsPersonFillAdd className="icon" /> Register
              </h6>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/ClientLoginPgView" className="sidebar-link">
              <h6>
                {" "}
                <FaPeopleGroup className="icon" /> Client
              </h6>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/ProductView" className="sidebar-link">
              <h6>
                {" "}
                <HiOutlineClipboardDocumentList className="icon" /> Product View
              </h6>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/MobilePhoneView" className="sidebar-link">
              <h6>
                {" "}
                <ImMobile2 className="icon" /> Mobile Phones
              </h6>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/MobileCoverView" className="sidebar-link">
              <h6>
                {" "}
                <HiOutlineClipboardDocumentList className="icon" /> Mobile Cover
              </h6>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/HeadPhoneView" className="sidebar-link">
              <h6>
                {" "}
                <ImHeadphones className="icon" /> Head Phones
              </h6>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/PowerBankView" className="sidebar-link">
              <h6>
                {" "}
                <TbDeviceMobileBolt className="icon" /> Power Bank
              </h6>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/USBcableView" className="sidebar-link">
              <h6>
                {" "}
                <MdOutlineCable className="icon" /> USB Cables
              </h6>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/SmartWatchView" className="sidebar-link">
              <h6>
                {" "}
                <HiOutlineClipboardDocumentList className="icon" />
                Smart Watch
              </h6>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/OfferLatestProduct" className="sidebar-link">
              <h6>
                {" "}
                <MdOutlineFavorite className="icon" /> Latest Mobile Ads
              </h6>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/ProductPage" className="sidebar-link">
              <h6>
                {" "}
                <SiProducthunt className="icon" /> Products
              </h6>
            </Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <nav className="navbar navbar-expand px-3 border-bottom">
          <button className="btn" type="button" onClick={handleToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div className="container-fluid" id="AdminRegister">
          <div className="mt-5 pt-5">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-8">
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
                          placeholder="E-mail or Number"
                          onChange={(e) => setNumber(e.target.value)}
                        />
                        {errors.Number && <span>{errors.Number}</span>}
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
                        <label htmlFor="password">E-mail</label>
                        <input
                          className="form-control"
                          type="text"
                          name="mail"
                          placeholder="Reenter a password"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.mail && <span>{errors.mail}</span>}
                      </div>
                      <div className="text-center mb-3">
                        <a href="/AdminLoginPg">Login</a>
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
      </div>
    </div>
  );
}

export default Registration;

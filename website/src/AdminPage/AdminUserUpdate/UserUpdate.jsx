import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminPage.css";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiProducthunt } from "react-icons/si";
import { MdOutlineFavorite } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineCable } from "react-icons/md";
import { ImMobile2 } from "react-icons/im";
import { ImHeadphones } from "react-icons/im";
import { TbDeviceMobileBolt } from "react-icons/tb";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { useParams } from "react-router-dom";

function UserUpdate() {
  const { id } = useParams();
  const [Username, setUsername] = useState("");
  const [Number, setNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [mail, setEmail] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/AdminUsersGet/` + id)
      .then((response) => {
        const data = response.data;
        setUsername(data.Username);
        setNumber(data.Number);
        setPassword(data.Password);
        setEmail(data.mail);
      })
      .catch((err) => console.log(err));
  }, []);
  const saveUser = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/AdminUsersUpdate/" + id, {
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
        <div className="container-fluid" id="Register">
          <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={saveUser} method="post">
                      <div className="text-center">
                        <h3>Admin Users </h3>
                        <h1> Update</h1>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="login">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="Username"
                          value={Username}
                          placeholder="Enter a Name"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="login">Number</label>
                        <input
                          className="form-control"
                          type="text"
                          name="Number"
                          value={Number}
                          placeholder="E-mail or Number"
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="login">Password</label>
                        <input
                          className="form-control"
                          type="text"
                          name="Password"
                          value={Password}
                          placeholder="Enter a password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password">E-mail</label>
                        <input
                          className="form-control"
                          type="text"
                          name="mail"
                          value={mail}
                          placeholder="Reenter a password"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="text-center mb-3">
                        <a href="/AdminLoginPg">Login</a>
                      </div>
                      <div className="text-center">
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

export default UserUpdate;

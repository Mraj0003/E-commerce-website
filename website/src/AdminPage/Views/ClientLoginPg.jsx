import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import axios from "axios";
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
import Table from "react-bootstrap/esm/Table";

function ClientLoginPg() {
  const [ClientLoginPg, setClientLoginPg] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/ClientLoginPgView")
      .then((response) => setClientLoginPg(response.data))
      .catch((err) => console.log(err));
  }, []);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handDelete = (id) => {
    axios
      .delete("http://localhost:3001/DeleteClientLoginPg/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
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
        <div className="m-2 p-2">
          {" "}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Number</th>
                <th>Password</th>
                <th>Address</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {ClientLoginPg.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.Username}</td>
                  <td>{item.Number}</td>
                  <td>{item.Password}</td>
                  <td>{item.Address}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link
                      to={`/ClientLoginPgUpdate/${item._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ClientLoginPg;

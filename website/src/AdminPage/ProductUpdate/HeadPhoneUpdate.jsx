import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AdminPage.css";
import { ToastContainer, toast } from "react-toastify";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiProducthunt } from "react-icons/si";
import { MdOutlineFavorite } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import axios from "axios";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { MdOutlineCable } from "react-icons/md";
import { ImMobile2 } from "react-icons/im";
import { ImHeadphones } from "react-icons/im";
import { TbDeviceMobileBolt } from "react-icons/tb";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HeadPhoneUpdate() {
  const { id } = useParams();
  const [Category, setCategory] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [ProductTitle, setProductTitle] = useState("");
  const [ProductImage, setProductImage] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [OriginalPrice, setOriginalPrice] = useState("");
  const [SellingPrice, setSellingPrice] = useState("");
  const [Saving, setSaving] = useState("");
  const [Percentage, setPercentage] = useState("");
  const [Date, setDate] = useState("");
  const [Description, setDescription] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/HeadPhoneGet/` + id)
      .then((response) => {
        const data = response.data; // Assuming response.data is an object with the product details
        setCategory(data.Category);
        setBrandName(data.BrandName);
        setProductTitle(data.ProductTitle);
        setProductImage(data.ProductImage); // Corrected variable name
        setQuantity(data.Quantity);
        setOriginalPrice(data.OriginalPrice);
        setSellingPrice(data.SellingPrice);
        setSaving(data.Saving);
        setPercentage(data.Percentage);
        setDate(data.Date);
        setDescription(data.Description);
      })
      .catch((err) => console.log(err));
  }, []);

  const saveProduct = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3001/HeadPhoneUpdate/" + id, {
        Category,
        BrandName,
        ProductTitle,
        ProductImage,
        Quantity,
        OriginalPrice,
        SellingPrice,
        Saving,
        Percentage,
        Date,
        Description,
      })
      .then((result) => {
        console.log(result);
        toast.success("Product added successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error adding product. Please try again.");
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
        <div className="ProductPage">
          <Form onSubmit={saveProduct} id="saveProduct">
            <Form.Group className="mb-3" controlId="Category">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Category"
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Android">Android</option>
                <option value="Iphone">Iphone</option>
                <option value="KeyPad">KeyPad</option>
                <option value="Mobile Cover">Mobile Cover</option>
                <option value="Head Phones">Head Phones</option>
                <option value="Power Bank">Power Bank</option>
                <option value="USB Cables">USB Cables</option>
                <option value="Smart Watch">Smart Watch</option>
                <option value="Others">Others</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="BrandName">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                type="text"
                name="BrandName"
                placeholder="Enter Name"
                value={BrandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProductTitle">
              <Form.Label>Product Title</Form.Label>
              <Form.Control
                type="text"
                name="ProductTitle"
                value={ProductTitle}
                placeholder="ProductTitle"
                onChange={(e) => setProductTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProductImage">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                name="ProductImage"
                onChange={(e) => setProductImage(e.target.value)}
              />
              <Form.Text className="text-muted">Upload Product Image</Form.Text>
            </Form.Group>

            <Container>
              <Row>
                <Col>
                  {" "}
                  <Form.Group className="mb-3" controlId="Quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      name="Quantity"
                      type="number"
                      placeholder="Quantity"
                      value={Quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="OriginalPrice">
                    <Form.Label>Original Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Original Price"
                      name="OriginalPrice"
                      value={OriginalPrice}
                      onChange={(e) => setOriginalPrice(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="SellingPrice">
                    <Form.Label>Selling Price</Form.Label>
                    <Form.Control
                      name="SellingPrice"
                      type="number"
                      placeholder="Selling Price"
                      value={SellingPrice}
                      onChange={(e) => setSellingPrice(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {" "}
                  <Form.Group className="mb-3" controlId="Saving">
                    <Form.Label>Saving</Form.Label>
                    <Form.Control
                      name="Saving"
                      type="number"
                      placeholder="Saving"
                      value={Saving}
                      onChange={(e) => setSaving(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="Percentage">
                    <Form.Label>Percentage</Form.Label>
                    <Form.Control
                      name="Percentage"
                      type="Percentage"
                      placeholder="Percentage "
                      value={Percentage}
                      onChange={(e) => setPercentage(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <Form.Group className="mb-3" controlId="Date">
              <Form.Label>Upload Date </Form.Label>
              <Form.Control
                name="Date"
                type="date"
                placeholder="Date "
                value={Date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="Description"
                placeholder="Description"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default HeadPhoneUpdate;

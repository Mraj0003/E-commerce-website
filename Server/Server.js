const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const UploadImageModel = require("./Models/OfferLatestProduct");
const EmployeeModel = require("./Models/Employees");
const SmartSwitchModel = require("./Models/SmartSwitch");
const MobileCollectionModel = require("./Models/MobilePhone");
const ProductModel = require("./Models/SaveProduct");
const MobileCoverModel = require("./Models/MobileCover");
const HeadPhoneModel = require("./Models/HeadPhone");
const PowerBankModel = require("./Models/PowerBank");
const USBcableModel = require("./Models/USBcable");
const ClientLoginPgModel = require("./Models/ClientLoginPg");
const app = express();
app.use(express.json());
app.use(express.static("Upload"));
app.use(express.static("productStorageImage"));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Upload/Images");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("OfferLatestProductImage"), (req, res) => {
  UploadImageModel.create({ images: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
  console.log(req.file);
});
app.get("/getImage", (req, res) => {
  UploadImageModel.find()
    .then((OfferLatestProduct) => res.json(OfferLatestProduct))
    .catch((err) => res.log(err));
});

app.put("/updateImage/:id", (req, res) => {
  const id = req.params.id;
  const newImage = req.body.image;

  UploadImageModel.findByIdAndUpdate(
    { _id: id },
    {
      images: newImage,
    }
  )
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/Register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

app.post("/Login", (req, res) => {
  const { Username, Password } = req.body;

  EmployeeModel.findOne({ Username: Username })
    .then((user) => {
      if (user) {
        if (user.Password === Password) {
          res.json("Success");
        } else {
          res.json("The Password is Incorrect");
        }
      } else {
        res.json("No record");
      }
    })
    .catch((error) => {
      console.error(error);
      res.json("An error occurred");
    });
});

app.post("/ClientPgRegister", (req, res) => {
  ClientLoginPgModel.create(req.body)
    .then((ClientLoginPg) => res.json(ClientLoginPg))
    .catch((err) => res.json(err));
});

app.post("/ClientPgLogin", (req, res) => {
  const { email, Password } = req.body;

  ClientLoginPgModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.Password === Password) {
          res.json("Success");
        } else {
          res.json("The Password is Incorrect");
        }
      } else {
        res.json("No record");
      }
    })
    .catch((error) => {
      console.error(error);
      res.json("An error occurred");
    });
});

const productStorageImage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./productStorageImage/ProductImages");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const productUpload = multer({
  storage: productStorageImage,
});

app.post("/SaveProduct", productUpload.single("ProductImage"), (req, res) => {
  const {
    Category,
    BrandName,
    ProductTitle,
    Quantity,
    OriginalPrice,
    SellingPrice,
    Saving,
    Percentage,
    Date,
    Description,
  } = req.body;
  const ProductImage = req.file.filename;

  if (["iphone", "android", "keypad"].includes(Category.toLowerCase())) {
    MobileCollectionModel.create({
      Category,
      BrandName,
      ProductTitle,
      ProductImage: req.file.filename,
      Quantity,
      OriginalPrice,
      SellingPrice,
      Saving,
      Percentage,
      Date,
      Description,
    })
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  } else if (Category.toLowerCase() === "others") {
    ProductModel.create({
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
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  } else if (Category.toLowerCase() === "mobile cover") {
    MobileCoverModel.create({
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
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  } else if (Category.toLowerCase() === "head phones") {
    HeadPhoneModel.create({
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
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  } else if (Category.toLowerCase() === "power bank") {
    PowerBankModel.create({
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
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  } else if (Category.toLowerCase() === "smart watch") {
    SmartSwitchModel.create({
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
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  } else if (Category.toLowerCase() === "usb cables") {
    USBcableModel.create({
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
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  } else {
    res.json("Invalid category");
  }
});

app.get("/ProductView", (req, res) => {
  ProductModel.find({})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/HeadPhoneView", (req, res) => {
  HeadPhoneModel.find({})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.get("/PowerBankView", (req, res) => {
  PowerBankModel.find({})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.get("/SmartSwitchView", (req, res) => {
  SmartSwitchModel.find({})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.get("/USBcableView", (req, res) => {
  USBcableModel.find({})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.get("/MobilePhoneView", (req, res) => {
  MobileCollectionModel.find({})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.get("/MobileCoverView", (req, res) => {
  MobileCoverModel.find({})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.get("/AdminUsers", (req, res) => {
  EmployeeModel.find({})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.get("/ClientLoginPgView", (req, res) => {
  ClientLoginPgModel.find({})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/Productget/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// This option ensures the updated document is returned

// This option ensures the updated document is returned

app.put("/ProductUpdate/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndUpdate(
    { _id: id },
    {
      Category: req.body.Category,
      BrandName: req.body.BrandName,
      ProductTitle: req.body.ProductTitle,
      ProductImage: req.body.ProductImage,
      Quantity: req.body.Quantity,
      OriginalPrice: req.body.OriginalPrice,
      SellingPrice: req.body.SellingPrice,
      Saving: req.body.Saving,
      Percentage: req.body.Percentage,
      Date: req.body.Date,
      Description: req.body.Description,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/DeleteProduct/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

app.put("/SmartWatchUpdate/:id", (req, res) => {
  const id = req.params.id;
  SmartSwitchModel.findByIdAndUpdate(
    { _id: id },
    {
      Category: req.body.Category,
      BrandName: req.body.BrandName,
      ProductTitle: req.body.ProductTitle,
      ProductImage: req.body.ProductImage,
      Quantity: req.body.Quantity,
      OriginalPrice: req.body.OriginalPrice,
      SellingPrice: req.body.SellingPrice,
      Saving: req.body.Saving,
      Percentage: req.body.Percentage,
      Date: req.body.Date,
      Description: req.body.Description,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/SmartSwitchGet/:id", (req, res) => {
  const id = req.params.id;
  SmartSwitchModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/DeleteSmartSwitch/:id", (req, res) => {
  const id = req.params.id;
  SmartSwitchModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

app.get("/USBcableGet/:id", (req, res) => {
  const id = req.params.id;
  USBcableModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/DeleteUSBcable/:id", (req, res) => {
  const id = req.params.id;
  USBcableModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

app.put("/USBcableUpdate/:id", (req, res) => {
  const id = req.params.id;
  USBcableModel.findByIdAndUpdate(
    { _id: id },
    {
      Category: req.body.Category,
      BrandName: req.body.BrandName,
      ProductTitle: req.body.ProductTitle,
      ProductImage: req.body.ProductImage,
      Quantity: req.body.Quantity,
      OriginalPrice: req.body.OriginalPrice,
      SellingPrice: req.body.SellingPrice,
      Saving: req.body.Saving,
      Percentage: req.body.Percentage,
      Date: req.body.Date,
      Description: req.body.Description,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/MobileCoverGet/:id", (req, res) => {
  const id = req.params.id;
  MobileCoverModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/DeleteMobileCover/:id", (req, res) => {
  const id = req.params.id;
  MobileCoverModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

app.put("/MobileCoverUpdate/:id", (req, res) => {
  const id = req.params.id;
  MobileCoverModel.findByIdAndUpdate(
    { _id: id },
    {
      Category: req.body.Category,
      BrandName: req.body.BrandName,
      ProductTitle: req.body.ProductTitle,
      ProductImage: req.body.ProductImage,
      Quantity: req.body.Quantity,
      OriginalPrice: req.body.OriginalPrice,
      SellingPrice: req.body.SellingPrice,
      Saving: req.body.Saving,
      Percentage: req.body.Percentage,
      Date: req.body.Date,
      Description: req.body.Description,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/MobilePhoneGet/:id", (req, res) => {
  const id = req.params.id;
  MobileCollectionModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/DeleteMobilePhone/:id", (req, res) => {
  const id = req.params.id;
  MobileCollectionModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

app.put("/MobilePhoneUPdate/:id", (req, res) => {
  const id = req.params.id;
  MobileCollectionModel.findByIdAndUpdate(
    { _id: id },
    {
      Category: req.body.Category,
      BrandName: req.body.BrandName,
      ProductTitle: req.body.ProductTitle,
      ProductImage: req.body.ProductImage,
      Quantity: req.body.Quantity,
      OriginalPrice: req.body.OriginalPrice,
      SellingPrice: req.body.SellingPrice,
      Saving: req.body.Saving,
      Percentage: req.body.Percentage,
      Date: req.body.Date,
      Description: req.body.Description,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/DeletePowerBank/:id", (req, res) => {
  const id = req.params.id;
  PowerBankModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

app.put("/PowerBankUpdate/:id", (req, res) => {
  const id = req.params.id;
  PowerBankModel.findByIdAndUpdate(
    { _id: id },
    {
      Category: req.body.Category,
      BrandName: req.body.BrandName,
      ProductTitle: req.body.ProductTitle,
      ProductImage: req.body.ProductImage,
      Quantity: req.body.Quantity,
      OriginalPrice: req.body.OriginalPrice,
      SellingPrice: req.body.SellingPrice,
      Saving: req.body.Saving,
      Percentage: req.body.Percentage,
      Date: req.body.Date,
      Description: req.body.Description,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/PowerBankGet/:id", (req, res) => {
  const id = req.params.id;
  PowerBankModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/HeadPhoneGet/:id", (req, res) => {
  const id = req.params.id;
  HeadPhoneModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/DeleteHeadPhone/:id", (req, res) => {
  const id = req.params.id;
  HeadPhoneModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

app.put("/HeadPhoneUpdate/:id", (req, res) => {
  const id = req.params.id;
  HeadPhoneModel.findByIdAndUpdate(
    { _id: id },
    {
      Category: req.body.Category,
      BrandName: req.body.BrandName,
      ProductTitle: req.body.ProductTitle,
      ProductImage: req.body.ProductImage,
      Quantity: req.body.Quantity,
      OriginalPrice: req.body.OriginalPrice,
      SellingPrice: req.body.SellingPrice,
      Saving: req.body.Saving,
      Percentage: req.body.Percentage,
      Date: req.body.Date,
      Description: req.body.Description,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/AdminUsersGet/:id", (req, res) => {
  const id = req.params.id;
  EmployeeModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/DeleteAdminUser/:id", (req, res) => {
  const id = req.params.id;
  EmployeeModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

app.put("/AdminUsersUpdate/:id", (req, res) => {
  const id = req.params.id;
  EmployeeModel.findByIdAndUpdate(
    { _id: id },
    {
      Username: req.body.Username,
      Number: req.body.Number,
      Password: req.body.Password,
      mail: req.body.mail,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/ClientPgGet/:id", (req, res) => {
  const id = req.params.id;
  ClientLoginPgModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/DeleteClientLoginPg/:id", (req, res) => {
  const id = req.params.id;
  ClientLoginPgModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

app.put("/ClientLoginPgUpdate/:id", (req, res) => {
  const id = req.params.id;
  ClientLoginPgModel.findByIdAndUpdate(
    { _id: id },
    {
      Username: req.body.Username,
      Number: req.body.Number,
      Password: req.body.Password,
      Address: req.body.Address,
      email: req.body.email,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});

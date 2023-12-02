const mongoose = require("mongoose");

const USBcableSchema = new mongoose.Schema({
  Category: String,
  BrandName: String,
  ProductTitle: String,
  ProductImage: String,
  Quantity: String,
  OriginalPrice: String,
  SellingPrice: String,
  Saving: String,
  Percentage: String,
  Date: String,
  Description: String,
});

const USBcableModel = mongoose.model("usbcable", USBcableSchema);
module.exports = USBcableModel;

const mongoose = require("mongoose");

const HeadPhoneSchema = new mongoose.Schema({
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

const HeadPhoneModel = mongoose.model("headphone", HeadPhoneSchema);
module.exports = HeadPhoneModel;

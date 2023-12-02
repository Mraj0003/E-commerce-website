const mongoose = require("mongoose");

const MobilePhoneSchema = new mongoose.Schema({
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

const MobileCollectionModel = mongoose.model("mobilephones", MobilePhoneSchema); // Changed model name to "Product"
module.exports = MobileCollectionModel;

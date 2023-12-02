const mongoose = require("mongoose");

const MobileCoverSchema = new mongoose.Schema({
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

const MobileCoverModel = mongoose.model("mobilecovers", MobileCoverSchema);
module.exports = MobileCoverModel;

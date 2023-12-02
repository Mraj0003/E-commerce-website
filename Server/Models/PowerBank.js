const mongoose = require("mongoose");

const PowerBankSchema = new mongoose.Schema({
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

const PowerBankModel = mongoose.model("powerbank", PowerBankSchema);
module.exports = PowerBankModel;

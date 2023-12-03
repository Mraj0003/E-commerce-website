const mongoose = require("mongoose");

const SmartSwitchSchema = new mongoose.Schema({
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

const SmartSwitchModel = mongoose.model("smartswitch", SmartSwitchSchema);
module.exports = SmartSwitchModel;

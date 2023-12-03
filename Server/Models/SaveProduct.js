const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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

const ProductModel = mongoose.model("Product", ProductSchema); // Changed model name to "Product"
module.exports = ProductModel;

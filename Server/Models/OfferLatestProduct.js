const mongoose = require("mongoose");

const UploadImageSchema = new mongoose.Schema({
  images: String,
});

const UploadImageModel = mongoose.model(
  "OfferLatestProduct",
  UploadImageSchema
);
module.exports = UploadImageModel;

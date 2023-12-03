const mongoose = require("mongoose");

const ClientLoginPgSchema = new mongoose.Schema({
  Username: String,
  Number: String,
  Password: String,
  Address: String,
  email: String,
});

const ClientLoginPgModel = mongoose.model("ClientLoginPg", ClientLoginPgSchema);
module.exports = ClientLoginPgModel;

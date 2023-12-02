const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  Username: String,
  Number: String,
  Password: String,
  mail: String,
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);
module.exports = EmployeeModel;

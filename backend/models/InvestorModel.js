const mongoose = require("../connection");

const schema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  contact: Number,
  age: Number,
  password: String,
  educationQualification: String,
  linkedInProfile: String,
  socialMediaHandle: String,
  description: String,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("investormodel", schema);

module.exports = model;

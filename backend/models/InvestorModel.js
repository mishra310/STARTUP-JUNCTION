const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
  bio: String,
  age: Number,
  avatar: String,
  EducationQualification: String,
  LinkedInProfile: String,
  socialMediaHandle: String,
  description: String,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("investormodel", schema);

module.exports = model;

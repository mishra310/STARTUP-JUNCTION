const mongoose = require("../connection");

const schema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  contact: Number,
  description: String,
  brochure: String,
  avatar: String,
  password: String,
  Startedon: Number,
  AmountNeeded: Number,
  Reason: String,
  socialMediaHandle: String,
  website: String,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("startupmodel", schema);

module.exports = model;

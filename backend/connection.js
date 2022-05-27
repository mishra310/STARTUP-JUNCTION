const mongoose = require("mongoose");

const url =
  "mongodb+srv://Akkian9918:Arudev12345@cluster0.4lnvh.mongodb.net/StartupMuneem?retryWrites=true&w=majority";

// asynchronous function
// returns promise
mongoose
  .connect(url)
  .then(() => {
    console.log("sucessfully connected");
  }) // when result is successfull
  .catch((err) => {
    console.error(err);
  }); // when there is some error

module.exports = mongoose;

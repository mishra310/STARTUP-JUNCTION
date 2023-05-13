const mongoose = require("mongoose");

const url =
  "mongodb+srv://mishra310:Saurav123@cluster0.rml5zxc.mongodb.net/StartupJunction?retryWrites=true&w=majority";

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

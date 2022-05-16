const mongoose = require("mongoose");

const url =
  "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mernmttf1230?retryWrites=true&w=majority";

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
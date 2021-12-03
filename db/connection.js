const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://ravi:ravi@cluster1.sl185.mongodb.net/users1")
  .then(() => {
    console.log("Connection is successful");
  })
  .catch(() => {
    console.log("error");
  });

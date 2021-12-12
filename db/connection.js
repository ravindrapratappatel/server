const mongoose = require("mongoose");

mongoose
  .connect(url)
  .then(() => {
    console.log("Connection is successful");
  })
  .catch(() => {
    console.log("error");
  });

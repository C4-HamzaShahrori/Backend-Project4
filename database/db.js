const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mongo:D9SusPbafxBTtVPt@finddoctor.u989z.mongodb.net/test").then(
  () => {
    console.log("DB READY TO USE ..");
  },
  (err) => {
    throw err;
  }
);

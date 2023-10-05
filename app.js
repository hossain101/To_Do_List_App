const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
require("dotenv").config();
const listDate = require(__dirname + "/todayDate.js");
const database = require(__dirname + "/database.js");
const Task = require(__dirname + "/models/Task.js");

// configuration ===============================================================

app.set("view engine", "ejs"); // set up ejs for templating

app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms
app.use(express.static(__dirname + "/public")); // set the static files location /public/img will be /img for users



// launch ======================================================================
app.listen(process.env.PORT || 3000, function () {
  if (process.env.PORT) {
    console.log("Server started on port " + process.env.PORT);
  } else {
    console.log("Server started on port 3000");
  }
});

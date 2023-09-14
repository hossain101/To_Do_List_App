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

var titleDay = listDate.titleDay; //get today's date
console.log(titleDay);

var descriptions = []; // array of items
var addedDates = []; // array of dates
// array of ids

app.get("/", async function (req, res) {
  await Task.find().then((tasks) => {
    tasks.forEach((task) => {
      descriptions.push(task.taskDescription);
      addedDates.push(task.addedDate);
    });
  });

  res.render("list", {
    kindOfDay: titleDay,
    newListItems: descriptions,
    addedDate: addedDates,
  });
  descriptions = [];
  addedDates = [];

  //res.render("list", { kindOfDay: day, newListItems: items }); // Since, the list.ejs file is in the views folder, the render function will automatically look for the file in the views folder.
});

app.post("/", function (req, res) {
  console.log(req.body.newItem);

  const task = new Task({
    taskDescription: req.body.newItem,
    addedDate: listDate.addedDate,
  });
  task.save();

  res.redirect("/");
});

// launch ======================================================================
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

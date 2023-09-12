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

var day = listDate.day; //get today's date

var descriptions = []; // array of items
var ids = []; // array of ids

app.get("/", async function (req, res) {
  await Task.find().then((tasks) => {

    tasks.forEach((task) => {
      if(!ids.includes(task._id)){
        descriptions.push(task.taskDescription);
        console.log(ids.includes(task._id));
        ids.push(task._id);

        console.log(ids.includes(task._id));
        
      }
      else{
        console.log("Duplicate");
      }
      
    });
  });

  res.render("list", { kindOfDay: day, newListItems: descriptions });
    descriptions = [];
    ids = [];
  
  //res.render("list", { kindOfDay: day, newListItems: items }); // Since, the list.ejs file is in the views folder, the render function will automatically look for the file in the views folder.
});

app.post("/", function (req, res) {
  console.log(req.body.newItem);

  const task = new Task({
    taskDescription: req.body.newItem,
  });
  task.save();

  res.redirect("/");
});

// launch ======================================================================
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

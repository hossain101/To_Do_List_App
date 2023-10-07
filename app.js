const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
require("dotenv").config();
const listDate = require(__dirname + "/todayDate.js");
const database = require(__dirname + "/database.js");


// configuration ===============================================================

app.set("view engine", "ejs"); // set up ejs for templating

app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms
app.use(express.static(__dirname + "/public")); // set the static files location /public/img will be /img for users

var titleDay = listDate.titleDay; //get today's date
console.log(titleDay);

var descriptions = []; // array of items
var deleteDecsriptions = []; // array of items
var taskId = []; // array of ids
var addedDates = []; // array of dates
// array of ids

app.get("/", async function (req, res) {
  await Task.find().then((tasks) => {
    tasks.forEach((task) => {
      descriptions.push(task.taskDescription);
      addedDates.push(task.addedDate);
      taskId.push(task._id);
    });
  });

  res.render("list", {
    kindOfDay: titleDay,
    newListItems: descriptions,
    addedDate: addedDates,
    taskId: taskId,
    
  });
  descriptions = [];
  addedDates = [];

 
});

app.post("/", function (req, res) {
  console.log(req.body.newItem);

  //saving task to database
  const task = new Task({
    taskDescription: req.body.newItem,
    addedDate: listDate.addedDate,
  });
  task.save();

  res.redirect("/");
}); 


//delete task

app.post('/delete', (req, res) => {
  // Access the taskId from the request body
  const taskId = req.body.delete_btn;

  
  console.log('taskId:', taskId);

  //Delete the task from the database

  Task.deleteOne({ _id: taskId}, ).then(() => {
    console.log("Deleted");
    res.redirect("/");
  });


});



// launch ======================================================================
app.listen(process.env.PORT || 3000, function () {
  if (process.env.PORT) {
    console.log("Server started on port " + process.env.PORT);
  } else {
    console.log("Server started on port 3000");
  }
});

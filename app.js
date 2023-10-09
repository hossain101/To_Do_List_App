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
var deleteDecsriptions = []; // array of items
var taskId = []; // array of ids
var addedDates = []; // array of dates
var completed = [];
// array of ids

app.get("/", async function (req, res) {
  await Task.find().then((tasks) => {
    tasks.forEach((task) => {
      descriptions.push(task.taskDescription);
      addedDates.push(task.addedDate);
      taskId.push(task._id);
      completed.push(task.completed);
    });
  });

  res.render("list", {
    kindOfDay: titleDay,
    newListItems: descriptions,
    addedDate: addedDates,
    taskId: taskId,
    isComplete: completed,
    
  });
  descriptions = [];
  addedDates = [];
  taskId = [];
  completed = [];


 
});

app.post("/", async function (req, res) {
  console.log(req.body.newItem);

  //saving task to database
  const task = new Task({
    taskDescription: req.body.newItem,
    addedDate: listDate.addedDate,
  });
  await task.save();

  res.redirect("/");
}); 


//delete task

app.post('/delete', async (req, res) => {
  // Access the taskId from the request body
  const taskId = req.body.delete_btn;

  
  console.log('taskId:', taskId);

  //Delete the task from the database

   await Task.deleteOne({ _id: taskId}, ).then(() => {
    console.log("Deleted");
    res.redirect("/");
  });


});


// app.post("/update-task/:taskId", (req, res) => {
//   const taskId = req.params.taskId;
//   const newText = req.body.updatedText; // Assuming you have an input field with name="updatedText" in your form

//   // Update the document in the database
//   YourModel.findByIdAndUpdate(
//     taskId,
//     { taskDescription: newText },
//     { new: true },
//     (err, updatedTask) => {
//       if (err) {
//         console.error(err);
//         // Handle the error and respond accordingly
//         res.status(500).send("Error updating the task.");
//       } else {
//         // Redirect or respond as needed after updating the task
//         res.redirect("/"); // Redirect to the home page or your task list page
//       }
//     }
//   );
// });

app.post('/check', async (req, res) => {
  // Access the taskId from the request body
  const taskId = req.body.checkbox_id  ;

  // Find the task in the database and update the completed field

  await Task.findOne({_id: taskId}).then((task) => {
    task.completed = !task.completed;
    task.save();
    res.redirect("/");
  });


  

  // await Task.findOneAndUpdate({_id: taskId}, {$inc:{sold: !this.sold}}).then(() => {
  //   console.log("Updated");
    
  // });

  // await Task.findOneAndUpdate({_id: taskId}, {completed: !this.completed}).then(() => {

  //   console.log("Updated");
  //   res.redirect("/");
  // }
  // );
  
 // console.log('taskId:', taskId);

  //Delete the task from the database




});




// launch ======================================================================
app.listen(process.env.PORT || 3000, function () {
  if (process.env.PORT) {
    console.log("Server started on port " + process.env.PORT);
  } else {
    console.log("Server started on port 3000");
  }
});

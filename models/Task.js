const { MongoClient } = require("mongodb");

const mongoose = require("mongoose");
const database = require(__dirname + "/../database.js");

require("dotenv").config();

const taskSchema = new mongoose.Schema({
  taskDescription: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

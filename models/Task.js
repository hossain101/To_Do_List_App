const { MongoClient } = require("mongodb");

const mongoose = require("mongoose");
const database = require(__dirname + "/../database.js");

require("dotenv").config();

const taskSchema = new mongoose.Schema({
  taskDescription: {
    type: String,
    required: true,
  },
  addedDate:{
    type: String,
    

  },
  dueDate:{
    type: Date,
    
    
  },
    completed:{
    type: Boolean,
    default: false
    },

    priority:{
        type: String,
        default: "low"
    }
});

const Task = mongoose.model("Task", taskSchema);



module.exports = Task;

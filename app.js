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

// itemsSchema ====================================================================

const itemsSchema = {
  name: String,
};

// // Item model ====================================================================

const Item = mongoose.model("Item", itemsSchema);

// // Item instances ====================================================================

const item1 = new Item({
  name: "Welcome to your todolist!",
});

const item2 = new Item({
  name: "Hit the + button to add a new item.",
});

const item3 = new Item({
  name: "<-- Hit this to delete an item.",
});

const defaultItems = [item1, item2, item3];

// // insertMany ====================================================================

async function insertMany() {
  await Item.insertMany(defaultItems);
}

insertMany();

//get date and day of the week from todayDate.js module ===================================

var day = listDate.day; //get today's date
var items = [];

// routes ======================================================================
app.get("/", function (req, res) {
  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  console.log(req.body.newItem);
  items.push(req.body.newItem);
  res.redirect("/");
});

// launch ======================================================================
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

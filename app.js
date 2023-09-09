const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs"); // set up ejs for templating

app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms
app.use(express.static(__dirname + "/public")); // set the static files location /public/img will be /img for users

var today = new Date(); //get today's date
var items  = []; 
var options = {
  weakDay: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
};

var day = today.toLocaleDateString("en-US", options); //get today's date in the format of "Monday, September 13"

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

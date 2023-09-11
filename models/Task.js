const { MongoClient } = require("mongodb");

const mongoose = require("mongoose");
const database = require(__dirname + "/../database.js");

require("dotenv").config();

const USERNAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;

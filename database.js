const mongoose = require("mongoose");
require("dotenv").config();

const USERNAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;


const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@tasklist.ljckuad.mongodb.net/tasks?retryWrites=true&w=majority`;



class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("Database connection successful");
            })
            .catch(err => {
                console.error("Database connection error");
            })
    }
}

module.exports = new Database();
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");

require("dotenv").config();

const USERNAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@tasklist.ljckuad.mongodb.net/?retryWrites=true&w=majority`;





class Database{
    constructor(){
        this._connect();
    }
    

 async _connect(){
        try{
            await mongoose.connect(uri);
            console.log("Database connection successful");
        }catch(err){
            console.log("Database connection failed");

            console.log(err);

        }
        
    }

    async _getClient(){
        mongoose.connection.getClient();
    }
}

module.exports = new Database();



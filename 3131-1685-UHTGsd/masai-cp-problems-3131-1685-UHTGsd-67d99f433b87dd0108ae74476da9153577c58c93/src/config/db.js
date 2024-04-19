// mongoDB connection setup
const mongoose = require('mongoose');

const connection=mongoose.connect("mongodb+srv://sachin:chavan@cluster0.1kuxcjb.mongodb.net/todoApp?retryWrites=true&w=majority&appName=Cluster0")

module.exports = connection;


// use mongoDB url here don't keep in .env

// create server setup here
const express = require('express');
const connection=require("./config/db")
const app = express();
const todoRoutes = require('./routes/todosRoutes');
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/', todoRoutes);

app.listen(PORT, async() => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


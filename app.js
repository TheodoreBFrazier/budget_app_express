const express = require("express");
//Configuration
const app = express();
const cors = require("cors");
const expensesController = require("./Controllers/expensesController.js");


//adding MIDDLEWARE
app.use(cors())
app.use(express.json()) //----> to parse incoming JSON


app.get("/", (request, response) => {
    response.send(`
    <h1>Welcome to the budgeting app!! 😮</h1>`);
})

app.use("/expenses", expensesController) //now all URLs start with "transactions"

//404 Page 

app.get("*", (request, response) => {
   response.status(404).json({ error: "Page not found"});
})

module.exports = app;
const express = require("express");

//Configuration
const app = express();


// Using expenses as base of the routes
const expensesController = require("./controllers/Controller.js");

//adding MIDDLEWARE

app.use(express.json()) //----> to parse incoming JSON


app.get("/", (request, response) => {
    response.send(`
    <h1>Welcome to the budgeting app!! 😮</h1>`);
})

app.use("/transactions", expensesController) //now all URLs start with "transactions"

//404 Page 

app.get("*", (request, response) => {
   response.status(404).json({ error: "Page not found"});
})



module.exports = app;
const express = require("express");

//Configuration
const app = express();

// Using expenses as base of the routes
const expensesController = require("./Controllers/expensesController.js");


//adding MIDDLEWARE
app.use(cors())
app.use(express.json()) //----> to parse incoming JSON


app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
  });



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
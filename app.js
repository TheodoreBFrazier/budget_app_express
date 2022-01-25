const express = require("express");

// Make index of all the expenses
const expenses = require("./models/expenses.js")

//Configuration
const app = express();

console.log(express)

// Using expenses as base of the routes

const expensesController = require("./Controllers/Controller.js");
app.use("/expenses", expensesController);

//404 Page 

app.get("*", (request, response) => {
    response.status(404).json({ error: "Page not found"});
})

//Home page

app.get("/", (request, response) => {
    response.send(`
    <h1>Welcome to the budgeting app!! 😮</h1>`);
})

//Route for index 

app.get("/transactions", (request, response) => {
    response.send(expenses); //changing to req.params
})

app.get("/transactions/:id", (request, response) => {
    const { id } = request.params;
    if (expenses[id]) {
        response.send(expenses[id]);
    } else {
        response.send("Error no expense at index: 🤦🏾‍♂️ " + id ) ;
    }
})






//Route for new expense

app.get("/new", (request, response) => {
    response.send("Add a new expense");
})

//Route for show 

app.get("/show", (request, response) => {
    response.send("Show expenses!");
})



app.get("/edit", (request, response) => {
    response.send("Edit function here");
})

// App listen function 

//app.listen(7777, () => {
//console.log("Listening for request on port 7777 😀😂");
//})



// EXPORTING APP

module.exports = app;
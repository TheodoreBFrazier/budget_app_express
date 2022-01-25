const express = require("express");
const expensesRoute = express.Router();
const expenseArray = require("../models/expenses.js");

// Expenses
expensesRoute.get("/", (request, response) => {
    response.json(expenseArray) //We are sending json instead of string, so use res.json
})

//Route for index 


expensesRoute.get("/transactions/:id", (request, response) => {
    const { id } = request.params;
    if (expenseArray[id]) {
        response.send(expenseArray[id]);
    } else {
        response.send("Error no expense at index: 🤦🏾‍♂️ " + id ) ;
    }
})

module.exports = expensesRoute;
const { response } = require("express");
const express = require("express");
const res = require("express/lib/response");
const expensesRoute = express.Router();
const expenseArray = require("../models/expenses.js");

// Expenses
expensesRoute.get("/", (request, response) => {
    response.json(expenseArray) //We are sending json instead of string, so use res.json
})

//Route for index ie. transactions/1

expensesRoute.get("/:id", (request, response) => {
    const { id } = request.params;
    if (expenseArray[id]) {
        response.send(expenseArray[id]);
    } else {
        response.send("Error no expense at index: 🤦🏾‍♂️ " + id);
    }
})

//Adding MIDDLEWARE

//Route to create a NEW transaction

expensesRoute.post("/", (request, response) => { //post allows us to pass date through response body
    expenseArray.push(request.body); //expenseArray is stored in memory - pushing HTML for data into it
    response.json(expenseArray[expenseArray.length - 1]);
})

//Route to DELETE a transaction @ index

expensesRoute.delete("/:id", (request, response) => {
        const removedExpense = expenseArray.splice(request.params.arrayIndex, 1);
        response.status(200).json(removedExpense); //What does the 200 mean? 
})

module.exports = expensesRoute;
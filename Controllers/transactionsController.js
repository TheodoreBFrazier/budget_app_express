const express = require("express");
const transactionsRoutes = express.Router();
const transactionArray = require("../models/transactions.js");

// Expenses
transactionsRoutes.get("/", (request, response) => {
    response.json(transactionArray) //We are sending json instead of string, so use res.json
})

//Route for index ie. transactions/1

transactionsRoutes.get("/:index", (request, response) => {
    const { index } = request.params;
    if (transactionArray[index]) {
        response.send(transactionArray[index]);
    } else {
        response.send("Error no expense at index: 🤦🏾‍♂️ " + index);
    }
})

//Adding MIDDLEWARE

//Route to create a NEW transaction

transactionsRoutes.post("/", (request, response) => { //post allows us to pass date through response body
    expenseArray.push(request.body); //expenseArray is stored in memory - pushing HTML for data into it
    response.json(expenseArray[expenseArray.length - 1]);
})

//Route to DELETE a transaction @ index

transactionsRoutes.delete("/:index", (request, response) => {
    const removedExpense = expenseArray.splice(request.params.arrayIndex, 1);
    response.status(200).json(removedExpense); //What does the 200 mean? 
})

//Route to Update

transactionsRoutes.put("/:index", (request, response) => {
    expenseArray[request.params.arrayIndex] = request.body; //We use req.body to the value of array position we selected
    response.status(200).json(expenseArray[request.params.arrayIndex]);
});

//API is built!!! 🥳🥳

module.exports = route;


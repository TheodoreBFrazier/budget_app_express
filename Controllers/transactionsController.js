const { response } = require("express");
const express = require("express");
const route = express.Router();
const transactionArray = require("../models/transactions.js");

// Expenses
route.get("/", (request, response) => {
    response.json(transactionArray) //We are sending json instead of string, so use res.json
})

//Route for index ie. transactions/1

route.get("/:id", (request, response) => {
    const { id } = request.params;
    if (transactionArray[id]) {
        response.send(transactionArray[id]);
    } else {
        response.send("Error no expense at index: 🤦🏾‍♂️ " + id);
    }
})

//Adding MIDDLEWARE

//Route to create a NEW transaction

route.post("/", (request, response) => { //post allows us to pass date through response body
    expenseArray.push(request.body); //expenseArray is stored in memory - pushing HTML for data into it
    response.json(expenseArray[expenseArray.length - 1]);
})

//Route to DELETE a transaction @ index

route.delete("/:id", (request, response) => {
    const removedExpense = expenseArray.splice(request.params.arrayIndex, 1);
    response.status(200).json(removedExpense); //What does the 200 mean? 
})

//Route to Update

route.put("/:id", (request, response) => {
    expenseArray[request.params.arrayIndex] = request.body; //We use req.body to the value of array position we selected
    response.status(200).json(expenseArray[request.params.arrayIndex]);
});

//API is built!!! 🥳🥳

module.exports = route;


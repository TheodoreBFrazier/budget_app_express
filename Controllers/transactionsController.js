const express = require("express");
const transactionsRoutes = express.Router();
const transactionArray = require("../models/transactions.js");

// Expenses
transactionsRoutes.get("/", (request, response) => {
    response.json(transactionArray) //We are sending json instead of string, so use res.json
})

//Route for index ie. transactions/1

transactionsRoutes.get("/:index", (request, response) => { //GET request to  retrieve a single index 
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
    transactionArray.push(request.body); //expenseArray is stored in memory - pushing HTML for data into it
    response.json(transactionArray[transactionArray.length - 1]);
})

//Route to DELETE a transaction @ index

transactionsRoutes.delete("/:index", (request, response) => {
    const { index } = request.params;

    if (transactionArray[index]) {
        let removedExpense = transactionArray.splice(request.params.arrayIndex, 1);
        response.json(removedExpense[0]);
    } else {
        response.status(404).json({ error: "Not found" });
    }

})

//Route to Update

transactionsRoutes.put("/:index", (request, response) => {
    let { index } = request.params;

    if (!transactionArray[index]) {
        response.status(422).json({
            error: "Not found"
        })
    }

    let { item_name, amount, date, from, category } = request.body;
    if (item_name && amount && date && from && category) {
        transactionArray[index] = {
            item_name, amount, date, from, category
        };
        response.json(transactionArray[index]);
    } else {
        response.status(422).json({
            error: "Please provide all fields"
        })
    }
})



module.exports = transactionsRoutes;


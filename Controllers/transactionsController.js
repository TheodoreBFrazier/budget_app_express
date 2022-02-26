const express = require("express");
const transactionsRoutes = express.Router();
const transactionArray = require("../models/transactions.js");

// Expenses
transactionsRoutes.get("/", (request, response) => {
    response.json(transactionArray) //We are sending json instead of string, so use res.json
})

//Route for index ie. transactions/1

transactionsRoutes.get("/:id", (request, response) => { //GET request to  retrieve a single index 
    const { id } = request.params;
    if (transactionArray[id]) {
        response.send(transactionArray[id]);
    } else {
        response.send("Error no expense at index: 🤦🏾‍♂️ " + id);
    }
})

//Adding MIDDLEWARE

//Route to create a NEW transaction

transactionsRoutes.post("/", (request, response) => { //post allows us to pass date through response body
    transactionArray.push(request.body); //expenseArray is stored in memory - pushing HTML for data into it
    response.json(transactionArray[transactionArray.length - 1]);
})

//Route to DELETE a transaction @ index

transactionsRoutes.delete("/:id", (request, response) => {
    const { id } = request.params;

    if (transactionArray[id]) {
        let removedExpense = transactionArray.splice(request.params.arrayIndex, id);
        response.json(removedExpense[0]);
    } else {
        response.status(404).json({ error: "Not found" });
    }

})

//Route to Update

transactionsRoutes.put("/:id", (request, response) => {
    let { id } = request.params;

    if (!transactionArray[id]) {
        response.status(422).json({
            error: "Not found"
        })
    }

    let { item_name, amount, date, from, category } = request.body;
    if (item_name && amount && date && from && category) {
        transactionArray[id] = {
            item_name, amount, date, from, category
        };
        response.json(transactionArray[id]);
    } else {
        response.status(422).json({
            error: "Please provide all fields"
        })
    }
})



module.exports = transactionsRoutes;


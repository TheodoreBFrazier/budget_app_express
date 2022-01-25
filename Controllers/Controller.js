const express = require("express");
const expensesRoute = express.Router();
const expenseArray = require("../models/expenses.js");

expensesRoute.get("/", (request, response) => {
    response.json(expenseArray) //We are sending json instead of string, so use res.json
})

module.exports = expensesRoute;
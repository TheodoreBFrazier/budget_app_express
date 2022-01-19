const { response } = require("express");
const express = require("express");

const app = express();

console.log(express)

app.get("/", (request, response) => {
    response.send("Budgeting app!")
})

app.get("/index", (request, response) => {
    response.send("Here is the index.")
})

app.get("/new", (request, response) => {
    response.send("Add a new expense")
})

app.get("show", (request, response) => {
    response.send("Show expenses!")
})


app.get("edit")

// App listen function 

app.listen(7777, () => {
    console.log("Listening for request on port 7777");
})
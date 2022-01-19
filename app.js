const express = require("express");

const app = express();

console.log(express)


app.get("/", (request, response) => {
    response.send("Welcome to the budgeting app!")
})

//Route for index 

app.get("/index", (request, response) => {
    response.send("Here is the index.")
})

//Route for new expense

app.get("/new", (request, response) => {
    response.send("Add a new expense")
})

//Route for show 

app.get("show", (request, response) => {
    response.send("Show expenses!")
})



app.get("edit", (request, response) => {
    response.send("Edit function here")
})

// App listen function 

//app.listen(7777, () => {
    //console.log("Listening for request on port 7777");
//})

app.listen(7777)

// EXPORTING APP

module.exports = app;
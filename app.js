const { response } = require("express");
const express = require("express");

const app = express();

console.log(express)

app.get("/", (request, response) => {
    response.send("Hello world")
})

// App listen function 

app.listen(7777, () => {
    console.log("Listening for request on port 7777");
})
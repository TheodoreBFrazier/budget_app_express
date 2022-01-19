const { response } = require("express");
const express = require("express");

const app = express();

console.log(express)

app.get("/", (request, reponse) => {
    response.send("Hello world")
})

//

app.listen(7777)
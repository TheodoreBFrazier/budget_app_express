// CREATION OF THE SERVER

// CREATE DEPENDENCIES 

const app = require("./app.js");

// CONFIGURE dotenv

require("dotenv").config();
const PORT = process.env.PORT;

// LISTENER

app.listen(PORT, () => {
    console.log(` Now listening on port ${PORT} 😀😀 Yay!  `);
})
"use strict"

// Import express
const express = require("express");
// Import path
const path = require("path");
// Create a server
const app = express();
// Create a PORT
const PORT = process.env.PORT || 3003;
// Import morgan 
const logger = require("morgan");
// Use morgan as logger
app.use(logger("dev"));
// Ask app to use public dir for static files
app.use(express.static(path.join(__dirname,"/public")));
// Other code to follow



// Start the server
app.listen(PORT,()=>{
console.log(`Listening on PORT: ${PORT}`);
});
// Import express
const express = require("express");
// Create a server
const app = express();
// Create a PORT
const PORT = process.env.PORT || 3003;
// Import morgan 
const logger = require("morgan");
// Use morgan as logger
app.use(logger("dev"));
// Ask app to use public dir for static files
app.use(express.static("/public"));
"use strict"

// Import express
const express = require("express");
// Import path
const path = require("path");
// Import morgan 
const logger = require("morgan");
// fs - pam added
const fs = require('fs');
// Create a server
const app = express();
// Create a PORT
const PORT = process.env.PORT || 3003;
// Use morgan as logger
app.use(logger("dev"));
// Ask app to use public dir for static files
app.use(express.static(path.join(__dirname,"/public")));
// tell Express where to find our templates (views)
app.set("views", path.join(__dirname, "views"));
// set the view engine to ejs -pam added
app.set("view engine", "ejs");

// Import api router
const apiRouter = require("./routers/apiRouter")
// Use api router for /api routes
app.use("/api",apiRouter);
// use profile router - pam added
const profilesRouter = require("./routers/profilesRouter");
// Use profilesRouter for /profiles routes -pam added
app.use("/profiles", profilesRouter);
// Start the server
app.listen(PORT,()=>{
console.log(`Listening on PORT: ${PORT}`);
});
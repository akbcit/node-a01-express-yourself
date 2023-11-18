"use strict"

// Import express
const express = require("express");
// Import EJS layouts
const expressLayouts = require("express-ejs-layouts");
// Import body parser
const bodyParser = require("body-parser");
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
// Ask app to parse any URL encoded data that is sent with requests
app.use(bodyParser.urlencoded({ extended: true}));
// Ask app to use public dir for static files
app.use(express.static(path.join(__dirname,"/public")));

// Set the view engine to EJS
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));


// Import api router
const apiRouter = require("./routers/apiRouter");
// Import profiles router
const profilesRouter = require("./routers/indexRouter");
// Import index router
const indexRouter = require("./routers/indexRouter");

// Use api router for /api routes
app.use("/api",apiRouter);
// Use profiles router for /profiles routes
app.use("/profiles", profilesRouter);
// Use index router for /index routes
app.use("/", indexRouter);

app.use((req, res, next) => {
    res.status(404).send("Not Found");
});

// Start the server
app.listen(PORT,()=>{
console.log(`Listening on PORT: ${PORT}`);
});
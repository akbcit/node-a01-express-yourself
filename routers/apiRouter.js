"use strict"
// Import express
const express = require("express");
// Initialise api router
const apiRouter = express.Router();
// Get json data
const jsonData = require("../data/profiles.json");
// api for all profiles
apiRouter.get("/profiles",(req,res)=>{
    // Render json
    res.json(jsonData);
});
// apis for individual profiles
for(const profile of jsonData){
// Create an api route and feed object in json form
const id = profile.id;
apiRouter.get(`/profiles/${id}`,(req,res)=>{
// Render json object
res.json(profile);
});
}
// Export apiRouter
module.exports = apiRouter;
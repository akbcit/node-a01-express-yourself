"use strict"

const express = require("express");
const profilesRouter = express.Router();
const fs = require('fs');

// Define a route to render the list of profiles
profilesRouter.get("/", (req, res) => {
    try {
      // Read data from the profiles JSON file
      const profilesData = JSON.parse(fs.readFileSync("./data/profiles.json", "utf8"));
      // Render the profiles template with the list of profiles
      res.render("profiles", { profiles: profilesData });
    } catch (error) {
      console.error('Error reading or parsing profiles.json:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Define a route to render the individual profile EJS template
  profilesRouter.get("/:id", (req, res) => {
    try {
      const profileId = req.params.id;
      // Read data from the profiles JSON file
      const profilesData = JSON.parse(fs.readFileSync("./data/profiles.json", "utf8"));
      // Find the profile with the specified ID
      const profile = profilesData.find(p => p.id === profileId);
      // Render the individual profile template
      res.render("profile", { profile });
    } catch (error) {
      console.error('Error reading or parsing profiles.json:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = profilesRouter;
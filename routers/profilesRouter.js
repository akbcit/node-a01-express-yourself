"use strict"

const express = require("express");
const profilesRouter = express.Router();
const fs = require('fs');
// Import package reader
const packageReader = require('../packageReader');
const contributors = packageReader.getContributors();

// Define a route to render the list of profiles
profilesRouter.get("/", (req, res) => {
  try {
      // Read data from the profiles JSON file
      const profilesData = JSON.parse(fs.readFileSync("./data/profiles.json", "utf8"));

      // Use profilesData directly as allProfiles
      const allProfilesData = profilesData;
      console.log('All profiles:', allProfilesData);

      res.render("profiles", { title: "profiles", profiles: profilesData, allProfiles: allProfilesData, contributors: contributors });
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

      const allProfilesData = profilesData;
      // Find the profile with the specified ID
      const profile = profilesData.find(p => p.id === profileId);
      // Render the individual profile template
      res.render("profile", { title:`profile${profileId}`,profile: profile,allProfiles: allProfilesData, contributors:contributors,layout:"layouts/full-width-sidebar" });
    } catch (error) {
      console.error('Error reading or parsing profiles.json:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = profilesRouter;
"use strict"

// Import express
const express = require("express");
// Initialise index router
const indexRouter = express.Router();
// Import package reader
const packageReader = require('../packageReader');

// Home page route
indexRouter.get('/', (req, res) => {
    const contributors = packageReader.getContributors();
    // Display a simple greeting for the home page
    res.render('index', { title: 'Home', message: 'Welcome to our website!', contributors });
});

// About page route
indexRouter.get('/about', (req, res) => {
    const contributors = packageReader.getContributors();
    // Display a simple greeting for the about page
    res.render('about', { title: 'About', message: 'About Us: Not Your Average Express Lane!', contributors });
});

// Contact page route (GET)
indexRouter.get('/contact', (req, res) => {
    const contributors = packageReader.getContributors();
    res.render('contact', { title: 'Contact', submitted: false, contributors });
});

// Contact page route (POST)
indexRouter.post('/contact', (req, res) => {
    const contributors = packageReader.getContributors();
    // Handle form submission
    const formData = req.body;
    // Display a thank you message after form submission
    res.render('contact', { title: 'Contact', submitted: true, message: `Thank you, ${formData.name}!`, contributors });
  });

// Export indexRouter
module.exports = indexRouter;
// DEPENDENCIES
var path = require("path");


// ROUTING
module.exports = function(app) {
  // HTML GET Requests
  app.get("/about.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });
  //Connect the Submit.js javascript file
  app.get("/portfolio.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
  });
  // Connect CSS file
  app.get("assets/css/style.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/css/style.css"));
  });
  // Connect to all images
  app.get("assets/imgs/congruent_pentagon.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/imgs/congruent_pentagon.png"));
  });
  app.get("assets/imgs/burgers.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/imgs/burgers.png"));
  });
  app.get("assets/imgs/congruent_pentagon.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/imgs/congruent_pentagon.png"));
  });
  app.get("assets/imgs/congruent_pentagon.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/imgs/congruent_pentagon.png"));
  });
  app.get("assets/imgs/congruent_pentagon.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/imgs/congruent_pentagon.png"));
  });
  app.get("assets/imgs/congruent_pentagon.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/imgs/congruent_pentagon.png"));
  });
  app.get("assets/imgs/congruent_pentagon.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/imgs/congruent_pentagon.png"));
  });
  app.get("assets/imgs/congruent_pentagon.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/imgs/congruent_pentagon.png"));
  });
  app.get("assets/imgs/congruent_pentagon.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/imgs/congruent_pentagon.png"));
  });
  app.get("assets/imgs/congruent_pentagon.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/imgs/congruent_pentagon.png"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
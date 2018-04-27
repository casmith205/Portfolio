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
  app.get("/assets/css/style.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/css/style.css"));
  });
  // Connect to all images
  app.get("/assets/imgs/congruent_pentagon.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/congruent_pentagon.png"));
  });
  app.get("/assets/imgs/burgers.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/burgers.png"));
  });
  app.get("/assets/imgs/codepen.svg", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/codepen.svg"));
  });
  app.get("/assets/imgs/doghome.jpg", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/doghome.jpg"));
  });
  app.get("/assets/imgs/friendlink.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/friendlink.png"));
  });
  app.get("/assets/imgs/github.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/github.png"));
  });
  app.get("/assets/imgs/github.svg", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/github.svg"));
  });
  app.get("/assets/imgs/home.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/home.png"));
  });
  app.get("/assets/imgs/linked.svg", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/linked.svg"));
  });
  app.get("/assets/imgs/main.jpg", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/main.jpg"));
  });
  app.get("/assets/imgs/tipsy.jpg", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/tipsy.jpg"));
  });
  app.get("/assets/imgs/whirlpool.png", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/imgs/whirlpool.png"));
  });
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
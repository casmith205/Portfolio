// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIGURATION
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTER
require("./routes/html_routes")(app);


// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

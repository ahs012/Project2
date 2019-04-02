// require("dotenv").config();
var express = require("express");
var mysql2 = require("mysql2");
var exphbs = require("express-handlebars");
var sequelize = require("sequelize");
var app = express();
var PORT = process.env.PORT || 8080;
var session = require('express-session');
var ajax = require('ajax');

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//express sessions
app.use(session({ secret: 'krunal', resave: false, saveUninitialized: true, }));

// Routes
// =============================================================
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
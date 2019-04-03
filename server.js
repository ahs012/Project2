// require("dotenv").config();
var express = require("express");
var mysql2 = require("mysql2");
var exphbs = require("express-handlebars");
var sequelize = require("sequelize");
var app = express();
var PORT = process.env.PORT || 8080;
var session = require('express-session');

// Require for IMG Uploader
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

// Set Handlebars as view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory set as Public
app.use(express.static("./public"));

//express sessions
app.use(session({ secret: 'krunal', resave: false, saveUninitialized: true, }));

// Routes
// =============================================================
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

app.get("/upload", function(req, res){
  res.sendFile(path.join(__dirname, "./upload.html"))
});
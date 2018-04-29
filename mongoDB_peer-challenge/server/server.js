//  Server side file
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Assignments = require("../models/assignments");
var index = require("./routes/index");
var assignment = require("./routes/assignment");

var app = express();

//  MongoDB Connection
var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;
app.use(bodyParser.json());

app.use("/", index);
app.use("/assignments", assignment);
app.use(express.static("server/public"));

//  Function: can't connect to MongoDB
MongoDB.on("error", function(err) {
  console.log("mongodb connection error:", err);
}); //  MongoDB.on

//  Function: MongoDB connected
MongoDB.once("open", function(err) {
  console.log("mongodb connection open!");
}); //  MongoDB.once

//  Server Listener
var server = app.listen(3000, function(request, response) {
  var port = server.address().port;
  console.log("Listening on port", port);
}); //  app.listen

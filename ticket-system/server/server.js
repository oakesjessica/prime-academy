var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var index = require("./routes/index");
var tickets = require("./routes/tickets");
var app = express();

//******************** Global Config ********************//
app.use(bodyParser.json());
app.use(express.static("server/public"));

//******************** MongoDB ********************//

var mongoURI = "mongodb://localhost/ticketSystem";
var mongoDB = mongoose.connect(mongoURI).connection;

//  MongoDB connection Issue
mongoDB.on("error", function(err) {
  console.log("mongoDB connection error:", err);
}); //  MongoDB.on("error")

//  MongoDB connected
mongoDB.once("open", function(err) {
  console.log("mongoDB connection open");
}); //  MongoDB.once("open");

//******************** Routers ********************//
app.use("/", index);
app.use("/tickets", tickets);

//******************** Server Listener ********************//
var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
}); //  Server Listener

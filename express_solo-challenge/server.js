var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var balance = require("./modules/balance.js");
var app = express();
var port = 3000;
var min = 100;
var max = 1000000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

//  Set basic route to serve index.html from / path
app.get("/", function(req, res, next) {
  res.sendFile(__dirname + "/public/index.html");
});

//  Express static
app.use(express.static("public"));

//  GET request to /balance that sends a random account balance to client
app.get("/balance", function(req, res, next) {
  var acct = balance.acctDisplay(balance.acctBalance(min, max));
  res.send(acct);
});

//  Listener
app.listen(port, function() {
  console.log("Listening for requests on port", port);
});

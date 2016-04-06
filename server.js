var express = require("express");
var moment = require("moment");
var app = express();

var date = moment().format("Do MMMM YYYY");

app.get("/", function(req, res) {
  res.send("Hello World!\n" + "Today's date is " + date);
});

//  Listener
var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
});

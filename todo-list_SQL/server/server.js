var express = require("express");
var index = require("./routes/index");
var bodyParser = require("body-parser");
var app = express();

//******************************************
//  ********* GLOBAL CONFIG  ************
//******************************************
app.use(bodyParser.json());
app.use(express.static("server/public"));

//******************************************
//      ********* ROUTERS  ************
//******************************************
app.use("/", index);

//******************************************
//      ********* SERVER  ************
//******************************************

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
});

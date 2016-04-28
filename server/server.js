var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var index = require("./routes/index");
var heroes = require("./routes/heroes");
var app = express();

/*************************************************************
//      Configs
*************************************************************/
app.use(express.static("server/public"));
app.use(bodyParser.json());

//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//
//    Mongoose
//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//
var mongoURI = "mongodb://localhost/heroes";
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on("error", function(err) {
  console.log("MongoDB connection error:", err);
}); //  error

mongoDB.once("open", function(err) {
  console.log("MongoDB connection open");
}); //  open

//************************************************************
//      Routes
//************************************************************
app.use("/", index);
app.use("/heroes", heroes);

//////////////////////////////////////////////////////////////
//      Server Listener
//////////////////////////////////////////////////////////////
var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port, ". Press Ctrl-C to exit.");
});

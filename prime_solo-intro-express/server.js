var express = require("express");
var path = require("path");
var app = express();

//  Create at least one route to serve something back to the client

app.get("/", function(req, res) {
  console.log("Receving a request");
  // app.sendFile(path.join(__dirname, "public", "./index.html"));
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.use(express.static("public"));

//  Create a listener for port 3000 and log a message when it starts
var port = 3000;
app.listen(port, function() {
  console.log("Listening for all requests on port", port);
});

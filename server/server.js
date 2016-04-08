//  Server Side JS

var express = require("express");
var app = express();

var democrats = [];
var republicans = [];

function Profile(name, party) {
  this.name = name;
  this.party = party;
}

var korra = new Profile("Korra", "Democrat");
var pli = new Profile("Pli", "Republican");
var asami = new Profile("Asami", "Democrat");
var zaheer = new Profile("Zaheer", "Republican");
var unalaq = new Profile("Unalaq", "Republican");
var bolin = new Profile("Mako", "Democrat");
var vaatu = new Profile("Vaatu", "Republican");
var ozai = new Profile("Ozai", "Republican");
var lin = new Profile("Lin", "Democrat");
var kuvira = new Profile("Kuvira", "Republican");
var su = new Profile("Su", "Democrat");

democrats.push(korra, asami, bolin, mako, lin, su);
republicans.push(pli, zaheer, unalaq, vaatu, ozai, kuvira);

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/public/index.html");
});
app.get("/democrats", function(request, response) {
  response.send(democrats);
});

app.get("/republicans", function(request, response) {
  response.send(republicans);
});

app.use(express.static("server/public"));

//  Listener
var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
}); //  Listener

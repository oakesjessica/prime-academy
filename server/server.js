//  Server Side JS

var express = require("express");
var app = express();

var democrats = [];
var republicans = [];

function Profile(name, party) {
  this.name = name;
  this.party = party;
}

//  Add Democrat objects
var korra = new Profile("Korra", "Democrat");
var asami = new Profile("Asami", "Democrat");
var bolin = new Profile("Bolin", "Democrat");
var albus = new Profile("Albus", "Democrat");
var su = new Profile("Su", "Democrat");
var celaena = new Profile("Celaena", "Democrat");

//  Add Republican objects
var kuvira = new Profile("Kuvira", "Republican");
var leia = new Profile("Leia", "Republican");
var anakin = new Profile("Anakin", "Republican");
var legolas = new Profile("Legolas", "Republican");
var teia = new Profile("Teia", "Republican");
var lin = new Profile("Lin", "Republican");

democrats.push(korra, asami, bolin, albus, su, celaena);
republicans.push(kuvira, leia, anakin, legolas, teia, lin);

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

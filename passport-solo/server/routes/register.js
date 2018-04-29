//  NPM
var router = require("express").Router();
var passport = require("passport");
var path = require("path");
var pg = require("pg");

//  Mongoose file
var encryptLib = require("../../modules/encryption");
var connectionString = "postgres://localhost:5432/passport_solo";

router.get("/", function(req, res, next) {
  res.sendFile(path.resolve(__dirname, "../public/views/register.html"));
}); //  router.get("/")

router.post("/", function(req, res, next) {

  var user = {
    username : req.body.username,
    password : encryptLib.encryptPassword(req.body.password)
  };  //  user

  pg.connect(connectionString, function(err, client) {
    var query = client.query("INSERT INTO users (username, password) VALUES ($1, $2)", [user.username, user.password]);

    query.on("error", function(err) {
      console.log("Error with posting to /register", err);
      res.sendStatus(500);
    });

    query.on("end", function() {
      res.sendStatus(200);
      client.end();
    });
  });
}); //  router.post("/")

module.exports = router;

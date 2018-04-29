//  NPM
var express = require("express");
var passport = require("passport");
var session = require("express-session");
var pg = require("pg");
var bodyParser = require("body-parser");
var localStrategy = require("passport-local").Strategy;

//  Local
var index = require("./routes/index");
var register = require("./routes/register");
var users = require("./routes/users");
var encryptLib = require("../modules/encryption");
var connectionString = "postgres://localhost:5432/passport_solo";
var app = express();

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static("server/public"));

//  Passport Configuration
app.use(session({
  secret : "secret",
  resave : true,
  saveUninitialized : false,
  cookie : { maxAge : 60000, secure : false }
}));  //  app.use(session)

//  Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

//  Passport
passport.use("local", new localStrategy({
  passReqToCallback : true,
  usernameField : "username"
  },
  function(req, username, password, done) {
    console.log("called local");
    pg.connect(connectionString, function(err, client) {
      if (err) {
        console.log(err);
      } else {
        console.log("called local - pg");

        var user = {};
        var query = client.query("SELECT * FROM users WHERE username = $1", [username]);

        query.on("row", function(row) {
          console.log("User obj", row);
          console.log("Password", password);
          user = row;

          if (encryptLib.comparePassword(password, user.password)) {
            console.log("User match found in database.");
            done(null, user);
          } else {
            done(null, false, { message : "Incorrect username and password." });
          }
        }); //  query.on("row")

        query.on("end", function() {
          client.end();
        }); //  query.on("end")
      } //  else
    }); //  pg.connect
  } //  function
)); //  passport.use("local")

//  Serialize user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

//  Deserialize user
passport.deserializeUser(function(id, done) {
  console.log("called deserializeUser");
  pg.connect(connectionString, function(err, client) {
    if (err) {
      console.log(err);
    } else {
      var user = {};
      console.log("called deserializeUser - pg");

      var query = client.query("SELECt * FROM users WHERE id = $1", [id]);

      query.on("row", function(row) {
        console.log("User row", row);
        user = row;
        done(null, user);
      });

      //  After data is returned, close connection and return results
      query.on("end", function() {
        client.end();
      });
    } //  else
  }); //  pg.connect
}); //  passport.deserializeUser

//  Routes
app.use("/", index);
app.use("/register", register);
app.use("/users", users);

//  Server Listener
var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
}); //  Server Listener

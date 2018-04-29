var router = require("express").Router();
var path = require("path");
var passport = require("passport");


router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/views/index.html"));
}); //  router.get("/")

router.post("/", passport.authenticate("local", {
  successRedirect : "/users",
  failureRedirect: "/"
}));  //  router.post("/")


module.exports = router;

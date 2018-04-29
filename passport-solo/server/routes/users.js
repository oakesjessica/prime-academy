var router = require("express").Router();

router.get("/", function(req, res, next) {
  res.send("user is authenticated:", req.isAuthenticated());
  // res.status(req.isAuthenticated()).send("user is authenticated");
});

module.exports = router;

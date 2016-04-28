var router = require("express").Router();
var Hero = require("../../models/hero");

router.get("/", function(req, res) {
  Hero.find({}, function(err, heroes) {
    if (err) {
      console.log("Issue retrieving hero profiles from database w/ err", err);
      res.status(500).send(err);
    } else {
      res.send(heroes);
    }
  });
});

router.post("/", function(req, res) {
  console.log("new hero", req.body);
  var newHero = new Hero(req.body);

  newHero.save(function(err) {
    if (err) {
      console.log("Issue saving to database with error", err);
      res.status(500).send(err);
    } else {
      console.log("Hero profile saved successfully");
      res.sendStatus(200);
    }
  });
});

router.delete("/:id", function(req, res) {
  console.log("Deleting profile request received.");

  Hero.findOneAndRemove({_id: req.params.id}, function(err, hero) {
    if (err) {
      console.log("Error removing profile from database w/ error", err);
      res.status(500).send(err);
    } else {
      console.log("Hero profile deleted", hero);
      res.sendStatus(200);
    }
  });
});


module.exports = router;

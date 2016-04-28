////////  HEROES ROUTER  ////////
var router = require("express").Router();
var Hero = require("../../models/hero");

/*Find all entries in database and send to client*/
router.get("/", function(req, res) {
  Hero.find({}, function(err, heroes) {
    if (err) {
      console.log("Issue retrieving hero profiles from database w/ err", err);
      res.status(500).send(err);
    } else {
      res.send(heroes);
    }
  }); //  Hero.find
}); //  get

/*Post new profile to MongoDB*/
router.post("/", function(req, res) {
  console.log("Saving new hero", req.body);
  var newHero = new Hero(req.body);

  newHero.save(function(err) {
    if (err) {
      console.log("Issue saving to database with error", err);
      res.status(500).send(err);
    } else {
      console.log("Hero profile saved successfully");
      res.sendStatus(200);
    }
  }); //  save
}); //  post

/*Delete profile from database by its _id*/
router.delete("/:id", function(req, res) {
  console.log("Deleting requested profile id", req.params.id);

  Hero.findOneAndRemove({_id: req.params.id}, function(err, hero) {
    if (err) {
      console.log("Error removing profile from database w/ error", err);
      res.status(500).send(err);
    } else {
      console.log("Hero profile deleted", hero);
      res.sendStatus(200);
    }
  }); //  findOneAndRemove
}); //  delete


module.exports = router;

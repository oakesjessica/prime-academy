//  Assignments Router
var express = require("express");
var path = require("path");
var User = require("../../models/assignments");

var router = express.Router();

//  Retrieve all assignments
router.get("/", function(request, response) {
  User.find({}, function(err, users){
    if(err){
      console.log(err);
    } else {
      response.send(users);
    }
  })
})  //  router.get("/")

router.get("/:id", function(request, response){

  console.log(request.params.id);

  //If an ID has been passed in, find that single 'Thing'
  if(request.params.id){
    User.findById(request.params.id, function(err, user){
      if(err){
        console.log(err);
      } else {
        //Return single user
        response.send(user);
      }
    })
  }
}); //  router.get("/:id")

router.post("/", function(request, response) {
  console.log(request.body);

  var user = new User(request.body);

  user.save(function(err) {
    if (err) {
      console.log(err);
      response.sendStatus(500);
    }
    else {
      console.log("assignments saved successfully");
      response.sendStatus(200);
    }
  })  //  user.save for router.post
}); //  router.post

module.exports = router;

var express = require("express");
var Ticket = require("../../models/ticket");
var router = express.Router();

//  Call to database, find all tickets and send back
router.get("/", function(request, response) {
  Ticket.find({}, function(err, tickets) {
    if (err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(tickets);
    }
  }); //  Ticket.find({})
}); //  router.get("/")

//  Post new ticket to database
router.post("/", function(request, response) {
  console.log("receiving request of ", request.body);

  var info = request.body;
  var newTicket = new Ticket({
    name : info.name,
    type : info.type,
    priority : info.priority,
    description : info.description,
    assignee : info.assignee,
    reporter : info.reporter,
    created : new Date(),
    updated : new Date()
  }); //  newTicket

  newTicket.save(function(err) {
    if (err) {
      console.log("Issue saving to database with error", err);
    } else {
      console.log("Ticket saved successfully");
    }
  }); //  newTicket.save
}); //  router.post("/")

module.exports = router;

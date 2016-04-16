var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
  name : { type : String, unique : true, required : true },
  type : { type : String, required : true},
  priority : { type : String, required : true},
  description : { type : String, required : true },
  assignee : { type : String, required : true },
  reporter : { type : String, required : true },
  created : { type : Date },
  updated : { type : Date },
});

var Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;

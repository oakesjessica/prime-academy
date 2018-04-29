var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
  id: Number,
  assignment_number: { type : Number, required : true },
  student_name: { type : String, required : true },
  score: { type : Number, required : true },
  date_completed: { type : Date, required : true }
});


var Assignments = mongoose.model("Assignments", assignmentSchema);

module.exports = Assignments;

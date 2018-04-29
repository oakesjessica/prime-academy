var random = require("./random");
var formatCurrency = require("./formatCurrency");

var acctBalance = function(min, max) {
  return formatCurrency(random(min, max));
};

var acctDisplay = function(input) {
  return "Account balance: \n" + input;
};

exports.acctBalance = acctBalance;
exports.acctDisplay = acctDisplay;

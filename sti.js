//  JS Group Solo Project
//  Erika Klein, Travis Ingram, Lisa Mabley, Jessica Oakes

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
//loop here

for(var i = 0; i < employees.length; i++) {
  var employee = employees[i];
  var name = employee[0];
  var startSal = parseInt(employee[2]);
  var adjustedSal = 0;
  var reviewScore = employee[3];
  var perBonus = 0;
  var bonusAmount = 0;

  switch(reviewScore) {
   case 3:
     perBonus = 0.04;
     break;

   case 4:
     perBonus = 0.06;
     break;

   case 5:
     perBonus = 0.1;
     break;

   default:
     perBonus = 0;
     break;
  }

  if(employee[1].length == 4) {
   perBonus += .05;
  }

  if (getAdjustedSal(startSal, perBonus) > 65000) {
   perBonus -= .01;
  }

  if (perBonus > 0.13) {
   perBonus = 0.13;
  }

  var bonusString = (perBonus * 100) + "%";

  bonusAmount = getBonusAmount(startSal, perBonus);
  adjustedSal = getAdjustedSal(startSal, perBonus);

  bonusAmountString = "$" + bonusAmount.toLocaleString();
  adjustedSalString = "$" + adjustedSal.toLocaleString();

  function getBonusAmount(salary, bonusPercentage) {
    return Math.round(bonusPercentage * salary);

  }

  function getAdjustedSal(salary, bonusPercentage) {
    return salary + getBonusAmount(salary, bonusPercentage);

  }

  console.log([name, bonusString, adjustedSalString, bonusAmountString]);

}

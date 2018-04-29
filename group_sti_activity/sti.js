//  JS Group Solo Project
//  Erika Klein, Travis Ingram, Lisa Mabley, Jessica Oakes

var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];

function Person(name, emplID, salary, rating) {
  this.name = name;
  this.emplID = emplID;
  this.salary = salary;
  this.rating = rating;
}

for(var it = 0; it < employees.length; it++) {
  var employee = employees[it];
  var emplName = employees[it].name;
  var employeeNum = employees[it].emplID;
  var startSal = parseInt(employees[it].salary);
  var reviewScore = employees[it].rating;

  var adjustedSal = 0;
  var perBonus = 0;
  var bonusAmount = 0;
  var finalObj = {};

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

  if(employeeNum.length == 4) {
   perBonus += 0.05;
  }

  if (getAdjustedSal(startSal, perBonus) > 65000) {
   perBonus -= 0.01;
  }

  if (perBonus > 0.13) {
   perBonus = 0.13;
  }

  var bonusString = (perBonus * 100) + "%";

  bonusAmount = getBonusAmount(startSal, perBonus);
  adjustedSal = getAdjustedSal(startSal, perBonus);

  bonusAmountString = "$" + bonusAmount.toLocaleString();
  adjustedSalString = "$" + adjustedSal.toLocaleString();

  finalObj.Name = emplName;
  finalObj.bonusPercentage = bonusString;
  finalObj.annualAC = adjustedSalString;
  finalObj.bonus = bonusAmountString;

  console.log(finalObj);

}

function getBonusAmount(salary, bonusPer) {
  return Math.round(bonusPer * salary);
}

function getAdjustedSal(salary, bonusPer) {
  return salary + getBonusAmount(salary, bonusPer);

}

var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
};

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
};

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
};

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
};

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
};

var initialList = [claim1, claim2, claim3, claim4, claim5];

var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//	Add 5 more claims using the constructor and push to array
var claim6 = new claim("Elizabeth Oakes", "Primary Care", 1500);
var claim7 = new claim("Lydia Oakes", "Emergency", 4000);
var claim8 = new claim("Emily Clark", "Specialist", 910);
var claim9 = new claim("Amelia Sarles", "Optical", 1100);
var claim10 = new claim("David Hardy", "Specialist", 500);

initialList.push(claim6, claim7, claim8, claim9, claim10);

/*Calculate what percentage will be covered
** Optical - covers 0%
** Specialist - covers 10%
** Emergency - covers 100%
** Primary Care - covers 50%
*/
function calcPercentage(indivClaim) {
	var percentage = 0.00;

	switch(indivClaim.visitType) {
		case "Optical":
			percentage += 0.00;
			break;

		case "Specialist":
			percentage += 0.10;
			break;

		case "Emergency":
			percentage += 1.00;
			break;

		case "Primary Care":
			percentage += 0.50;
			break;

		default:
			percentage += 0.00;
	}
	return percentage;
}

/*Calculate the amount covered
** Based on percentage calculated and visitCost value
** Costs should be rounded to the nearest whole number
** Console out message "Paid out $___ for [patientName]"
*/
var indivMessage = "";
function amountCovered(indivClaim) {
	var indivName = indivClaim.patientName;
	var claimAmount = Math.round(indivClaim.visitCost * calcPercentage(indivClaim));

	totalPayedOut += claimAmount;	//	Calculate total amount paid out
	indivMessage = "Paid out " + addMoneyComma(claimAmount) + " for " + indivName;
	$("#claimsList").append("<li>" + indivMessage + "</li>");
	console.log(indivMessage);
}

/*Append currency symbol and convert to locale string*/
function addMoneyComma(amount) {
	return "$" + amount.toLocaleString();
}

$(function(){
	for (var it = 0; it < initialList.length; it++) {
		amountCovered(initialList[it]);
	}

	var totalMessage = "Total amount of claims covered: " + addMoneyComma(totalPayedOut);
	$("#claimsList").append("<p>" + totalMessage +"</p>");
	console.log(totalMessage);
});

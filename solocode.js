//  Solo Code
//  2016.03.22
//  Jessica Oakes

//*****stringList*****//
//Iterate through the stringList and produce the following output: "Months listed are March, April, May".
var months;
var stringList = ["March", "April", "May"];

//***Join Method***//
//for (var i = 0; i < stringList.length; i++) {
//  months = stringList.join(", ");
//}

//console.log("Months listed are " + months);

//***Concatenating a String Method***//
var strmonths = "";
for (var i = 0; i < stringList.length; i++) {
  strmonths += stringList[i] + ", ";
}

if (strmonths != null && strmonths.length > 0) {
  strmonths = strmonths.substring(0, strmonths.length-2);
}

console.log("Months listed are " + strmonths);

//*****numList*****//
var numList = [13, 78, 34];
var totNum = "";
var total = 0;

//Console log the last element in numList using .length to get the index.
console.log("Last element in numList using .length: " + numList[numList.length-1]);

//Iterate through numList, output all numbers as single String
for (var j = 0; j < numList.length; j++) {
  totNum += numList[j];
}
console.log("Numbers as a single string: " + totNum);


//Iterate through numList and add all of the elements together and console log the total.
for (var k = 0; k < numList.length; k++) {
  total += numList[k];
}
console.log("Numbers added together: " + total);

//*****boolList*****//
var boolList = [false, true, false];
var boolNum = 0;

//If the second element in boolList is true, add the first and last elements in numList. Otherwise multiply the second element in numList by itself. Console log the output.
if (boolList[1] === true) {
  boolNum = numList[0] + numList[numList.length-1];
  console.log("First and last elements in numList added: " + boolNum);
}

else {
  boolNum = numList[1] * numList[1];
  console.log("Second element in numList added by itself" + boolNum);
}

//Iterate through boolList, if the value is true console log the equivelent index in numList.
for (var m = 0; m < boolList.length; m++) {
  if (boolList[m] === true)
    console.log("numList equivalent index: " + numList[m]);
}

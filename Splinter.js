/*Take your project and add a 'Splinter' function. 
The function should take in 2 numbers, multiply them together 
saved under a locally scoped variable called 'z'. 
Then create an array that stores the first argument, second argument, and z. 
Return that array.*/

function Splinter(x,y) {
	var z = x*y;
	var theArray = [x, y, z];
	return theArray;
}

console.log(Splinter(5, 7));
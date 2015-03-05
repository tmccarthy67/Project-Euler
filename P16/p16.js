// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?
var targetNumber;
var targetBase = 2;
var targetPower = 1000;
var numberLength;

var generateTargetNumber =  function () {
	//generate the number to be
	targetNumber = Math.pow(targetBase, targetPower);
	console.log(targetNumber);
	convertNumber();
}

var convertNumber = function() {
	//make number not scientific notation
	// console.log(targetNumber);
	x = targetNumber;
	if (Math.abs(x) < 1.0) {
	    var e = parseInt(x.toString().split('e-')[1]);
	    if (e) {
	        x *= Math.pow(10,e-1);
	        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
	    }
	  } else {
	    var e = parseInt(x.toString().split('+')[1]);
	    if (e > 20) {
	        e -= 20;
	        x /= Math.pow(10,e);
	        x += (new Array(e+1)).join('0');
	    }
	  }
	targetNumber = x;
	// console.log(targetNumber);
	countDigits();
}

var countDigits = function() {
	//count digits in generated number
	numberLength = targetNumber.toString().length;
	console.log(targetNumber);
	console.log(numberLength);
}

generateTargetNumber();
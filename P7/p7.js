// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

var primeNumbers = new Array;
var whichPrime = 10001;

var primeTest = function() {
	var testNumber = 1;
	while (primeNumbers.length < whichPrime) {
		testNumber = testNumber + 1;
		isPrime = true;
   // Now check every whole number from 2 to the square root of testNumber. If any of these divides testNumber exactly, testNumber cannot be prime.
   for (var i = 2; i <= Math.sqrt(testNumber); i++) {
      if (testNumber % i == 0) {isPrime = false}
   }
   if (isPrime == true) {
		primeNumbers.push(testNumber);
	};

	};
		showResults();
}

var showResults = function() {
	$('#results').append($('<h2 id=problem>'));
	$('#problem').text('The 10,001st prime number is ');
	$('#results').append($('<p id=prime>'));
	$('#prime').text(primeNumbers[10000]);
}

primeTest();
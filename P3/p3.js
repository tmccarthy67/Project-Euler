// variables
var testNumber = 600851475143;
var allFactors = new Array;
var primeFactors = new Array;
var largestPrimeFactor;

// find factors
var findFactors = function () {
	// find all of the factors of the test number
	maxNumFact = Math.round(Math.sqrt(testNumber));
	// console.log(testNumber);
	// console.log(maxNumFact);
	for (var i = 2; i < maxNumFact; i++) {
		if (testNumber % i === 0) {
			// console.log(testNumber + " / " + i + " = " + (testNumber/i));
			allFactors.push(i);
		};
	};
			// console.log(allFactors);
	findPrimes();
}

// find primes
var findPrimes = function () {
	// find which factors are primes
	var isPrime = true;
	for (var i = 0; i < allFactors.length; i++) {
		testFactor = parseInt(allFactors[i]);
		maxPrimeFact = Math.round(Math.sqrt(testFactor));
		for (var j = 3; j < maxPrimeFact; j++) {
			if (testFactor % j == 0) {
				isPrime = false;
			}
		};
		if (isPrime == true) {
			primeFactors.push(testFactor);
		};
	};
	findMaxFactor();
}

// find max factor
var findMaxFactor = function () {
	largestPrimeFactor = Math.max.apply(Math, primeFactors);
	outputResults();
}

// output max factor
var outputResults = function () {
	$('#results').append($('<p id=prime>'));
	$('#prime').text(largestPrimeFactor);
}

findFactors();
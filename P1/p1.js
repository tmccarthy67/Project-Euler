var numberList = new Array;
var numberTotal =0;

var checkNumber = function () {
	// check if numer is divisble by 3 or 5
	for (var i = 1; i < 100; i++) {
		if (((i % 3) == 0 ) || ((i % 5) == 0 )) {
			numberList.push(i);
		};
	};
	sumNumbers()
	// console.log(numberList);
}

var sumNumbers = function () {
	for (var i = 0; i < numberList.length; i++) {
		numberTotal = numberTotal + numberList[i];
	};
	$('#results').append('<p>').text(numberTotal);
}

checkNumber();
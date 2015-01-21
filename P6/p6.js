var testSeries = new Array;

var generateSeries = function() {
	for (var i = 1; i < 101; i++) {
		testSeries.push(i);
	};
addSeriesUp();
}

var seriesSum = 0;
var sumsSquared = 0;
var squaresSumed = 0;
var differenceResults = 0;

var addSeriesUp = function() {
	for (var i = 0; i < testSeries.length; i++) {
		seriesSum = seriesSum +testSeries[i];
	};
	squareTheSums();
}

var squareTheSums = function() {
	sumsSquared = Math.pow(seriesSum,2);
	squareFirstThenSum();
}

var squareFirstThenSum = function() {
	for (var i = 0; i < testSeries.length; i++) {
		eachSquare = Math.pow(testSeries[i],2);
		squaresSumed = squaresSumed + eachSquare;
	};
	computeResults();
}

var computeResults = function() {
	differenceResults = sumsSquared - squaresSumed;
	showResults();
}

var showResults = function() {
	$('#results').append($('<p id=showResults>'));
	$('#showResults').text('The difference between the sum of the squares of the first 100 natural numbers and the square of the sum is ' + sumsSquared + ' - ' + squaresSumed + ' = ' + differenceResults);
}

generateSeries();

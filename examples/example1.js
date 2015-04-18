
var BeerMapping = require('./beermapping');
var key = '5f58d0daba7819719acd26dd4f44f57e';

var beer = new BeerMapping(key);
beer.locationsByName('intracoastal', function (error, data) {
	if (!error) {
		console.log(JSON.stringify(data));
	}
	else {
		console.log('Error: ' + JSON.stringify(error));
	}
});
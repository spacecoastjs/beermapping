
// Copyright 2015 Space Coast JS
// MIT License

var request = require('request');
var parseString = require('xml2js').parseString;

/**
 * @public
 * @class
 * The Beer Mapping API constructor.
 * {param} string apiKey The API key.
 */
function BeerMapping(apiKey) {
	this._apiKey = apiKey;
}

/**
 * @private
 * Given an API command, a key, and search terms, builds the appropriate API url to call.
 */
function buildUrl(command, apiKey, terms) {
	return "http://beermapping.com/webservice/" +
	  encodeURIComponent(command) + "/" + 
	  encodeURIComponent(apiKey) + "/" + 
	  encodeURIComponent(terms);
}

/**
 * @private
 * Given a url and a callback, performs the API call and calls the callback.
 */
function callApi(url, callback) {
	request(url, function (error, response, body) {
    	if (!error && response.statusCode == 200) {
    		parseString(body, function (err, result) {
    			if (err) {
    				callback({ type: 'xml', error: err });
    			}
			    callback(undefined, result);
			});
	    }
	    else {
			callback({ type: 'http', error: error });
	    }
	});
}

/**
 * @public
 * Given a location name and a callback, calls the API and triggers the callback.
 */
BeerMapping.prototype.locationsByName = function (name, callback) {
	callApi(buildUrl('locquery', this._apiKey, name), callback);
};

module.exports = BeerMapping;
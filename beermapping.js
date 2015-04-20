
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
	// perform the http request...
	request(url, function (error, response, body) {

		// if the response is ok...
    	if (!error && response.statusCode == 200) {

    		// parse the XML into JSON...
    		parseString(body, function (err, result) {

    			// if there's a problem, report it.
    			if (err) {
    				callback({ type: 'xml', error: err });
    			}
    			// otherwise, we have a result!
    			else {
			    	callback(undefined, result);
				}
			});
	    }
	    // if the repsonse fails, report it.
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

/**
 * @public
 * Given a city name and a callback, calls the API and triggers the callback.
 */
BeerMapping.prototype.locationsByCity = function (name, callback) {
	callApi(buildUrl('loccity', this._apiKey, name), callback);
};

/**
 * @public
 * Given a region (state or province) name and a callback, calls the API and triggers the callback.
 */
BeerMapping.prototype.locationsByRegion = function (name, callback) {
	callApi(buildUrl('locstate', this._apiKey, name), callback);
};

/**
 * @public
 * Given a location id and a callback, calls the API, retrieves map data, and triggers the callback.
 */
BeerMapping.prototype.locationMap = function (id, callback) {
	callApi(buildUrl('locmap', this._apiKey, id), callback);	
};

/**
 * @public
 * Given a location id and a callback, calls the API, retrieves score data, and triggers the callback.
 */
BeerMapping.prototype.locationScore = function (id, callback) {
	callApi(buildUrl('locscore', this._apiKey, id), callback);	
};

/**
 * @public
 * Given a location id and a callback, calls the API, retrieves image data, and triggers the callback.
 */
BeerMapping.prototype.locationImages = function (id, callback) {
	callApi(buildUrl('locimage', this._apiKey, id), callback);	
};

module.exports = BeerMapping;
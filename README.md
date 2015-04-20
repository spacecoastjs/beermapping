# BeerMapping

An NPM package for the [beermapping.com](http://beermapping.com) API

[![Build Status](https://travis-ci.org/spacecoastjs/beermapping.svg?branch=master)](https://travis-ci.org/spacecoastjs/beermapping)

## Supported [Service Commands](http://beermapping.com/api/reference/)
- locquery
- loccity
- locstate
- locmap
- locscore
- locimage

## Usage Example
```javascript
var BeerMapping = require('beermapping');
  
var beer = new BeerMapping('<Your API Key>');

var intracoastalBrewingCompany = null;
beer.locationsByName('intracoastal', function (err, results) {
  if (!err) {
    intracoastalBrewingCompany = results.bmp_locations.location[0];
  }
});
```

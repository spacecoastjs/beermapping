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
  
var beer = new BeerMapping('<your API key>');
var intracoastalBrewingCompany = beer.locationsByName('intracoastal');
```

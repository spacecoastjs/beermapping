# npm install beermapping
NPM package for beermapping.com API.

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

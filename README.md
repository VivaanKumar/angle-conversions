# Angle Conversions

https://www.npmjs.com/package/angle-conversions


### Angle between two points
```
const methods = require("angle-conversions");

console.log(methods.angleBetweenTwoPoints({x: 2, y: 2}, {x: 2, y: 4})) //returns 180
```
### Radians to degrees 
```
const methods = require("angle-conversions");

console.log(methods.radiansToDegrees(Math.PI)) //returns 180
```
### Degrees to radians 
```
const methods = require("angle-conversions");

console.log(methods.degreesToRadians(180)) //returns 3.141592...
```

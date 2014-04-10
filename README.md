# customs

Type validator for node.js and the browser.

## Installation
With [node](nodejs.org) installed:

````
npm -i --save customs
````

## Usage
````js
var customs = require('customs');

customs('string', 'Dad jokes', function(err) {
  // -> err is 'true'
});

var returnValue = customs('string', 1337);
// -> returnValue is 'false'

var customs(/d(b+)d/g, 'cdbbdbsbz', function(err) {
  // -> err is 'false'
});
````

## Supported types
- `array`
- `string`
- `number`
- `boolean`
- `object`
- `email`
- any RegExp

Date-time types are not supported because there's too much variation. Just provide your own definition as a RegExp.

## License
[MIT](https://tldrlegal.com/license/mit-license) © [Yoshua Wuyts](yoshuawuyts.com)
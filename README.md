# customs

Type validator for node.js and the browser.

## Installation
With [node](nodejs.org) installed:

`npm -i --save customs`

## Usage
````js
var customs = require('customs');

customs('string', 'Dad jokes', function(returnValue) {
  // -> returnValue is 'true'
});

var returnValue = customs('string', 1337);
// -> returnValue is 'false'
````

## License
[MIT](https://tldrlegal.com/license/mit-license) © [Yoshua Wuyts](yoshuawuyts.com)
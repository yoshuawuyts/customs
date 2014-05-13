# customs

[![Build Status](https://travis-ci.org/yoshuawuyts/customs.svg)](https://travis-ci.org/yoshuawuyts/customs)
[![Coverage Status](https://coveralls.io/repos/yoshuawuyts/customs/badge.png?branch=master)](https://coveralls.io/r/yoshuawuyts/customs?branch=master)

Type validator for node.js and the browser through [browserify](http://browserify.org/).

## Installation
With [node](nodejs.org) installed:

````
npm i --save customs
````

## Usage
````js
var customs = require('customs');

customs('string', 'Dad jokes');
// -> 'true'

customs('string', 1337);
// -> 'false'

customs(/d(b+)d/g, 'cdbbdbsbz');
// -> 'true'
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
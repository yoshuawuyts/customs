'use strict';

/**
 * Expose customs
 */

module.exports = exports = customs;

/**
 * Init 'customs'
 *
 *  var validate = require('customs');
 *  validate('string', 'hi');
 *  // -> 'true'
 *
 * @params {String} type
 * @params {Any} target
 * @return {Boolean}
 * @api public
 */

function customs (type, target) {
  switch (type) {

    case 'array':
      return '[object Array]' == Object.prototype.toString.call(target);

    case 'string':
      return 'string' == typeof target;

    case 'number':
      return 'number' == typeof target;

    case 'boolean':
      return 'boolean' == typeof target;

    case 'object':
      return 'object' == typeof target;

    case 'function':
      return 'function' == typeof target;

    case 'email':
      var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(target);

    default:
      if (type.constructor != RegExp) return false;
      return type.test(target);
  };
};
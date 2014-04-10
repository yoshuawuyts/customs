'use strict';

/**
 * Expose customs
 */

module.exports = exports = customs;

/**
 * Init 'customs'
 *
 *  customs('string', 'hi', function(err) {
 *    // handle error if any
 *  });
 *
 * @params {String} type
 * @params {any} target
 * @return {bool}
 * @api public
 */

function customs (type, target, err) {
  switch (type) {

    case 'array':
      if (Object.prototype.toString.call(target) == '[object Array]'){
        err = true;
        return true;
      }
      return false;
      break;

    case 'string':
      if ('string' == typeof(target)) {
        err = true;
        return true;
      }
      return false;
      break;

    case 'number':
      if ('number' == typeof(target)) {
        err = true;
        return true
      };
      return false;
      break;

    case 'boolean':
      if ('boolean' == typeof(target)) {
        err = true;
        return true;
      }
      return false;
      break;

    case 'object':
      if ('object' == typeof(target)) {
        err = true;
        return true;
      }
      return false;
      break;

    case 'email':
      var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(target)) {
        err = true;
        return true;
      }

    default:
      // check and evaluate regex
      if (type instanceof RegExp && type.test(target)) {
        err = true;
        return true;
      }
      return false;
  }
}
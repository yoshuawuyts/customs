'use strict';

/**
 * Expose customs
 */

module.exports = exports = customs;

/**
 * Init custom
 *
 * @params {String} type
 * @params {any} target
 * @return {bool}
 * @api public
 */

function customs (type, target) {
  switch (type) {

    case 'array':
      if (Object.prototype.toString.call(target) == '[object Array]'){
        return true;
      }
      return false;
      break;

    case 'string':
      if ('string' == typeof(target)) return true;
      return false;
      break;

    case 'number':
      if ('number' == typeof(target)) return true;
      return false;
      break;

    case 'boolean':
      if ('boolean' == typeof(target)) return true;
      return false;
      break;

    case 'object':
      if ('object' == typeof(target)) return true;
      return false;
      break;

    // TODO: default to regexp check
    default:
      return false;
  }
}
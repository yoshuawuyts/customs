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

function customs (type, target, next) {
  switch (type) {

    case 'array':
      if (Object.prototype.toString.call(target) == '[object Array]'){
        next = true;
        return true;
      }
      next = false;
      return false;
      break;

    case 'string':
      if ('string' == typeof(target)) {
        next = true;
        return true;
      }
      next = false;
      return false;
      break;

    case 'number':
      if ('number' == typeof(target)) {
        next = true;
        return true
      };
      next = false;
      return false;
      break;

    case 'boolean':
      if ('boolean' == typeof(target)) {
        next = true;
        return true;
      }
      next = false;
      return false;
      break;

    case 'object':
      if ('object' == typeof(target)) {
        next = true;
        return true;
      }
      next = false;
      return false;
      break;

    // TODO: default to regexp check
    default:
      next = false;
      return false;
  }
}
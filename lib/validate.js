"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/**
 * isString
 */
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
/**
 * isNumber
 */


function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}
/**
 * isArray
 */


function isArray(value) {
  return Array.isArray(value);
}
/**
 * isFunction
 */


function isFunction(value) {
  return typeof value === "function";
}
/**
 * isObject
 */


function isObject(value) {
  var type = (0, _typeof2["default"])(value);
  return type === "function" || type === "object" && !!value;
}
/**
 * isNull
 */


function isNull(value) {
  return value === null;
}
/**
 * isUndefined
 */


function isUndefined(value) {
  return value === "undefined";
}
/**
 * isBoolean
 */


function isBoolean(value) {
  return typeof value === "boolean";
}
/**
 * isRegExp
 */


function isRegExp(value) {
  return value && (0, _typeof2["default"])(value) === "object" && value.constructor === RegExp;
}
/**
 * isError
 */


function isError(value) {
  return value instanceof Error && typeof value.message !== "undefined";
}
/**
 * isSymbol
 */


function isSymbol(value) {
  return (0, _typeof2["default"])(value) === "symbol";
}
/**
 * isDate
 */


function isDate(value) {
  return value instanceof Date;
}
/**
 * isEquivalent
 */


function isEquivalent(a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}
/**
 * isEmail
 */


function isEmail(value) {
  var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(value).toLowerCase());
}
/**
 * client
 * @param {Object} params
 * @return {Boolean}
 */


function client(params) {
  if (!isObject(params)) {
    return;
  }

  var REQUIRED_PARAMS = ["xAppToken", "env", "log"];
  params = Object.keys(params);

  for (var i in REQUIRED_PARAMS) {
    if (!params.includes(REQUIRED_PARAMS[i])) {
      return;
    }
  }

  return true;
}
/**
 * authenticated
 * @param {Object} options
 * @return {Boolean}
 */


function authenticated(options) {
  if (!isObject(options)) {
    return;
  }

  var REQUIRED_PARAMS = ["Authorization"];
  options = Object.keys(options);

  for (var i in REQUIRED_PARAMS) {
    if (!options.includes(REQUIRED_PARAMS[i])) {
      return;
    }
  }

  return true;
}

module.exports = {
  isString: isString,
  isNumber: isNumber,
  isArray: isArray,
  isFunction: isFunction,
  isObject: isObject,
  isNull: isNull,
  isUndefined: isUndefined,
  isBoolean: isBoolean,
  isRegExp: isRegExp,
  isError: isError,
  isSymbol: isSymbol,
  isDate: isDate,
  isEmail: isEmail,
  isEquivalent: isEquivalent,
  client: client,
  authenticated: authenticated
};
//# sourceMappingURL=validate.js.map
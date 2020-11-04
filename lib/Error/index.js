"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var errors = require('./errors');

function KlingoError(e) {
  Error.captureStackTrace(this, this.constructor);
  this.name = 'KlingoError';
  this.status = e.status || 'error';
  this.statusCode = e.statusCode || 500;
  this.content = e.content || null;

  if (e.content) {
    var localeError = function localeError(error) {
      return _objectSpread(_objectSpread({}, error), {}, {
        message: errors[error.code] || error.message
      });
    };

    if (Array.isArray(e.content)) {
      this.content = e.content.map(localeError);
    } else if (e.content.code) {
      this.content = [localeError(e.content)];
    }
  }
}

module.exports = KlingoError;
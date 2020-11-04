"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var logger = require("./logger");

var getBaseUrl = require("./utils").getBaseUrl;

var validate = require("./validate");

var resources = require("./resources");

module.exports = function (params) {
  /**
   * Validate params
   */
  if (!validate.client(params)) {
    throw new TypeError("Erro ao conectar com klingo! Verifique as configurações");
  }
  /**
   * Log
   */


  var log = {
    log: function log() {},
    info: function info() {},
    error: function error() {},
    success: function success() {}
  };

  if (params.debug) {
    log = logger(params.log, params.debug);
  }
  /**
   * Config
   */


  var config = {
    logger: log,
    env: params.env,
    base: {
      "default": getBaseUrl(params.env, "default")
    },
    headers: {
      "Content-Type": "application/json",
      "X-APP-TOKEN": params.xAppToken
    },
    transform: function transform(body, response, resolveWithFullResponse) {
      var status = response.statusCode <= 200 ? "success" : "error";

      if (response.statusCode <= 200) {
        log.info({
          statusCode: response.statusCode,
          statusMessage: response.statusMessage,
          status: status,
          content: body
        });
      } else {
        content = content.errors.error;
        log.error({
          statusCode: response.statusCode,
          statusMessage: response.statusMessage,
          status: status,
          content: body
        });
      }

      return {
        statusCode: response.statusCode,
        status: status,
        content: body
      };
    }
  };
  /**
   * Resources
   */

  var rs = {};
  Object.keys(resources).forEach(function (i) {
    rs[i] = _objectSpread({}, resources[i]);
    Object.keys(rs[i]).forEach(function (r) {
      if (validate.isFunction(rs[i][r])) {
        rs[i][r] = rs[i][r].bind(null, config);
      }
    });
  });
  return rs;
};
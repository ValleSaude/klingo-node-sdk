"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var request = require("request-promise");

var config = require("../config");

var KlingoError = require("../Error");

var moment = require('moment');

var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(opts, params) {
    var response, error;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return request(_objectSpread(_objectSpread({}, opts), {}, {
              url: "".concat(opts.base["default"], "/").concat(config.external.register),
              method: "POST",
              body: JSON.stringify(params)
            }));

          case 3:
            response = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, response), {}, {
              content: JSON.parse(response.content)
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            error = _objectSpread({}, _context.t0.response);

            if (error.content && error.content == "Unauthorized") {
              error.content = [{
                code: 401,
                message: "Unauthorized"
              }];
            } else {
              error.content = JSON.parse(_context.t0.response.body);
            }

            throw new KlingoError(error);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var authenticate = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(opts, params) {
    var response, content, authentication, error;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return request(_objectSpread(_objectSpread({}, opts), {}, {
              url: "".concat(opts.base["default"], "/").concat(config.external.authenticate),
              method: "POST",
              body: JSON.stringify(params)
            }));

          case 3:
            response = _context2.sent;
            content = JSON.parse(response.content);
            authentication = _objectSpread(_objectSpread({}, content), {}, {
              expires: moment().add(content.expires_in, 'seconds')
            });
            opts.authentication = authentication;
            return _context2.abrupt("return", _objectSpread(_objectSpread({}, response), {}, {
              content: content,
              authentication: authentication
            }));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            error = _objectSpread({}, _context2.t0.response);

            if (error.content && error.content == "Unauthorized") {
              error.content = [{
                code: 401,
                message: "Unauthorized"
              }];
            } else if (_context2.t0.response.statusCode === 419) {
              error.content = _context2.t0.response.body;
            } else {
              error.content = JSON.parse(_context2.t0.response.body);
            }

            throw new KlingoError(error);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function authenticate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  register: register,
  authenticate: authenticate
};
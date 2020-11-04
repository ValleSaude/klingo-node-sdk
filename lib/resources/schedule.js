"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var request = require("request-promise");

var config = require("../config");

var validate = require("../validate");

var KlingoError = require("../Error");

var getAvailableTimes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(opts, params) {
    var response, error;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (validate.authenticated(opts)) {
              _context.next = 2;
              break;
            }

            throw new TypeError("Verifique as configurações da requisição");

          case 2:
            _context.prev = 2;
            opts.headers['Authorization'] = "".concat(opts.authentication.token_type, " ").concat(opts.authentication.access_token);
            _context.next = 6;
            return request(_objectSpread(_objectSpread({}, opts), {}, {
              qs: params,
              url: "".concat(opts.base["default"], "/").concat(config.schedule.available),
              method: "GET"
            }));

          case 6:
            response = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, response), {}, {
              content: JSON.parse(response.content)
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            error = _objectSpread({}, _context.t0.response);

            if (error.content && error.content == "Unauthorized") {
              error.content = [{
                code: 401,
                message: "Unauthorized"
              }];
            } else if (_context.t0.response && _context.t0.response.statusCode === 419) {
              error.content = _context.t0.response.body;
            } else {
              error.content = JSON.parse(_context.t0.response.body);
            }

            throw new KlingoError(error);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));

  return function getAvailableTimes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var listServices = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(opts) {
    var response, error;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (validate.authenticated(opts)) {
              _context2.next = 2;
              break;
            }

            throw new TypeError("Verifique as configurações da requisição");

          case 2:
            _context2.prev = 2;
            opts.headers['Authorization'] = "".concat(opts.authentication.token_type, " ").concat(opts.authentication.access_token);
            _context2.next = 6;
            return request(_objectSpread(_objectSpread({}, opts), {}, {
              url: "".concat(opts.base["default"], "/").concat(config.schedule.services),
              method: "GET"
            }));

          case 6:
            response = _context2.sent;
            return _context2.abrupt("return", _objectSpread(_objectSpread({}, response), {}, {
              content: JSON.parse(response.content)
            }));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
            error = _objectSpread({}, _context2.t0.response);

            if (error.content && error.content == "Unauthorized") {
              error.content = [{
                code: 401,
                message: "Unauthorized"
              }];
            } else if (_context2.t0.response && _context2.t0.response.statusCode === 419) {
              error.content = _context2.t0.response.body;
            } else {
              error.content = JSON.parse(_context2.t0.response.body);
            }

            throw new KlingoError(error);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));

  return function listServices(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var listSpecialties = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(opts) {
    var response, error;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (validate.authenticated(opts)) {
              _context3.next = 2;
              break;
            }

            throw new TypeError("Verifique as configurações da requisição");

          case 2:
            _context3.prev = 2;
            opts.headers['Authorization'] = "".concat(opts.authentication.token_type, " ").concat(opts.authentication.access_token);
            _context3.next = 6;
            return request(_objectSpread(_objectSpread({}, opts), {}, {
              url: "".concat(opts.base["default"], "/").concat(config.schedule.specialties),
              method: "GET"
            }));

          case 6:
            response = _context3.sent;
            return _context3.abrupt("return", _objectSpread(_objectSpread({}, response), {}, {
              content: JSON.parse(response.content)
            }));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            error = _objectSpread({}, _context3.t0.response);

            if (error.content && error.content == "Unauthorized") {
              error.content = [{
                code: 401,
                message: "Unauthorized"
              }];
            } else if (_context3.t0.response && _context3.t0.response.statusCode === 419) {
              error.content = _context3.t0.response.body;
            } else {
              error.content = JSON.parse(_context3.t0.response.body);
            }

            throw new KlingoError(error);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));

  return function listSpecialties(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

var listExams = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(opts) {
    var response, error;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (validate.authenticated(opts)) {
              _context4.next = 2;
              break;
            }

            throw new TypeError("Verifique as configurações da requisição");

          case 2:
            _context4.prev = 2;
            opts.headers['Authorization'] = "".concat(opts.authentication.token_type, " ").concat(opts.authentication.access_token);
            _context4.next = 6;
            return request(_objectSpread(_objectSpread({}, opts), {}, {
              url: "".concat(opts.base["default"], "/").concat(config.schedule.exams),
              method: "GET"
            }));

          case 6:
            response = _context4.sent;
            return _context4.abrupt("return", _objectSpread(_objectSpread({}, response), {}, {
              content: JSON.parse(response.content)
            }));

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            error = _objectSpread({}, _context4.t0.response);

            if (error.content && error.content == "Unauthorized") {
              error.content = [{
                code: 401,
                message: "Unauthorized"
              }];
            } else if (_context4.t0.response && _context4.t0.response.statusCode === 419) {
              error.content = _context4.t0.response.body;
            } else {
              error.content = JSON.parse(_context4.t0.response.body);
            }

            throw new KlingoError(error);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 10]]);
  }));

  return function listExams(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

module.exports = {
  getAvailableTimes: getAvailableTimes,
  listServices: listServices,
  listSpecialties: listSpecialties,
  listExams: listExams
};
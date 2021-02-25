"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = require('../config');

var _require = require('../api/api'),
    Api = _require.Api;

var Schedule = /*#__PURE__*/function () {
  function Schedule(client, options) {
    (0, _classCallCheck2["default"])(this, Schedule);
    this.client = client;
    this.options = options;
    this.api = new Api();
  }

  (0, _createClass2["default"])(Schedule, [{
    key: "getAvailableTimes",
    value: function () {
      var _getAvailableTimes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryString) {
        var headers, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                _context.next = 3;
                return this.api.get("".concat(this.options.base["default"], "/").concat(config.schedule.available), {
                  headers: headers,
                  params: queryString
                });

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAvailableTimes(_x) {
        return _getAvailableTimes.apply(this, arguments);
      }

      return getAvailableTimes;
    }()
  }, {
    key: "listServices",
    value: function () {
      var _listServices = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var headers, endpoint, response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                endpoint = "".concat(this.options.base["default"], "/").concat(config.schedule.services);
                _context2.next = 4;
                return this.api.get(endpoint, {
                  headers: headers
                });

              case 4:
                response = _context2.sent;
                return _context2.abrupt("return", response.data);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function listServices() {
        return _listServices.apply(this, arguments);
      }

      return listServices;
    }()
  }, {
    key: "listSpecialties",
    value: function () {
      var _listSpecialties = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var headers, endpoints, response;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                endpoints = "".concat(this.options.base["default"], "/").concat(config.schedule.specialties);
                _context3.next = 4;
                return this.api.get(endpoints, {
                  headers: headers
                });

              case 4:
                response = _context3.sent;
                return _context3.abrupt("return", response.data);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function listSpecialties() {
        return _listSpecialties.apply(this, arguments);
      }

      return listSpecialties;
    }()
  }, {
    key: "listExams",
    value: function () {
      var _listExams = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var headers, endpoint, response;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                endpoint = "".concat(this.options.base["default"], "/").concat(config.schedule.exams);
                _context4.next = 4;
                return this.api.get(endpoint, {
                  headers: headers
                });

              case 4:
                response = _context4.sent;
                return _context4.abrupt("return", response.data);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function listExams() {
        return _listExams.apply(this, arguments);
      }

      return listExams;
    }()
  }, {
    key: "confirm",
    value: function () {
      var _confirm = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(body) {
        var headers, endpoint, response;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                endpoint = "".concat(this.options.base["default"], "/").concat(config.schedule.confirm);
                _context5.next = 4;
                return this.api.post(endpoint, body, {
                  headers: headers
                });

              case 4:
                response = _context5.sent;
                return _context5.abrupt("return", response.data);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function confirm(_x2) {
        return _confirm.apply(this, arguments);
      }

      return confirm;
    }()
  }, {
    key: "listVouchers",
    value: function () {
      var _listVouchers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var headers, endpoint, response;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                endpoint = "".concat(this.options.base["default"], "/").concat(config.schedule.vouchers);
                _context6.next = 4;
                return this.api.get(endpoint, {
                  headers: headers
                });

              case 4:
                response = _context6.sent;
                return _context6.abrupt("return", response.data);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function listVouchers() {
        return _listVouchers.apply(this, arguments);
      }

      return listVouchers;
    }()
  }, {
    key: "cancelVoucher",
    value: function () {
      var _cancelVoucher = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(body) {
        var headers, response;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                _context7.next = 3;
                return this.api["delete"]("".concat(this.options.base["default"], "/").concat(config.schedule.voucher), {
                  data: body,
                  headers: headers
                });

              case 3:
                response = _context7.sent;
                return _context7.abrupt("return", response.data);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function cancelVoucher(_x3) {
        return _cancelVoucher.apply(this, arguments);
      }

      return cancelVoucher;
    }()
  }]);
  return Schedule;
}();

module.exports = {
  Schedule: Schedule
};
//# sourceMappingURL=schedule.js.map
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

var Patient = /*#__PURE__*/function () {
  function Patient(client, options) {
    (0, _classCallCheck2["default"])(this, Patient);
    this.client = client;
    this.options = options;
    this.api = new Api();
  }

  (0, _createClass2["default"])(Patient, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var headers, endpoint, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                endpoint = "".concat(this.options.base["default"], "/").concat(config.patient.get);
                _context.next = 4;
                return this.api.get(endpoint, {
                  headers: headers
                });

              case 4:
                response = _context.sent;
                return _context.abrupt("return", response.data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
        var headers, response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                _context2.next = 3;
                return this.api.put("".concat(this.options.base["default"], "/").concat(config.patient.get), body, {
                  headers: headers
                });

              case 3:
                response = _context2.sent;
                return _context2.abrupt("return", response.data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function update(_x) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "listHealthInsurance",
    value: function () {
      var _listHealthInsurance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var headers, endpoint, response;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                endpoint = "".concat(this.options.base["default"], "/").concat(config.patient.healthInsurance);
                _context3.next = 4;
                return this.api.get(endpoint, {
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

      function listHealthInsurance() {
        return _listHealthInsurance.apply(this, arguments);
      }

      return listHealthInsurance;
    }()
  }]);
  return Patient;
}();

module.exports = {
  Patient: Patient
};
//# sourceMappingURL=patient.js.map
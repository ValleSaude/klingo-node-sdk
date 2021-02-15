"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = require('../config');

var moment = require('moment');

var axios = require('axios')["default"];

var External = /*#__PURE__*/function () {
  function External(client, options) {
    (0, _classCallCheck2["default"])(this, External);
    this.client = client;
    this.options = options;
  }

  (0, _createClass2["default"])(External, [{
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
        var headers, endpoint, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = this.options.headers;
                endpoint = "".concat(this.options.base["default"], "/").concat(config.external.register);
                _context.next = 4;
                return axios.post(endpoint, body, {
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

      function register(_x) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "authenticate",
    value: function () {
      var _authenticate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
        var headers, endpoint, _yield$axios$post, data;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                headers = this.options.headers;
                endpoint = "".concat(this.options.base["default"], "/").concat(config.external.authenticate);
                _context2.next = 4;
                return axios.post(endpoint, body, {
                  headers: headers
                });

              case 4:
                _yield$axios$post = _context2.sent;
                data = _yield$axios$post.data;
                this.options.authentication = _objectSpread(_objectSpread({}, data), {}, {
                  expires: moment().add(data.expires_in, 'seconds')
                });
                return _context2.abrupt("return", this.options.authentication);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function authenticate(_x2) {
        return _authenticate.apply(this, arguments);
      }

      return authenticate;
    }()
  }]);
  return External;
}();

module.exports = {
  External: External
};
//# sourceMappingURL=external.js.map
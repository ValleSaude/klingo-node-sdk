"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = require('../config');

var _require = require('../api/api'),
    Api = _require.Api;

var Checkin = /*#__PURE__*/function () {
  function Checkin(client, options) {
    (0, _classCallCheck2["default"])(this, Checkin);
    this.client = client;
    this.options = options;
    this.api = new Api();
  }

  (0, _createClass2["default"])(Checkin, [{
    key: "confirm",
    value: function () {
      var _confirm = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
        var headers, _yield$this$api$post, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                _context.next = 3;
                return this.api.post("".concat(this.options.base["default"], "/").concat(config.checkin), body, {
                  headers: headers
                });

              case 3:
                _yield$this$api$post = _context.sent;
                data = _yield$this$api$post.data;
                return _context.abrupt("return", data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function confirm(_x) {
        return _confirm.apply(this, arguments);
      }

      return confirm;
    }()
  }, {
    key: "cancel",
    value: function () {
      var _cancel = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
        var headers, _yield$this$api$delet, data;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                headers = _objectSpread(_objectSpread({}, this.options.headers), {}, {
                  Authorization: "".concat(this.options.authentication.token_type, " ").concat(this.options.authentication.access_token)
                });
                _context2.next = 3;
                return this.api["delete"]("".concat(this.options.base["default"], "/").concat(config.checkin), {
                  data: body,
                  headers: headers
                });

              case 3:
                _yield$this$api$delet = _context2.sent;
                data = _yield$this$api$delet.data;
                return _context2.abrupt("return", data);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function cancel(_x2) {
        return _cancel.apply(this, arguments);
      }

      return cancel;
    }()
  }]);
  return Checkin;
}();

module.exports = {
  Checkin: Checkin
};
//# sourceMappingURL=checkin.js.map
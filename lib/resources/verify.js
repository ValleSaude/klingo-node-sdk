"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var config = require('../config');

var axios = require('axios')["default"];

var Verify = /*#__PURE__*/function () {
  function Verify(client, options) {
    (0, _classCallCheck2["default"])(this, Verify);
    this.client = client;
    this.options = options;
  }

  (0, _createClass2["default"])(Verify, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$axios$get, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("".concat(this.options.base["default"], "/").concat(config.verify));

              case 2:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                return _context.abrupt("return", data);

              case 5:
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
  }]);
  return Verify;
}();

module.exports = {
  Verify: Verify
};
//# sourceMappingURL=verify.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var validate = require('../../validate');

var requestHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(value) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (validate.authenticated(value)) {
              _context.next = 2;
              break;
            }

            throw new TypeError('Verifique as configurações da requisição');

          case 2:
            return _context.abrupt("return", value);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function requestHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  requestHandler: requestHandler
};
//# sourceMappingURL=verify-auth.interceptor.js.map
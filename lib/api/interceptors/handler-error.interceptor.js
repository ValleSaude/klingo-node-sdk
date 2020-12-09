"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('../../error/klingo-error'),
    KlingoError = _require.KlingoError;

var responseErrorHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(error) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (error instanceof TypeError) {
              _context.next = 2;
              break;
            }

            throw new KlingoError(error);

          case 2:
            return _context.abrupt("return", error);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function responseErrorHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  responseErrorHandler: responseErrorHandler
};
//# sourceMappingURL=handler-error.interceptor.js.map
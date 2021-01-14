"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var KlingoError = function KlingoError(error) {
  (0, _classCallCheck2["default"])(this, KlingoError);

  if (error.isAxiosError) {
    this.status = error.response.statusText;
    this.statusCode = error.response.status;
    this.message = error.response.data;
    return;
  }

  if (error.message == 'Unauthorized') {
    error.statusCode = 401;
  }

  Error.captureStackTrace(this, this.constructor);
  this.status = error.status || 'error';
  this.statusCode = error.statusCode || 500;
  this.message = error.message || null;
};

module.exports = {
  KlingoError: KlingoError
};
//# sourceMappingURL=klingo-error.js.map
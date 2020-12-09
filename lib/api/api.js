"use strict";

var axios = require('axios')["default"];

var _require = require('../error/klingo-error'),
    KlingoError = _require.KlingoError;

var validate = require('../validate');

var _require2 = require('./interceptors/verify-auth.interceptor'),
    requestHandler = _require2.requestHandler;

var _require3 = require('./interceptors/handler-error.interceptor'),
    responseErrorHandler = _require3.responseErrorHandler;

axios.interceptors.request.use(function (request) {
  if (!request.url.includes('register') && !request.url.includes('login') && !request.url.includes('live') && !validate.authenticated(request.headers)) {
    throw new TypeError("Verifique as configurações da requisição");
  }

  return request;
}, undefined);
axios.interceptors.response.use(undefined, function (error) {
  if (!(error instanceof TypeError)) {
    throw new KlingoError(error);
  }

  throw error;
});
//# sourceMappingURL=api.js.map
const axios = require('axios').default;
const { KlingoError } = require('../error/klingo-error');
const validate = require('../validate');
const { requestHandler } = require('./interceptors/verify-auth.interceptor');
const { responseErrorHandler } = require('./interceptors/handler-error.interceptor');

axios.interceptors.request.use(
  request => {
    if (
      !request.url.includes('register') &&
      !request.url.includes('login') &&
      !request.url.includes('live') &&
      !validate.authenticated(request.headers)
    ) {
      throw new TypeError("Verifique as configurações da requisição");
    }
    return request;
  },
  undefined
);

axios.interceptors.response.use(
  undefined,
  error => {
    if (!(error instanceof TypeError)) {
      throw new KlingoError(error);
    }
    throw error;
  }
);


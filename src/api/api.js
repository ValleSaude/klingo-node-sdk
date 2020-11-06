const axios = require('axios').default;
const { KlingoError } = require('../error/index');
const validate = require('../validate');
const { requestHandler } = require('./interceptors/verify-auth.interceptor');
const { responseErrorHandler } = require('./interceptors/handler-error.interceptor');

axios.interceptors.request.use(
  value => {
    if (
      !value.url.includes('register') &&
      !value.url.includes('login') &&
      !validate.authenticated(value)
    ) {
      throw new TypeError("Verifique as configurações da requisição");
    }
    return value;
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


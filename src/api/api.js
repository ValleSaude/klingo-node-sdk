const axios = require('axios').default.create();
const { KlingoError } = require('../error/klingo-error');
const validate = require('../validate');
const { requestHandler } = require('./interceptors/verify-auth.interceptor');
const {
  responseErrorHandler
} = require('./interceptors/handler-error.interceptor');


class Api {

  constructor(){
    axios.interceptors.request.use((request) => {
      if (
        !request.url.includes('register') &&
        !request.url.includes('login') &&
        !request.url.includes('live') &&
        !validate.authenticated(request.headers)
      ) {
        throw new TypeError('Verifique as configurações da requisição');
      }
      return request;
    }, undefined);
    
    axios.interceptors.response.use(undefined, (error) => {
      if (!(error instanceof TypeError)) {
        throw new KlingoError(error);
      }
      throw error;
    });
  }

  get (...params) { return axios.get(...params) };
  post(...params) { return axios.post(...params) };
  put(...params) { return axios.put(...params) };
  patch(...params) { return axios.patch(...params) };
  delete(...params) { return axios.delete(...params) };
}

module.exports = { Api };

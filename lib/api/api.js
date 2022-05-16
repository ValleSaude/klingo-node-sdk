"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var axios = require('axios')["default"].create();

var _require = require('../error/klingo-error'),
    KlingoError = _require.KlingoError;

var validate = require('../validate');

var _require2 = require('./interceptors/verify-auth.interceptor'),
    requestHandler = _require2.requestHandler;

var _require3 = require('./interceptors/handler-error.interceptor'),
    responseErrorHandler = _require3.responseErrorHandler;

var Api = /*#__PURE__*/function () {
  function Api() {
    (0, _classCallCheck2["default"])(this, Api);
    axios.interceptors.request.use(function (request) {
      if (!request.url.includes('register') && !request.url.includes('login') && !request.url.includes('live') && !validate.authenticated(request.headers)) {
        throw new TypeError('Verifique as configurações da requisição');
      }

      return request;
    }, undefined);
    axios.interceptors.response.use(undefined, function (error) {
      if (!(error instanceof TypeError)) {
        throw new KlingoError(error);
      }

      throw error;
    });
  }

  (0, _createClass2["default"])(Api, [{
    key: "get",
    value: function get() {
      return axios.get.apply(axios, arguments);
    }
  }, {
    key: "post",
    value: function post() {
      return axios.post.apply(axios, arguments);
    }
  }, {
    key: "put",
    value: function put() {
      return axios.put.apply(axios, arguments);
    }
  }, {
    key: "patch",
    value: function patch() {
      return axios.patch.apply(axios, arguments);
    }
  }, {
    key: "delete",
    value: function _delete() {
      return axios["delete"].apply(axios, arguments);
    }
  }]);
  return Api;
}();

module.exports = {
  Api: Api
};
//# sourceMappingURL=api.js.map
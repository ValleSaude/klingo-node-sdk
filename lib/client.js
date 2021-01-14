"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _require = require('./resources/external'),
    External = _require.External;

var _require2 = require('./resources/schedule'),
    Schedule = _require2.Schedule;

var _require3 = require('./resources/patient'),
    Patient = _require3.Patient;

var _require4 = require('./resources/checkin'),
    Checkin = _require4.Checkin;

var _require5 = require('./resources/verify'),
    Verify = _require5.Verify;

var logger = require('./logger');

var getBaseUrl = require('./utils').getBaseUrl;

var validate = require('./validate');

var Client = function Client(options) {
  (0, _classCallCheck2["default"])(this, Client);

  if (!validate.client(options)) {
    throw new TypeError('Erro ao conectar com klingo! Verifique as configurações');
  }

  var log = {
    log: function log() {},
    info: function info() {},
    error: function error() {},
    success: function success() {}
  };

  if (options.debug) {
    log = logger(options.log, options.debug);
  }

  var config = {
    /*       logger: log,
          env: options.env, */
    base: {
      "default": getBaseUrl(options.env, 'default')
    },
    headers: {
      'Access-Control-Allow-Methods': 'POST, GET, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-APP-TOKEN': options.xAppToken
    }
    /*       transform: (body, response, resolveWithFullResponse) => {
            let status = response.statusCode <= 200 ? "success" : "error";
    
            if (response.statusCode <= 200) {
              log.info({
                statusCode: response.statusCode,
                statusMessage: response.statusMessage,
                status,
                content: body
              });
            } else {
              content = content.errors.error;
              log.error({
                statusCode: response.statusCode,
                statusMessage: response.statusMessage,
                status,
                content: body
              });
            }
    
            return {
              statusCode: response.statusCode,
              status,
              content: body
            };
          } */

  };
  this.verify = new Verify(this, config);
  this.external = new External(this, config);
  this.patient = new Patient(this, config);
  this.schedule = new Schedule(this, config);
  this.checkin = new Checkin(this, config);
};

module.exports = {
  Client: Client
};
//# sourceMappingURL=client.js.map
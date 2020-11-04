"use strict";

var config = require('./config');

var getBaseUrl = function getBaseUrl() {
  var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sandbox';
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  return config[path][env];
};

module.exports = {
  getBaseUrl: getBaseUrl
};
"use strict";

var winston = require('winston');

var createLogger = winston.createLogger,
    format = winston.format,
    transports = winston.transports;
var combine = format.combine,
    timestamp = format.timestamp,
    prettyPrint = format.prettyPrint;

module.exports = function (filename, debug) {
  var logger = createLogger({
    format: combine(timestamp(), format.json()),
    transports: [new transports.File({
      filename: filename
    })]
  });

  if (debug && process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
      format: combine(prettyPrint(10, true))
    }));
  }

  return logger;
};
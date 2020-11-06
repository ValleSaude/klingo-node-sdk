const { KlingoError } = require('../../error/index');

const responseErrorHandler = async error => {
  if (!(error instanceof TypeError)) {
    throw new KlingoError(error);
  }
  return error;
};

module.exports = { responseErrorHandler };

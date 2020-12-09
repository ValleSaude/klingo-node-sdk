const { KlingoError } = require('../../error/klingo-error');

const responseErrorHandler = async (error) => {
  if (!(error instanceof TypeError)) {
    throw new KlingoError(error);
  }
  return error;
};

module.exports = { responseErrorHandler };

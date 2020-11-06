const errors = require('./errors')

class KlingoError {
  constructor(error) {
    if (error.response && error.response == "Unauthorized") {
      error.response = [
        {
          code: 401,
          message: "Unauthorized"
        }
      ];
    } else if (error.response && error.response.statusCode === 419) {
      error.response = error.response.data;
    }

    Error.captureStackTrace(this, this.constructor);
    this.name = 'KlingoError';

    this.status = error.status || 'error';
    this.statusCode = error.statusCode || 500;
    this.response = error.response || null;

    if (error.response) {
      const localeError = (error) => {
        return {
          ...error,
          message: errors[error.code] || error.message
        };
      };

      if (Array.isArray(error.response)) {
        this.response = error.response.map(localeError);
      } else if (error.response.code) {
        this.response = [localeError(error.response)];
      }
    }
  }
}

module.exports = { KlingoError }

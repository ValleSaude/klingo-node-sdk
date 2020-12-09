class KlingoError {
  constructor(error) {
    if (error.isAxiosError) {
      this.status = error.response.statusText;
      this.statusCode = error.response.status;
      this.message = error.response.data;
      return;
    }

    if (error.message == 'Unauthorized') {
      error.statusCode = 401;
    }

    Error.captureStackTrace(this, this.constructor);
    this.status = error.status || 'error';
    this.statusCode = error.statusCode || 500;
    this.message = error.message || null;
  }
}

module.exports = { KlingoError };

const config = require('../config');
const axios = require('axios').default;

class Checkin {
  constructor(client, options) {
    this.client = client;
    this.options = options;
  }

  async confirm(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const { data } = await axios.post(
      `${opts.base.default}/${config.checkin}`,
      {
        headers,
        body
      }
    );
    return data;
  }

  async cancel(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };

    const { data } = await axios.delete(
      `${opts.base.default}/${config.checkin}`,
      {
        headers,
        body
      }
    );
    return data;
  }
}

module.exports = { Checkin };

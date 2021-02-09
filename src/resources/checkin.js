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

    const endpoint = `${this.options.base.default}/${config.checkin}`;
    const response = await axios.post(endpoint, body, { headers });
    return response.data;
  }

  async cancel(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.checkin}`;
    const response = await axios.delete(endpoint, { data: body, headers });
    return response.data;
  }
}

module.exports = { Checkin };

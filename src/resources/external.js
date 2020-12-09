const config = require('../config');
const moment = require('moment');
const axios = require('axios').default;

class External {
  constructor(client, options) {
    this.client = client;
    this.options = options;
  }

  async register(body) {
    const headers = this.options.headers;
    const endpoint = `${this.options.base.default}/${config.external.register}`;
    const response = await axios.post(endpoint, body, { headers });
    return response.data;
  }

  async authenticate(body) {
    const headers = this.options.headers;
    const endpoint = `${this.options.base.default}/${config.external.authenticate}`;
    const { data } = await axios.post(endpoint, body, { headers });
    this.options.authentication = {
      ...data,
      expires: moment().add(data.expires_in, 'seconds')
    };
    return this.options.authentication;
  }
}

module.exports = { External };

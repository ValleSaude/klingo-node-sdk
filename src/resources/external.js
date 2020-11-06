const config = require("../config");
const moment = require('moment');
const axios = require("axios").default;

class External {
  constructor(client, options) {
    this.client = client;
    this.options = options;
  }

  async register(body) {
    const endpoint = `${this.options.base.default}/${config.external.register}`;
    const response = await axios.post(endpoint, body, this.options);
    return response.data;
  }

  async authenticate(body) {
    const endpoint = `${this.options.base.default}/${config.external.authenticate}`;
    const options = {
      headers: this.options.headers
    }
    const response = await axios.post(endpoint, body, options);
    const authentication = {
      ...response.data,
      expires: moment().add(response.data.expires_in, 'seconds')
    };
    this.options.authentication = authentication;
    return authentication;
  }
}

module.exports = { External };

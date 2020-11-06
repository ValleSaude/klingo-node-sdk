const config = require("../config");
const axios = require("axios").default;

class Verify {
  constructor(client, options) {
    this.client = client;
    this.options = options;
  }

  async get() {
    this.options.headers['Content-Type'] = 'application/json; charset=UTF-8';
    const response = await axios.get(`${this.options.base.default}/${config.verify}`, this.options);
    return response.data;
  };
}

module.exports = { Verify };

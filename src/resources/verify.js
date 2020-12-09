const config = require("../config");
const axios = require("axios").default;

class Verify {
  constructor(client, options) {
    this.client = client;
    this.options = options;
  }

  async get() {
    const { data } = await axios.get(`${this.options.base.default}/${config.verify}`);
    return data;
  };
}

module.exports = { Verify };

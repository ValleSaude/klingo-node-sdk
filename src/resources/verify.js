const config = require('../config');
const {Api} = require('../api/api');
class Verify {
  constructor(client, options) {
    this.client = client;
    this.options = options;
    this.api = new Api();
  }

  async get() {
    const { data } = await this.api.get(
      `${this.options.base.default}/${config.verify}`
    );
    return data;
  }
}

module.exports = { Verify };

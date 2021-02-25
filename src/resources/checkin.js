const config = require('../config');
const {Api} = require('../api/api');

class Checkin {
  constructor(client, options) {
    this.client = client;
    this.options = options;
    this.api = new Api();
  }

  async confirm(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    
    const { data } = await this.api.post(
      `${this.options.base.default}/${config.checkin}`,
      body,
      {
        headers
      }
    );
    return data;
  }

  async cancel(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    
    const {data} = await this.api.delete(
      `${this.options.base.default}/${config.checkin}`, {data: body, headers}
    );

    return data;
  }
}

module.exports = { Checkin };

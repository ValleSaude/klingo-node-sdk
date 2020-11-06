const axios = require("axios").default;
const config = require("../config");

class Patient {
  constructor(client, options) {
    this.client = client;
    this.options = options;
  }

  async get() {
    options.headers['Authorization'] = `${this.options.authentication.token_type} ${this.options.authentication.access_token}`;
    const endpoint = `${this.options.base.default}/${config.patient.get}`;
    const response = await axios.get(endpoint, this.options);

    return response.data;
  }

  async update(body) {
    options.headers['Authorization'] = `${this.options.authentication.token_type} ${this.options.authentication.access_token}`;
    const response = await axios.put(`${this.options.base.default}/${config.patient.get}`, body, this.options);
    return response.data;
  }

  async listHealthInsurance(options) {
    options.headers['Authorization'] = `${this.options.authentication.token_type} ${this.options.authentication.access_token}`;
    const endpoint = `${this.options.base.default}/${config.patient.healthInsurance}`;
    const response = await axios.get(endpoint, this.options);

    return response.data;
  }
}

module.exports = { Patient };

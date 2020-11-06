const axios = require("axios").default;
const config = require("../config");

class Schedule {
  constructor(client, options) {
    this.client = client;
    this.options = options;
  }

  async getAvailableTimes(queryString) {
    options.headers['Authorization'] = `${this.options.authentication.token_type} ${this.options.authentication.access_token}`;
    const response = await axios.get(
      `${this.options.base.default}/${config.schedule.available}`,
      {
        ...this.options,
        params: queryString
      }
    );

    return response.data;
  };

  async listServices() {
    options.headers['Authorization'] = `${this.options.authentication.token_type} ${this.options.authentication.access_token}`;
    const endpoint = `${this.options.base.default}/${config.schedule.services}`;
    const response = await axios.get(endpoint, this.options);
    return response.data;
  };

  async listSpecialties() {
    options.headers['Authorization'] = `${this.options.authentication.token_type} ${this.options.authentication.access_token}`;
    const endpoints = `${this.options.base.default}/${config.schedule.specialties}`;
    const response = await axios.get(endpoints, this.options);
    return response.data;
  };

  async listExams() {
    options.headers['Authorization'] = `${this.options.authentication.token_type} ${this.options.authentication.access_token}`;
    const endpoint = `${this.options.base.default}/${config.schedule.exams}`;
    const response = await axios.get(endpoint, this.options);
    return response.data;
  };

  async confirm(body) {
    options.headers['Authorization'] = `${this.options.authentication.token_type} ${this.options.authentication.access_token}`;
    const endpoint = `${this.options.base.default}/${config.schedule.confirm}`;
    const response = await axios.post(endpoint, body, this.options);
    return response.data;
  };

  async listVouchers() {
    options.headers['Authorization'] = `${this.options.authentication.token_type} ${this.options.authentication.access_token}`;
    const endpoint = `${this.options.base.default}/${config.schedule.vouchers}`;
    const response = await axios.get(endpoint, this.options);
    return response.data;
  };

  async cancelVoucher(body) {
    options.headers['Authorization'] = `${this.options.authentication.token_type} ${this.options.authentication.access_token}`;

    const response = await axios.delete(
      `${this.options.base.default}/${config.schedule.voucher}`,
      {
        ...options,
        body,
      }
    );

    return response.data;
  };
}


module.exports = { Schedule };

const axios = require("axios").default;
const config = require("../config");

class Schedule {
  constructor(client, options) {
    this.client = client;
    this.options = options;
  }

  async getAvailableTimes(queryString) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const response = await axios.get(
      `${this.options.base.default}/${config.schedule.available}`,
      {
        headers,
        params: queryString
      }
    );

    return response.data;
  };

  async listServices() {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.schedule.services}`;
    const response = await axios.get(endpoint, { headers });
    return response.data;
  };

  async listSpecialties() {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoints = `${this.options.base.default}/${config.schedule.specialties}`;
    const response = await axios.get(endpoints, { headers });
    return response.data;
  };

  async listExams() {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.schedule.exams}`;
    const response = await axios.get(endpoint, { headers });
    return response.data;
  };

  async confirm(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.schedule.confirm}`;
    const response = await axios.post(endpoint, body, { headers });
    return response.data;
  };

  async listVouchers() {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.schedule.vouchers}`;
    const response = await axios.get(endpoint, { headers });
    return response.data;
  };

  async cancelVoucher(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };

    const response = await axios.delete(
      `${this.options.base.default}/${config.schedule.voucher}`,
      {
        headers,
        body,
      }
    );

    return response.data;
  };
}


module.exports = { Schedule };

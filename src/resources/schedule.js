const config = require('../config');
const {Api} = require('../api/api');
class Schedule {
  constructor(client, options) {
    this.client = client;
    this.options = options;
    this.api = new Api();
  }

  async getAvailableTimes(queryString) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const response = await this.api.get(
      `${this.options.base.default}/${config.schedule.available}`,
      {
        headers,
        params: queryString
      }
    );

    return response.data;
  }

  async getRequest(queryString) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const response = await this.api.get(
      `${this.options.base.default}/${config.schedule.request}`,
      {
        headers,
        params: queryString
      }
    );

    return response.data;
  }

  async listServices() {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.schedule.services}`;
    const response = await this.api.get(endpoint, { headers });
    return response.data;
  }

  async listSpecialties() {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoints = `${this.options.base.default}/${config.schedule.specialties}`;
    const response = await this.api.get(endpoints, { headers });
    return response.data;
  }

  async listExams() {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.schedule.exams}`;
    const response = await this.api.get(endpoint, { headers });
    return response.data;
  }

  async confirm(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.schedule.confirm}`;
    const response = await this.api.post(endpoint, body, { headers });
    return response.data;
  }

  async book(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.schedule.book}`;
    const response = await this.api.post(endpoint, body, { headers });
    return response.data;
  }

  async listVouchers() {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.schedule.vouchers}`;
    const response = await this.api.get(endpoint, { headers });
    return response.data;
  }

  async cancelVoucher(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };

    const response = await this.api.delete(
      `${this.options.base.default}/${config.schedule.voucher}`, {data: body, headers}
    );

    return response.data;
  }

  async changeVoucher(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };

    const response = await this.api.put(
      `${this.options.base.default}/${config.schedule.procedure}`, {data: body, headers}
    );

    return response.data;
  }

  async listProfessionals(queryString) {
    const headers = this.options.headers;
    const response = await this.api.get(
      `${this.options.base.default}/${config.schedule.serviceProviders}`,
      {
        headers,
        params: queryString
      }
    );

    return response.data;
  }

}

module.exports = { Schedule };

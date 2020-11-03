const request = require("request-promise");
const config = require("../config");
const validate = require("../validate");
const KlingoError = require("../Error");

const getAvailableTimes = async (opts, params) => {
  /**
  * Validate opts
  */
  if (!validate.authenticated(opts)) {
    throw new TypeError(
      "Verifique as configurações da requisição"
    );
  }

  try {
    opts.headers['Authorization'] = `${opts.authentication.token_type} ${opts.authentication.access_token}`;

    const response = await request({
      ...opts,
      qs: params,
      url: `${opts.base.default}/${config.schedule.available}`,
      method: "GET"
    });

    return {
      ...response,
      content: JSON.parse(response.content)
    };
  } catch (e) {
    console.log(e)
    const error = { ...e.response };

    if (error.content && error.content == "Unauthorized") {
      error.content = [
        {
          code: 401,
          message: "Unauthorized"
        }
      ];
    } else if (e.response && e.response.statusCode === 419) {
      error.content = e.response.body;
    } else {
      error.content = JSON.parse(e.response.body);
    }

    throw new KlingoError(error);
  }
};

const listServices = async (opts) => {
  /**
  * Validate opts
  */
  if (!validate.authenticated(opts)) {
    throw new TypeError(
      "Verifique as configurações da requisição"
    );
  }

  try {
    opts.headers['Authorization'] = `${opts.authentication.token_type} ${opts.authentication.access_token}`;

    const response = await request({
      ...opts,
      url: `${opts.base.default}/${config.schedule.services}`,
      method: "GET"
    });

    return {
      ...response,
      content: JSON.parse(response.content)
    };
  } catch (e) {
    console.log(e)
    const error = { ...e.response };

    if (error.content && error.content == "Unauthorized") {
      error.content = [
        {
          code: 401,
          message: "Unauthorized"
        }
      ];
    } else if (e.response && e.response.statusCode === 419) {
      error.content = e.response.body;
    } else {
      error.content = JSON.parse(e.response.body);
    }

    throw new KlingoError(error);
  }
};

const listSpecialties = async (opts) => {
  /**
  * Validate opts
  */
  if (!validate.authenticated(opts)) {
    throw new TypeError(
      "Verifique as configurações da requisição"
    );
  }

  try {
    opts.headers['Authorization'] = `${opts.authentication.token_type} ${opts.authentication.access_token}`;

    const response = await request({
      ...opts,
      url: `${opts.base.default}/${config.schedule.specialties}`,
      method: "GET"
    });

    return {
      ...response,
      content: JSON.parse(response.content)
    };
  } catch (e) {
    console.log(e)
    const error = { ...e.response };

    if (error.content && error.content == "Unauthorized") {
      error.content = [
        {
          code: 401,
          message: "Unauthorized"
        }
      ];
    } else if (e.response && e.response.statusCode === 419) {
      error.content = e.response.body;
    } else {
      error.content = JSON.parse(e.response.body);
    }

    throw new KlingoError(error);
  }
};

const listExams = async (opts) => {
  /**
  * Validate opts
  */
  if (!validate.authenticated(opts)) {
    throw new TypeError(
      "Verifique as configurações da requisição"
    );
  }

  try {
    opts.headers['Authorization'] = `${opts.authentication.token_type} ${opts.authentication.access_token}`;

    const response = await request({
      ...opts,
      url: `${opts.base.default}/${config.schedule.exams}`,
      method: "GET"
    });

    return {
      ...response,
      content: JSON.parse(response.content)
    };
  } catch (e) {
    console.log(e)
    const error = { ...e.response };

    if (error.content && error.content == "Unauthorized") {
      error.content = [
        {
          code: 401,
          message: "Unauthorized"
        }
      ];
    } else if (e.response && e.response.statusCode === 419) {
      error.content = e.response.body;
    } else {
      error.content = JSON.parse(e.response.body);
    }

    throw new KlingoError(error);
  }
};

module.exports = {
  getAvailableTimes,
  listServices,
  listSpecialties,
  listExams,
};

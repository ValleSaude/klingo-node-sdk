const request = require("request-promise");
const config = require("../config");
const validate = require("../validate");
const KlingoError = require("../Error");

const confirm = async (opts, params) => {
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
      url: `${opts.base.default}/${config.checkin}`,
      body: JSON.stringify(params),
      method: "POST"
    });

    return {
      ...response,
      content: JSON.parse(response.content)
    };
  } catch (e) {
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
      try {
        error.content = JSON.parse(e.response.body);
      } catch (er) {
        error.content = [
          {
            code: 500,
            message: e.response.body
          }
        ];
      }
    }

    throw new KlingoError(error);
  }
};

const cancel = async (opts, params) => {
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
      url: `${opts.base.default}/${config.checkin}`,
      body: JSON.stringify(params),
      method: "DELETE"
    });

    return {
      ...response,
      content: JSON.parse(response.content)
    };
  } catch (e) {
    console.log(e);
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
      try {
        error.content = JSON.parse(e.response.body);
      } catch (er) {
        error.content = [
          {
            code: 500,
            message: e.response
          }
        ];
      }
    }

    throw new KlingoError(error);
  }
};

module.exports = {
  confirm,
  cancel,
};

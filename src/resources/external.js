const request = require("request-promise");
const config = require("../config");
const KlingoError = require("../Error");
const moment = require('moment');

const register = async (opts, params) => {
  try {
    const response = await request({
      ...opts,
      url: `${opts.base.default}/${config.external.register}`,
      method: "POST",
      body: JSON.stringify(params)
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
    } else {
      error.content = JSON.parse(e.response.body);
    }

    throw new KlingoError(error);
  }
};

const authenticate = async (opts, params) => {
  try {
    const response = await request({
      ...opts,
      url: `${opts.base.default}/${config.external.authenticate}`,
      method: "POST",
      body: JSON.stringify(params)
    });

    const content = JSON.parse(response.content);
    const authentication = { ...content, expires: moment().add(content.expires_in, 'seconds') };

    opts.authentication = authentication;

    return {
      ...response,
      content,
      authentication
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
    } else if (e.response.statusCode === 419) {
      error.content = e.response.body;
    } else {
      error.content = JSON.parse(e.response.body);
    }

    throw new KlingoError(error);
  }
};

module.exports = {
  register,
  authenticate
};

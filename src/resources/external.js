const request = require("request-promise");
const config = require("../config");
const KlingoError = require("../Error");

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
    }

    throw new KlingoError(error);
  }
};

module.exports = {
  register
};

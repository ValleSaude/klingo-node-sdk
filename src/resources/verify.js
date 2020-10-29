const request = require("request-promise");
const config = require("../config");
const KlingoError = require("../Error");

const get = async opts => {
  try {
    opts.headers['Content-Type'] = 'text/html; charset=UTF-8';
    const response = await request({
      ...opts,
      url: `${opts.base.default}/${config.verify}`,
      method: "GET"
    });

    return {
      ...response
    };
  } catch (e) {
    const error = { ...e.response };
    throw new KlingoError(error);
  }
};

module.exports = {
  get
};

const { External } = require('./resources/external');
const { Schedule } = require('./resources/schedule');
const { Patient } = require('./resources/patient');
const { Checkin } = require('./resources/checkin');
const { Verify } = require('./resources/verify');
const logger = require("./logger");
const getBaseUrl = require("./utils").getBaseUrl;
const validate = require("./validate");

class Client {
  constructor(options) {
    if (!validate.client(options)) {
      throw new TypeError("Erro ao conectar com klingo! Verifique as configurações");
    }

    let log = {
      log: () => { },
      info: () => { },
      error: () => { },
      success: () => { }
    };

    if (options.debug) {
      log = logger(options.log, options.debug);
    }

    const config = {
      /*       logger: log,
            env: options.env, */
      base: {
        default: getBaseUrl(options.env, "default")
      },
      headers: {
        'Access-Control-Allow-Methods': 'POST, GET, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "X-APP-TOKEN": options.xAppToken
      },
      /*       transform: (body, response, resolveWithFullResponse) => {
              let status = response.statusCode <= 200 ? "success" : "error";
      
              if (response.statusCode <= 200) {
                log.info({
                  statusCode: response.statusCode,
                  statusMessage: response.statusMessage,
                  status,
                  content: body
                });
              } else {
                content = content.errors.error;
                log.error({
                  statusCode: response.statusCode,
                  statusMessage: response.statusMessage,
                  status,
                  content: body
                });
              }
      
              return {
                statusCode: response.statusCode,
                status,
                content: body
              };
            } */
    };

    this.verify = new Verify(this, config);
    this.external = new External(this, config);
    this.patient = new Patient(this, config);
    this.schedule = new Schedule(this, config);
    this.checkin = new Checkin(this, config);
  }
}

module.exports = { Client };

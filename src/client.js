const logger = require("./logger");
const getBaseUrl = require("./utils").getBaseUrl;
const validate = require("./validate");
const resources = require("./resources");

module.exports = params => {
    /**
     * Validate params
     */
    if (!validate.client(params)) {
        throw new TypeError(
            "Erro ao conectar com klingo! Verifique as configurações"
        );
    }

    /**
     * Log
     */
    let log = {
        log: () => { },
        info: () => { },
        error: () => { },
        success: () => { }
    };

    if (params.debug) {
        log = logger(params.log, params.debug);
    }

    /**
     * Config
     */
    const config = {
        logger: log,
        env: params.env,
        base: {
            default: getBaseUrl(params.env, "default")
        },
        headers: {
            "Content-Type": "application/json",
            "X-APP-TOKEN": params.xAppToken
        },
        transform: (body, response, resolveWithFullResponse) => {
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
        }
    };

    /**
     * Resources
     */
    const rs = {};
    Object.keys(resources).forEach(i => {
        rs[i] = { ...resources[i] };
        Object.keys(rs[i]).forEach(r => {
            if (validate.isFunction(rs[i][r])) {
                rs[i][r] = rs[i][r].bind(null, config);
            }
        });
    });

    return rs;
};

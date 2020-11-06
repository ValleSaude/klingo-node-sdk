const validate = require('../../validate');

const requestHandler = async value => {
  if (!validate.authenticated(value)) {
    throw new TypeError("Verifique as configurações da requisição");
  }
  return value;
};

module.exports = { requestHandler };

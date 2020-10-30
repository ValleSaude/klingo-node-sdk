module.exports = {
  default: {
    production: "https://api-externa.klingo.app/api",
    sandbox: "https://api-externa.klingo.app/api",
  },
  verify: "live",
  external: {
    register: "externo/register",
    authenticate: "externo/login",
  },
};

const config = require("./config");
const klingo = require("../src");

const externaltests = () => {
  describe('Authenticate', () => {
    it("success with correct data input", async () => {
      const client = new klingo.Client(config.klingo);
      const patient = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });

      expect(typeof patient).toEqual("object");
      expect(patient).toBeDefined();
      expect(patient).toHaveProperty("access_token");
      expect(patient).toHaveProperty("expires_in");
      expect(patient).toHaveProperty("token_type");
    });

    it("error with incorrect data input", async () => {
      try {
        const client = new klingo.Client(config.klingo);
        const patient = await client.external.authenticate({
          id: config.patient_id_wrong.id,
          login: config.klingo.login,
          senha: config.klingo.password
        });
      } catch (error) {
        expect(error).toBeDefined();
        expect(typeof error).toEqual("KlingoError");
        expect(error).toHaveProperty("status", "error");
        expect(error).toHaveProperty("statusCode", 419);
      }
    });
  });

};

describe('External', externaltests);

module.exports = externaltests;

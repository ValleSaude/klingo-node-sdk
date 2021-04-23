const config = require('./config');
const klingo = require('../src');
const klingoAPI = require('./klingo-api')

const externaltests = () => {

  describe('Authenticate', () => {

    const apiPath = klingoAPI;
    let Swagmock = require('swagmock');
    let mockgen = Swagmock(apiPath);
    

    it('success with correct data input', async () => {
      let patient;

      await mockgen.responses({
        path: '/externo/login',
        operation: 'post',
        response: 200
      }).then(function (res) {
        patient = res.responses;
      });

      expect(typeof patient).toEqual('object');
      expect(patient).toBeDefined();
      expect(patient).toHaveProperty('access_token');
      expect(patient).toHaveProperty('expires_in');
      expect(patient).toHaveProperty('token_type');
    });

    it('error with incorrect data input', async () => {
      try {
        const client = new klingo.Client(config.klingo);
        const patient = await client.external.authenticate({
          id: config.patient_id_wrong.id,
          login: config.klingo.login,
          senha: config.klingo.password
        });
      } catch (error) {
        console.log(error)
        expect(error).toBeDefined();
        expect(error).toHaveProperty('status', 'unknown status');
        expect(error).toHaveProperty('statusCode', 419);
      }
    });
  });
};

describe('External', externaltests);

module.exports = externaltests;

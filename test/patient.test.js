const config = require('./config');
const klingo = require('../src');

const patienttests = () => {
  describe('Get', () => {
    it('success', async () => {
      const client = new klingo.Client(config.klingo);
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const patient = await client.patient.get();

      expect(typeof patient).toEqual('object');
      expect(patient).toBeDefined();
      expect(patient.nome.toUpperCase()).toEqual('Rafael da Mata Neri'.toUpperCase());
    });

    it('Error to get without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const patient = await client.patient.get();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError);
      }
    });
  });

  describe('Update', () => {
    it('success', async () => {
      const client = new klingo.Client(config.klingo);
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const patient = await client.patient.update(config.patient_update);

      expect(typeof patient).toEqual('object');
      expect(patient).toBeDefined();
      expect(patient.nome).toEqual(config.patient_update.nome);
    });

    it('Error to update without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const patient = await client.patient.update(config.patient_update);
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError);
      }
    });
  });

  describe('List health insurance', () => {
    it('success', async () => {
      const client = new klingo.Client(config.klingo);
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const healthInsurance = await client.patient.listHealthInsurance();

      expect(typeof healthInsurance).toEqual('object');
      expect(healthInsurance).toBeDefined();
      expect(Array.isArray(healthInsurance)).toEqual(true);
    });

    it('Error to list health insurance without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const healthInsurance = await client.patient.listHealthInsurance();
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError);
      }
    });
  });
};

describe('Patient', patienttests);

module.exports = patienttests;

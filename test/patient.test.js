const config = require('./config')
const klingo = require('../src')

const patienttests = () => {

  describe('Get', function () {
    it('success', async function () {
      const client = new klingo.Client(config.klingo)
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const patient = await client.patient.get();

      expect(typeof patient).toEqual("object");
      expect(patient).toHaveProperty("content");
      expect(patient.content.nome).toEqual('RAFAEL DA MATA NERI');
    })

    it('Error to get without authentication', async function () {
      const client = new klingo.Client(config.klingo)
      try {
        const patient = await client.patient.get();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })

  describe('Update', function () {
    it('success', async function () {
      const client = new klingo.Client(config.klingo)
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const patient = await client.patient.update(config.patient_update);

      expect(typeof patient).toEqual("object");
      expect(patient).toHaveProperty("content");
      expect(patient.content.nome).toEqual(config.patient_update.nome.toUpperCase());
    })

    it('Error to update without authentication', async function () {
      const client = new klingo.Client(config.klingo)
      try {
        const patient = await client.patient.update(config.patient_update);
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })

  describe('List health insurance', function () {
    it('success', async function () {
      const client = new klingo.Client(config.klingo)
      const authentication = await client.external.authenticate({ id: config.patient_id.id, login: config.klingo.login, senha: config.klingo.password });
      const healthInsurance = await client.patient.listHealthInsurance();

      expect(typeof healthInsurance).toEqual("object");
      expect(healthInsurance).toHaveProperty("content");
      expect(Array.isArray(healthInsurance.content)).toEqual(true);
    })

    it('Error to list health insurance without authentication', async function () {
      const client = new klingo.Client(config.klingo)
      try {
        const healthInsurance = await client.patient.listHealthInsurance();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })

}

describe('Patient', patienttests)

module.exports = patienttests;

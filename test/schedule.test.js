const config = require("./config");
const klingo = require("../src");

const scheduletests = () => {

  describe('Query available times', function () {
    it('success', async function () {
      const client = klingo.client(config.klingo)
      const authentication = await client.external.authenticate({ id: config.patient_id.id, login: config.klingo.login, senha: config.klingo.password });
      const available = await client.schedule.getAvailableTimes(config.available);

      expect(typeof available).toEqual("object");
      expect(available).toHaveProperty("content");
      expect(available.content.procedimento).toEqual(1027);
    })

    it('Error to get without authentication', async function () {
      const client = klingo.client(config.klingo)
      try {
        const available = await client.schedule.getAvailableTimes();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })

  describe('Query available services on the establishment', function () {
    it('success', async function () {
      const client = klingo.client(config.klingo)
      const authentication = await client.external.authenticate({ id: config.patient_id.id, login: config.klingo.login, senha: config.klingo.password });
      const services = await client.schedule.listServices();

      expect(typeof services).toEqual("object");
      expect(services).toHaveProperty("content");

      expect(Array.isArray(services.content)).toEqual(true);
    })

    it('Error to get without authentication', async function () {
      const client = klingo.client(config.klingo)
      try {
        const available = await client.schedule.listServices();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })

  describe('Query available specialties on the establishment', function () {
    it('success', async function () {
      const client = klingo.client(config.klingo)
      const authentication = await client.external.authenticate({ id: config.patient_id.id, login: config.klingo.login, senha: config.klingo.password });
      const specialties = await client.schedule.listSpecialties();

      expect(typeof specialties).toEqual("object");
      expect(specialties).toHaveProperty("content");

      expect(Array.isArray(specialties.content)).toEqual(true);
    })

    it('Error to get without authentication', async function () {
      const client = klingo.client(config.klingo)
      try {
        const specialties = await client.schedule.listSpecialties();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })

  describe('Query available exams on the establishment', function () {
    it('success', async function () {
      const client = klingo.client(config.klingo)
      const authentication = await client.external.authenticate({ id: config.patient_id.id, login: config.klingo.login, senha: config.klingo.password });
      const exams = await client.schedule.listExams();

      expect(typeof exams).toEqual("object");
      expect(exams).toHaveProperty("content");

      expect(Array.isArray(exams.content)).toEqual(true);
    })

    it('Error to get without authentication', async function () {
      const client = klingo.client(config.klingo)
      try {
        const exams = await client.schedule.listExams();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })
}

describe('Schedule', scheduletests)

module.exports = scheduletests;

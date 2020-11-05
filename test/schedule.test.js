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
      expect(available.content.procedimento).toEqual(config.confirm.procedimento);
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

  describe('Confirm appointment', function () {
    it('success', async function () {
      const client = klingo.client(config.klingo)
      const authentication = await client.external.authenticate({ id: config.patient_id.id, login: config.klingo.login, senha: config.klingo.password });
      const available = await client.schedule.getAvailableTimes(config.available);
      const confirm = await client.schedule.confirm({
        "procedimento": available.content.procedimento,
        "id": Object.keys(available.content.horarios[0].horarios)[0],
      });

      expect(typeof confirm).toEqual("object");
      expect(confirm).toHaveProperty("content");
    })

    it('Error to get without authentication', async function () {
      const client = klingo.client(config.klingo)
      try {
        const confirm = await client.schedule.confirm();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })

  describe('List vouchers', function () {
    it('success', async function () {
      const client = klingo.client(config.klingo)
      const authentication = await client.external.authenticate({ id: config.patient_id.id, login: config.klingo.login, senha: config.klingo.password });
      const results = await client.schedule.listVouchers();

      expect(typeof results).toEqual("object");
      expect(results).toHaveProperty("content");
      expect(Array.isArray(results.content)).toEqual(true);
    })

    it('Error to list health insurance without authentication', async function () {
      const client = klingo.client(config.klingo)
      try {
        const results = await client.schedule.listVouchers();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })

  describe('Delete vouchers', function () {
    it('success', async function () {
      const client = klingo.client(config.klingo)
      const authentication = await client.external.authenticate({ id: config.patient_id.id, login: config.klingo.login, senha: config.klingo.password });
      const results = await client.schedule.listVouchers();
      const cancel = await client.schedule.cancelVoucher({ id: results.content[0].id });

      expect(typeof cancel).toEqual("object");
      expect(cancel).toHaveProperty("content");
    })

    it('Error to list health insurance without authentication', async function () {
      const client = klingo.client(config.klingo)
      try {
        const results = await client.schedule.cancelVoucher();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })

}

describe('Schedule', scheduletests)

module.exports = scheduletests;

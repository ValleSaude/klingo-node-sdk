const config = require('./config');
const klingo = require('../src');

const scheduletests = () => {
  describe('Query available times', () => {
    it('success', async () => {
      const client = new klingo.Client(config.klingo);
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const available = await client.schedule.getAvailableTimes(
        config.available
      );

      expect(typeof available).toEqual('object');
      expect(available).toBeDefined();
      expect(available.procedimento).toEqual(config.confirm.procedimento);
    });

    it('Error to get without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const available = await client.schedule.getAvailableTimes();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError);
      }
    });
  });

  describe('Query available services on the establishment', () => {
    it('success', async () => {
      const client = new klingo.Client(config.klingo);
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const services = await client.schedule.listServices();

      expect(typeof services).toEqual('object');
      expect(services).toBeDefined();

      expect(Array.isArray(services)).toEqual(true);
    });

    it('Error to get without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const available = await client.schedule.listServices();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError);
      }
    });
  });

  describe('Query available specialties on the establishment', () => {
    it('success', async () => {
      const client = new klingo.Client(config.klingo);
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const specialties = await client.schedule.listSpecialties();

      expect(typeof specialties).toEqual('object');
      expect(specialties).toBeDefined();

      expect(Array.isArray(specialties)).toEqual(true);
    });

    it('Error to get without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const specialties = await client.schedule.listSpecialties();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError);
      }
    });
  });

  describe('Query available exams on the establishment', () => {
    it('success', async () => {
      const client = new klingo.Client(config.klingo);
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const exams = await client.schedule.listExams();

      expect(typeof exams).toEqual('object');
      expect(exams).toBeDefined();

      expect(Array.isArray(exams)).toEqual(true);
    });

    it('Error to get without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const exams = await client.schedule.listExams();
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError);
      }
    });
  });

  describe('Confirm appointment', () => {
    it('success', async () => {
      const client = new klingo.Client(config.klingo);
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const available = await client.schedule.getAvailableTimes(
        config.available
      );
      const confirm = await client.schedule.confirm({
        procedimento: available.procedimento,
        id: Object.keys(available.horarios[0].horarios)[0]
      });

      expect(typeof confirm).toEqual('object');
      expect(confirm).toBeDefined();
    });

    it('Error to get without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const confirm = await client.schedule.confirm();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError);
      }
    });
  });

  describe('List vouchers', () => {
    it('success', async () => {
      const client = new klingo.Client(config.klingo);
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const results = await client.schedule.listVouchers();

      expect(typeof results).toEqual('object');
      expect(results).toBeDefined();
      expect(Array.isArray(results)).toEqual(true);
    });

    it('Error to list health insurance without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const results = await client.schedule.listVouchers();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError);
      }
    });
  });

  describe('Delete vouchers', () => {
    it('success', async () => {
      const client = new klingo.Client(config.klingo);
      const authentication = await client.external.authenticate({
        id: config.patient_id.id,
        login: config.klingo.login,
        senha: config.klingo.password
      });
      const results = await client.schedule.listVouchers();
      const cancel = await client.schedule.cancelVoucher({ id: results[0].id });

      expect(typeof cancel).toEqual('object');
      expect(cancel).toBeDefined();
    });

    it('Error to list health insurance without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const results = await client.schedule.cancelVoucher();
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError);
      }
    });
  });
};

describe('Schedule', scheduletests);

module.exports = scheduletests;

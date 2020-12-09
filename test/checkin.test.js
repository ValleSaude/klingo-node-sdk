const config = require('./config');
const klingo = require('../src');

const checkintests = () => {
  describe('Confirm check-in', () => {
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
      const checkin = await client.checkin.confirm({
        id: confirm.id
      });

      expect(typeof checkin).toEqual('object');
      expect(checkin).toBeDefined();
    });

    it('Error to get without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const confirm = await client.checkin.confirm();
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError);
      }
    });
  });

  describe('Cancel check-in', () => {
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
        id: Object.keys(
          available.horarios[available.horarios.length - 1].horarios
        )[0]
      });
      const checkin = await client.checkin.confirm({
        id: confirm.id
      });
      const cancel = await client.checkin.cancel({
        id: confirm.id
      });

      expect(typeof cancel).toEqual('object');
      expect(cancel).toBeDefined();
    });

    it('Error to get without authentication', async () => {
      const client = new klingo.Client(config.klingo);
      try {
        const cancel = await client.checkin.cancel();
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError);
      }
    });
  });
};

describe('Check-In', checkintests);

module.exports = checkintests;

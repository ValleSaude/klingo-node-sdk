const config = require("./config");
const klingo = require("../src");

const checkintests = () => {

  describe('Confirm check-in', function () {
    it('success', async function () {
      const client = klingo.client(config.klingo)
      const authentication = await client.external.authenticate({ id: config.patient_id.id, login: config.klingo.login, senha: config.klingo.password });
      const available = await client.schedule.getAvailableTimes(config.available);
      const confirm = await client.schedule.confirm({
        "procedimento": available.content.procedimento,
        "id": Object.keys(available.content.horarios[0].horarios)[0],
      });
      const checkin = await client.checkin.confirm({
        id: confirm.content.id
      });

      console.log(checkin)

      expect(typeof checkin).toEqual("object");
      expect(checkin).toHaveProperty("content");
    })

    it('Error to get without authentication', async function () {
      const client = klingo.client(config.klingo)
      try {
        const confirm = await client.checkin.confirm();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })

  describe('Cancel check-in', function () {
    it('success', async function () {
      const client = klingo.client(config.klingo)
      const authentication = await client.external.authenticate({ id: config.patient_id.id, login: config.klingo.login, senha: config.klingo.password });
      const available = await client.schedule.getAvailableTimes(config.available);
      const confirm = await client.schedule.confirm({
        "procedimento": available.content.procedimento,
        "id": Object.keys(available.content.horarios[available.content.horarios.length - 1].horarios)[0],
      });
      const checkin = await client.checkin.confirm({
        id: confirm.content.id
      });
      const cancel = await client.checkin.cancel({
        id: confirm.content.id
      });

      expect(typeof cancel).toEqual("object");
      expect(cancel).toHaveProperty("content");
    })

    it('Error to get without authentication', async function () {
      const client = klingo.client(config.klingo)
      try {
        const cancel = await client.checkin.cancel();
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError)
      }
    })
  })

}

describe('Check-In', checkintests)

module.exports = checkintests;

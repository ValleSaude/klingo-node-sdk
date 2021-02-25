const config = require('./config');
const klingo = require('../src');

const clienttests = () => {
  it('success', () => {
    const client = new klingo.Client(config.klingo);
    expect(typeof client).toEqual('object');
    expect(client).toHaveProperty('external');
    expect(client).toHaveProperty('verify');
  });

  it('throw if empty params', () => {
    try {
      new klingo.Client();
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
    }
  });

  it('throw if invalid params', () => {
    const configError = { ...config.klingo };
    delete configError.env;
    try {
      new klingo.Client(configError);
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
    }
  });

  it('error', async () => {
    try {
      const configError = {
        ...config.klingo,
        xAppToken: '',
        env: ''
      };
      const client = new klingo.Client(configError);
      const verify = await client.verify.get();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
};

describe('Client', clienttests);

module.exports = clienttests;

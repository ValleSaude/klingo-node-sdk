const config = require('./config');
const klingo = require('../src');

const verifytests = () => {
  it('success', async () => {
    const client = new klingo.Client(config.klingo);
    const verify = await client.verify.get();

    expect(verify).toBeDefined();
    expect(verify).toEqual('OK');
  });

  it('error', async () => {
    try {
      const configError = {
        ...config.klingo,
        xAppToken: ''
      };
      const client = new klingo.Client(configError);
      const verify = await client.verify.get();
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toHaveProperty('status', 'error');
      expect(error).toHaveProperty('statusCode', 500);
    }
  });
};

describe('Verify', verifytests);

module.exports = verifytests;

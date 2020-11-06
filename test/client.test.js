const config = require('./config')
const klingo = require('../src')

const clienttests = () => {
  it('success', function () {
    const client = new klingo.Client(config.klingo)
    expect(typeof client).toEqual('object')
    expect(client).toHaveProperty('external')
    expect(client).toHaveProperty('verify')
  })

  it('throw if empty params', function () {
    try {
      new klingo.Client()
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError)
    }
  })

  it('throw if invalid params', function () {
    const configError = { ...config.klingo };
    delete configError.env;
    try {
      new klingo.Client(configError)
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError)
    }
  })

}

describe('Client', clienttests)

module.exports = clienttests;

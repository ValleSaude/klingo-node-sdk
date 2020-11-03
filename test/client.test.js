const config = require('./config')
const klingo = require('../src')

const clienttests = () => {

    it('success', function () {
        const client = klingo.client(config.klingo)
        expect(typeof client).toEqual('object')
        expect(client).toHaveProperty('external')
        expect(client).toHaveProperty('verify')
    })

    it('throw if empty params', function () {
        try {
            klingo.client()
        } catch (e) {
            expect(e).toBeInstanceOf(TypeError)
        }
    })

    it('throw if invalid params', function () {
        const configError = { ...config.klingo }
        delete configError.env
        try {
            klingo.client(configError)
        } catch (e) {
            expect(e).toBeInstanceOf(TypeError)
        }
    })

}

describe('Client', clienttests)

module.exports = clienttests;

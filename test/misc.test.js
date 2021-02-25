const validate = require('../src/validate');


const misctests = () => {
    describe('Validate', () => {
        it('isNumber', async () => {
            expect(validate.isNumber(10)).toEqual(true);
            expect(validate.isNumber('20')).toEqual(false);
        });

        it('isEmail', async () => {
            expect(validate.isEmail('rafael.neri@gmail.com')).toEqual(true);
            expect(validate.isEmail('20')).toEqual(false);
        });

        it('isEquivalent', async () => {
            expect(validate.isEquivalent({
                name: 'Rafael Neri'
            }, {
                name: 'Rafael Neri'
            })).toEqual(true);
            expect(validate.isEquivalent({
                name: 'Rafael Neri'
            }, {
                name: 'Rafael'
            })).toEqual(false);
            expect(validate.isEquivalent({
                name: 'Rafael Neri'
            }, {
                name: 'Rafael',
                email: 'rafael.neri@gmail.com'
            })).toEqual(false);
        });

        it('isRegExp', async () => {
            expect(validate.isRegExp(/g/)).toEqual(true);
        });

        it('isError', async () => {
            expect(validate.isError(new Error('Error'))).toEqual(true);
            expect(validate.isError('')).toEqual(false);
        });

        it('isSymbol', async () => {
            expect(validate.isSymbol(Symbol())).toEqual(true);
            expect(validate.isSymbol('')).toEqual(false);
        });

        it('isDate', async () => {
            expect(validate.isDate(new Date())).toEqual(true);
            expect(validate.isDate('')).toEqual(false);
        });

        it('authenticated', async () => {
            expect(validate.authenticated()).toEqual(false);
            expect(validate.authenticated({})).toEqual(false);
        });
    });
};

describe('Misc', misctests);

module.exports = misctests;

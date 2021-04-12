const validate = require('../src/validate');


const misctests = () => {
    describe('Validate', () => {
        it('isNumber', async () => {
            expect(validate.isNumber(10)).toEqual(true);
            expect(validate.isNumber('20')).toEqual(false);
        });

        it('isString', async () => {
            expect(validate.isString('Rafael')).toEqual(true);
            expect(validate.isString(20)).toEqual(false);
        });

        it('isArray', async () => {
            expect(validate.isArray([10, 20])).toEqual(true);
            expect(validate.isArray(10)).toEqual(false);
        });

        it('isEmail', async () => {
            expect(validate.isEmail('rafael.neri@gmail.com')).toEqual(true);
            expect(validate.isEmail('20')).toEqual(false);
        });

        it('isFunction', async () => {
            expect(validate.isFunction(() => {
                return true;
            })).toEqual(true);
            expect(validate.isFunction(150)).toEqual(false);
        });

        it('isNull', async () => {
            expect(validate.isNull(null)).toEqual(true);
            expect(validate.isNull(150)).toEqual(false);
        });

        it('isUndefined', async () => {
            expect(validate.isUndefined(undefined)).toEqual(true);
            expect(validate.isUndefined(150)).toEqual(false);
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

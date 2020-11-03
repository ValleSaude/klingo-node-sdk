const config = require("./config");
const klingo = require("../src");

const externaltests = () => {

    // describe('Register', function () {
    //     it("success with correct data input", async function () {
    //         const client = klingo.client(config.klingo);
    //         const patient = await client.external.register(config.patient);

    //         expect(typeof patient).toEqual("object");
    //         expect(patient).toHaveProperty("content");
    //         expect(patient.content).toHaveProperty("id");
    //     });

    //     it("error with incorrect data input", async function () {
    //         try {
    //             const client = klingo.client(config.klingo);
    //             const patient = await client.external.register(config.patient_wrong);
    //         } catch (e) {
    //             expect(typeof e).toEqual("object");
    //             expect(e).toHaveProperty("name", "KlingoError");
    //             expect(e).toHaveProperty("status", "error");
    //             expect(e).toHaveProperty("statusCode", 403);
    //             expect(e).toHaveProperty("content");
    //             expect(Array.isArray(e.content)).toEqual(false);
    //         }
    //     });
    // });

    describe('Authenticate', function () {
        it("success with correct data input", async function () {
            const client = klingo.client(config.klingo);
            const patient = await client.external.authenticate({ id: config.patient_id.id, login: config.klingo.login, senha: config.klingo.password });

            expect(typeof patient).toEqual("object");
            expect(patient).toHaveProperty("content");
            expect(patient.content).toHaveProperty("access_token");
            expect(patient.content).toHaveProperty("expires_in");
            expect(patient.content).toHaveProperty("token_type");
            expect(patient).toHaveProperty("authentication");
            expect(typeof patient.authentication).toEqual("object");
        });

        it("error with incorrect data input", async function () {
            try {
                const client = klingo.client(config.klingo);
                const patient = await client.external.authenticate({ id: config.patient_id_wrong.id, login: config.klingo.login, senha: config.klingo.password });
            } catch (e) {
                expect(typeof e).toEqual("object");
                expect(e).toHaveProperty("name", "KlingoError");
                expect(e).toHaveProperty("status", "error");
                expect(e).toHaveProperty("statusCode", 419);
                expect(e).toHaveProperty("content");
                expect(Array.isArray(e.content)).toEqual(false);
            }
        });
    });

}

describe('External', externaltests)

module.exports = externaltests;

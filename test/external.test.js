const config = require("./config");
const klingo = require("../src");

describe("External", function () {

    describe('Register', function () {
        it("success with correct data input", async function () {
            const client = klingo.client(config.klingo);
            const patient = await client.external.register(config.patient);

            expect(typeof patient).toEqual("object");
            expect(patient).toHaveProperty("content");
            expect(patient.content).toHaveProperty("id");
        });
    })

});

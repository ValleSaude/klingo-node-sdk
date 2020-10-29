const config = require("./config");
const klingo = require("../src");

describe("Verify", function () {
	
	test("success", async function () {
		const client = klingo.client(config.klingo);
		const verify = await client.verify.get();

		expect(typeof verify).toEqual("object");
		expect(verify).toHaveProperty("content");
		expect(verify.content).toEqual('OK');
	});

	test("error", async function () {
		try {
			const configError = { ...config.klingo, xAppToken: "", env: "" };
			const client = klingo.client(configError);
			const verify = await client.verify.get();
		} catch (e) {
			expect(typeof e).toEqual("object");
			expect(e).toHaveProperty("name", "KlingoError");
			expect(e).toHaveProperty("status", "error");
			expect(e).toHaveProperty("statusCode", 500);
			expect(e).toHaveProperty("content");
			expect(Array.isArray(e.content)).toEqual(false);
		}
	});
});

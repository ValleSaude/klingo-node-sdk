const config = require("./config");
const klingo = require("../src");

const verifytests = () => {

  it("success", async function () {
    const client = new klingo.Client(config.klingo);
    const verify = await client.verify.get();
    console.log(verify);

    expect(typeof verify).toEqual("object");
    expect(verify).toHaveProperty("content");
    expect(verify.content).toEqual('OK');
  });

  it("error", async function () {
    try {
      const configError = {
        ...config.klingo,
        xAppToken: "",
        env: ""
      };
      const client = new klingo.Client(configError);
      const verify = await client.verify.get();
    } catch (error) {
      expect(typeof error).toEqual("object");
      expect(error).toHaveProperty("name", "KlingoError");
      expect(error).toHaveProperty("status", "error");
      expect(error).toHaveProperty("statusCode", 500);
      expect(error).toHaveProperty("content");
      expect(Array.isArray(error.content)).toEqual(false);
    }
  });

}

describe('Verify', verifytests)

module.exports = verifytests;

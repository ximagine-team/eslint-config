import jsConfig from "../src/configs/js";
import { runTest } from "./utils";

describe("Config Preset: js", () => {
  it("should work", async () => {
    await runTest({
      code: `
        const name = "eslint";
        console.log("hi");
      `,
      config: [jsConfig],
      expectMessages: [
        {
          ruleId: "no-unused-vars",
        },
        {
          ruleId: "no-undef",
        },
      ],
      filePath: "tmp.js",
    });
  });
});

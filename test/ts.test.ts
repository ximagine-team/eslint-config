import tsConfig from "../src/configs/ts";
import { runTest } from "./utils";

describe("Config Preset: ts", () => {
  it("should work", async () => {
    await runTest({
      code: `
        let variable: any;
      `,
      config: [tsConfig],
      expectMessages: [
        {
          ruleId: "@typescript-eslint/no-unused-vars",
        },
        {
          ruleId: "@typescript-eslint/no-explicit-any",
        },
      ],
      filePath: "tmp.ts",
    });
  });
});

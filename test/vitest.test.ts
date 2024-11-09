import vitestConfig from "../src/configs/vitest";
import { runTest } from "./utils";

describe("Config Preset: vitest", () => {
  it("should work", async () => {
    await runTest({
      code: `
        describe("test", () => {
          test("should work", () => {
            expect(true).toBe(true);
          });
        });
      `,
      config: [vitestConfig],
      expectMessages: [
        {
          ruleId: "vitest/consistent-test-it",
        },
        {
          ruleId: "vitest/prefer-to-be-truthy",
        },
      ],
      filePath: "test/tmp.test.js",
    });
  });
});

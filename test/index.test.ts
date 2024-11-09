import { defineConfig } from "../src/index";
import { runTest } from "./utils";

describe("Config Builder", () => {
  it("should work", async () => {
    await runTest({
      code: `
        describe("test", () => {
          it("should work", () => {
            const a = 1;
            let b: any = 1;
            console.log(a);
            expect(a == b).toBe(true);
          });
        });
      `,
      config: defineConfig({
        globals: {
          presets: ["nodeBuiltin"],
        },
        configs: (presets) => [presets.js, presets.ts, presets.vitest],
      }),
      expectMessages: [
        {
          ruleId: "@typescript-eslint/no-explicit-any",
        },
        {
          ruleId: "eqeqeq",
        },
        {
          ruleId: "vitest/prefer-to-be-truthy",
        },
      ],
      filePath: "test/tmp.test.ts",
    });
  });
});

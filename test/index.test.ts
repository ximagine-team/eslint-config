import { defineConfig } from "../src/index";
import { runTest } from "./utils";

describe("Config Builder", () => {
  it("should ignore", async () => {
    await runTest({
      code: `
        console.log(a);
      `,
      config: defineConfig({
        ignores: ["tmp.js"],
        configs: (presets) => [presets.js],
      }),
      expectMessages: [
        {
          message:
            'File ignored because of a matching ignore pattern. Use "--no-ignore" to disable file ignore settings or use "--no-warn-ignored" to suppress this warning.',
        },
      ],
      filePath: "tmp.js",
    });
  });

  it("should add globals", async () => {
    await runTest({
      code: `
        console.log("str");
      `,
      config: defineConfig({
        configs: (presets) => [presets.js],
      }),
      expectMessages: [
        {
          ruleId: "no-undef",
        },
      ],
      filePath: "tmp.js",
    });

    await runTest({
      code: `
        console.log("str");
      `,
      config: defineConfig({
        globals: {
          presets: ["nodeBuiltin"],
        },
        configs: (presets) => [presets.js],
      }),
      expectMessages: [],
      filePath: "tmp.js",
    });
  });

  it("should combine configs", async () => {
    await runTest({
      code: `
        describe("test", () => {
          it("should work", () => {
            const a = 1;
            let b: any = 1;
            expect(a == b).toBe(true);
          });
        });
      `,
      config: defineConfig({
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

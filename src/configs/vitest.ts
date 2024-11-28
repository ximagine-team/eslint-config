import type { TypedFlatConfigItem } from "src/types";

import vitest from "@vitest/eslint-plugin";

/**
 * ESLint configuration for testing files using Vitest.
 *
 * Plugins:
 * - `vitest`: Provides rules for testing files.
 */
const config: TypedFlatConfigItem = {
  files: [
    "**/test/**/*.ts",
    "**/test/**/*.tsx",
    "**/test/**/*.js",
    "**/test/**/*.jsx",
  ],
  plugins: {
    vitest,
  },
  rules: {
    ...vitest.configs.recommended.rules,
    "vitest/expect-expect": "off",
    "vitest/consistent-test-filename": "error",
    "vitest/no-test-return-statement": "warn",
    "vitest/prefer-hooks-on-top": "warn",
    "vitest/prefer-hooks-in-order": "warn",
    "vitest/prefer-to-be": "warn",
    "vitest/prefer-to-be-truthy": "warn",
    "vitest/prefer-to-be-falsy": "warn",
    "vitest/prefer-to-be-object": "warn",
    "vitest/prefer-called-with": "warn",
    "vitest/prefer-comparison-matcher": "warn",
    "vitest/prefer-equality-matcher": "warn",
    "vitest/require-to-throw-message": "warn",
    "vitest/prefer-lowercase-title": [
      "warn",
      {
        ignore: ["describe"],
      },
    ],
    "vitest/consistent-test-it": [
      "warn",
      {
        fn: "it",
        withinDescribe: "it",
      },
    ],
  },
  languageOptions: {
    globals: {
      ...vitest.environments.env.globals,
    },
  },
};

export default config;

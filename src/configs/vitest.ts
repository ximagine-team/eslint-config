import type { TypedFlatConfigItem } from "src/types";

import vitest from "@vitest/eslint-plugin";

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
    "vitest/valid-describe-callback": "off",
    "vitest/no-identical-title": "off",
    "vitest/valid-title": "off",
    "vitest/expect-expect": "off",
    "vitest/valid-expect": "off",
  },
  settings: {
    vitest: {
      typecheck: true,
    },
  },
  languageOptions: {
    globals: {
      ...vitest.environments.env.globals,
    },
  },
};

export default config;

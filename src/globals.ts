import type { Linter } from "eslint";

import globals from "globals";

/**
 * Options to configure global variables for ESLint.
 */
export interface GlobalsOptions {
  /**
   * Presets from `globals` package.
   */
  presets?: (keyof typeof globals)[];
  /**
   * Custom global variables.
   */
  custom?: Linter.Globals;
}

/**
 * Configure global variables for ESLint.
 *
 * @param options - The options to configure global variables.
 * @returns The global variables configuration.
 */
export function configureGlobals({
  presets = [],
  custom = {},
}: GlobalsOptions): Linter.Config {
  let appliedPresets: Linter.Globals = {};

  for (const each of presets) {
    appliedPresets = {
      ...appliedPresets,
      ...globals[each],
    };
  }

  return {
    languageOptions: {
      globals: {
        ...appliedPresets,
        ...custom,
      },
    },
  };
}

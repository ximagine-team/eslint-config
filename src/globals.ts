import type { Linter } from "eslint";

import globals from "globals";

export interface GlobalsOptions {
  presets?: (keyof typeof globals)[];
  custom?: Linter.Globals;
}

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

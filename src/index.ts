import type { Linter } from "eslint";

import type { TypedFlatConfigItem } from "./types";

import js from "./configs/js";
import ts from "./configs/ts";
import vitest from "./configs/vitest";
import { configureGlobals, type GlobalsOptions } from "./globals";

type ConfigPreset = "js" | "ts" | "vitest";

/**
 * ESLint configuration presets.
 */
export const configs: Record<ConfigPreset, Linter.Config> = {
  js,
  ts,
  vitest,
};

/**
 * ESLint configuration builder.
 *
 * @param params - Configuration parameters.
 * - `ignores`: Files or directories to ignore, same as ESLint's `ignores` option.
 * - `globals`: Global variables to configure, supports `presets` from `globals` package and `custom` options.
 * - `configs`: An array of custom ESLint configurations, with presets to choose from.
 * @returns ESLint configuration.
 */
export function defineConfig(params: {
  ignores?: string[];
  globals?: GlobalsOptions;
  configs: (presets: typeof configs) => TypedFlatConfigItem[];
}): Linter.Config[] {
  const { ignores, globals } = params;

  return [
    ...(ignores ? [{ ignores }] : []),
    ...(globals ? [configureGlobals(globals)] : []),
    ...params.configs(configs),
  ];
}

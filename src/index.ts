import type { Linter } from "eslint";

import type { TypedFlatConfigItem } from "./types";

import js from "./configs/js";
import ts from "./configs/ts";
import vitest from "./configs/vitest";
import { configureGlobals, type GlobalsOptions } from "./globals";

type ConfigPreset = "js" | "ts" | "vitest";

export const configs: Record<ConfigPreset, Linter.Config> = {
  js,
  ts,
  vitest,
};

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

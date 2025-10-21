import type { ParserOptions as TSParserOptions } from "@typescript-eslint/parser";
import type { TypedFlatConfigItem } from "src/types";

import { ESLint } from "eslint";
import { expect } from "vitest";

export async function runTest(params: {
  code: string;
  config: TypedFlatConfigItem[];
  expectMessages: Partial<ESLint.LintResult["messages"][number]>[];
  filePath: string;
}) {
  const { code, config, expectMessages, filePath } = params;

  for (const configItem of config) {
    // patch typescript-eslint projectService to accept testing file
    const parserOptions = configItem.languageOptions?.parserOptions as
      | TSParserOptions
      | undefined;

    if (parserOptions?.projectService) {
      parserOptions.projectService = {
        allowDefaultProject: [filePath],
      };
    }
  }

  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: config,
  });

  const [{ messages }] = await eslint.lintText(code, {
    filePath,
  });

  expect(messages).toMatchObject(expectMessages);
}

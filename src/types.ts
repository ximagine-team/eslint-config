import type { Linter } from "eslint";

/**
 * Relax plugins type limitation of ESLint's `Linter.Config`, as most of the plugins did not have correct type info yet.
 */
export interface TypedFlatConfigItem extends Linter.Config {
  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins?: Record<string, any>;
}

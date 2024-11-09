import { defineConfig } from "@ximagine/eslint-config";

export default defineConfig({
  configs: (p) => [p.js, p.ts, p.vitest],
});

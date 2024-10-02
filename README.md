# ESLint Config

## Installation

```bash
pnpm dlx jsr add -D @ximagine/eslint-config
```

## Usage

```javascript
import { defineConfig } from "@ximagine/eslint-config";

export default defineConfig({
  ignores: ["**/dist", "**/coverage"],
  globals: {
    presets: ["builtin", "es2022"],
    custom: {
      NodeJS: true,
    },
  },
  configs: (p) => [p.js, p.ts, p.vitest],
});
```

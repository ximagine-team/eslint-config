# ESLint Config

## Installation

```bash
pnpm add -D jsr:@ximagine/eslint-config
```

## Usage

```javascript
import { defineConfig } from "@ximagine/eslint-config";

export default defineConfig({
  ignores: ["**/dist", "**/coverage"],
  globals: {
    presets: ["nodeBuiltin"],
  },
  configs: (p) => [p.js, p.ts, p.vitest],
});
```

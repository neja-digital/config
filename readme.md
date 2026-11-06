# @neja-digital/config

Shared ESLint and TypeScript configuration for neja-digital projects (React + TypeScript + Vite).

Install (needs access to the private `@neja-digital` GitHub Packages registry):

```
pnpm add -D @neja-digital/config eslint typescript
```

## ESLint

`eslint.config.js`:

```js
import { defineConfig, globalIgnores } from 'eslint/config';
import neja from '@neja-digital/config/eslint';

export default defineConfig([globalIgnores(['dist']), ...neja]);
```

Style: single quotes, semicolons, 2-space indent, trailing commas on multiline, max 120 columns, JSX double quotes.
Add project specific rules or overrides after `...neja`.

## TypeScript

Three presets: `base.json` (strict flags), `app.json` (browser/React code), `node.json` (tooling files such as `vite.config.ts`).

`tsconfig.app.json`:

```json
{
  "extends": "@neja-digital/config/tsconfig/app.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "types": ["vite/client"]
  },
  "include": ["src"]
}
```

Keep `tsBuildInfoFile`, `types`, `paths` and `include` in the project: TypeScript resolves them relative to the file that declares them.

## Releasing

Bump `version` in `package.json`, commit, push, tag `vX.Y.Z`, publish a GitHub release (the workflow publishes the package). Style or rule changes that make existing code fail lint are a minor version bump while < 1.0.0; projects upgrade deliberately.

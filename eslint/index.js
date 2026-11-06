import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

// Shared ESLint flat config for neja-digital projects (React + TypeScript, browser code).
// Usage in a project's eslint.config.js:
//
//   import { defineConfig, globalIgnores } from 'eslint/config';
//   import neja from '@neja-digital/config/eslint';
//
//   export default defineConfig([globalIgnores(['dist']), ...neja]);
export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/max-len': ['error', {
        code: 120,
        ignoreStrings: true,
      }],
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-multiple-empty-lines': ['error', {
        max: 1,
      }],
      '@stylistic/jsx-max-props-per-line': ['error', {
        maximum: {
          single: 3,
          multi: 1,
        },
      }],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/semi': ['error', 'always'],
      '@typescript-eslint/no-explicit-any': ['warn'],
    },
  },
]);

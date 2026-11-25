import {configs as airbnbConfigs} from 'eslint-config-airbnb-extended/legacy';
import {defineConfig, globalIgnores} from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist/', 'node_modules/', '.vscode/']),
  ...airbnbConfigs.base.recommended,
  {
    // ESLint 8 did not report them; ESLint 9 warns by default
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2015,
        ...globals.mocha,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'no-plusplus': [2, {allowForLoopAfterthoughts: true}],
      'func-names': 'off',
      'no-await-in-loop': 'off',
      'class-methods-use-this': 'off',
      'max-len': [2, {code: 120}],
      'no-underscore-dangle': 'off',
      'no-shadow': 'off',
      indent: ['error', 2, {SwitchCase: 1}],
      'function-paren-newline': ['off', 'never'],
      'object-curly-spacing': ['error', 'never'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['for', 'switch', 'var', 'let', 'const'],
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: ['for', 'switch'],
          next: ['var', 'let', 'const'],
        },
        {
          blankLine: 'always',
          prev: ['var', 'let', 'const'],
          next: ['switch', 'for', 'if'],
        },
      ],
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
      'import/no-unresolved': 0,
      'import/extensions': ['off', 'never'],
      'no-use-before-define': 0,
      // Remove after Typescript Migration
      'import/no-import-module-exports': 0,
    },
  },
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrorsIgnorePattern: 'error',
          varsIgnorePattern: '^getPSVersion$',
        },
      ],
      'spaced-comment': 0,
      'max-len': ['error', {ignoreComments: true, code: 130}],
      'class-methods-use-this': 0,
      'no-alert': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-this-alias': 0,
      '@typescript-eslint/no-inferrable-types': 0,
      '@typescript-eslint/explicit-module-boundary-types': ['error', {allowArgumentsExplicitlyTypedAsAny: true}],
      'func-names': 0,
      'no-new': 0,
    },
  },
]);

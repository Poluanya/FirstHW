import playwright from 'eslint-plugin-playwright';

export default [
  {
    ...playwright.configs['flat/recommended'],
    files: ['**/*.spec.ts', '**/*.spec.js'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/no-wait-for-timeout': 'warn',
      'playwright/expect-expect': 'off',
    },
  },
];

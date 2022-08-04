module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        trailingComma: 'all',
        singleQuote: true,
      },
    ],
    'react/no-unescaped-entities': 'off',
  },
  globals: {
    React: 'writable',
  },
};

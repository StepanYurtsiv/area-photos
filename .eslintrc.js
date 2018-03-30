module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'promise', 'eslint-plugin-react', 'jest'],
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
  ],
  globals: {
    shallow: true,
    render: true,
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignorePattern: '^import\\W.*',
      },
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 5,
      },
    ],
    'import/prefer-default-export': 0,
    'react/forbid-prop-types': 1,
    'react/no-unused-prop-types': 1,
    'react/jsx-filename-extension': 0,
    'react/display-name': 1,
    'jsx-a11y/anchor-is-valid': 0,
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0
  },
};

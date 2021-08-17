module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: [
  ],
  plugins: [
    'json',
  ],
  globals: {
    window: true,
  },
  ignorePatterns: [
    '!.eslintrc.js',
    'node_modules/',
    'dist/',
  ],
  overrides: [
    {
      files: ['*.ts'],
      extends: [
      ],
    },
    {
      files: [
        '.eslintrc.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
}

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: [
    'ecmaVersion: latest',
    'sourceType: module',
    'project: ./tsconfig.json'
  ],
  plugins: ['react', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

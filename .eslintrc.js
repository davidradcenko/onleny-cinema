module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ["prettier"],
  extends: ["plugin:prettier/recommended"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "overrides": [
          {
            "files": "*",
            "options": {
              "prettier/prettier": ["error", { "endOfLine": "auto", "printWidth": 100, "tabWidth": 2, "useTabs": false, "semi": true, "singleQuote": false, "trailingComma": "none", "bracketSpacing": true, "arrowParens": "avoid" }],
              "no-control-regex": "off"
            }
          }
        ]
      }
    ],
    "no-control-regex": "off"
  },
};

const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: [
      "src/**/*.js"
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        module: "readonly",
        require: "readonly",
        process: "readonly",
        __dirname: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        jest: "readonly",
      },
    },
    rules: {},
  },
];
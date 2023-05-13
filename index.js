module.exports = {
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module" // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
    "vue/setup-compiler-macros": true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "eslint-config-uwburn"
  ],
  // required to lint *.vue files
  plugins: [
    "vue",
    "import"
  ],
  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true,
    FB: true,
    gapi: true,
    require: true,
    module: true
  },
  "rules": {
    // allow async-await
    "generator-star-spacing": "off",
    // allow paren-less arrow functions
    "arrow-parens": "off",
    "one-var": "off",

    "import/first": "off",
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "prefer-promise-reject-errors": "off",

    // allow debugger during development only
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": 1
    }]
  }
};

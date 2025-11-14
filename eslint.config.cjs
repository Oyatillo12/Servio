module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    // Optionally extend with other configs; project packages will extend further
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    "coverage/",
    "out/",
    ".next/",
    "**/node_modules/",
    "**/dist/",
    "**/.next/",
    "**/out/",
    "**/build/",
    "**/coverage/",
  ],
  rules: {
    "no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "no-console": "warn",
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "comma-dangle": ["error", "always-multiline"],
    eqeqeq: ["error", "always"],
    curly: ["error", "all"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": ["error", "always"],
    "prefer-const": "error",
    "no-var": "error",
  },
};

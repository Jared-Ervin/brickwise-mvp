const path = require('path');
module.exports = {
  root: true,
  extends: [path.join(__dirname, 'packages/config/eslint/base.cjs')],
  ignorePatterns: [
    "node_modules",
    "dist",
    "**/*.d.ts",
    "services/**/src/generated/**",
    "packages/**/src/generated/**",
    "apps/**/src/gql/**"
  ],
};

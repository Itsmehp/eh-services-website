module.exports = {
  ignores: [
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ],
  rules: {
    // deliberately minimal temporary config to avoid circular config validation errors
    '@typescript-eslint/no-unused-vars': 'off',
  },
};

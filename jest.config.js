module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.js'],
  coverageThreshold: { global: { statements: 95, branches: 95, functions: 95, lines: 95 } }
};

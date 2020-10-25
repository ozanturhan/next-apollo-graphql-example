module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)'],
  coverageDirectory: '../../coverage/apps/apollo-server',
  transform: {
    '\\.(gql|graphql)$': '@jagi/jest-transform-graphql',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFiles: ['./setupJest.ts'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

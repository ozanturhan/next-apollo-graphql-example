module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)'],
  coverageDirectory: '../../coverage/apps/apollo-server',
  transform: {
    '\\.(gql|graphql)$': '@jagi/jest-transform-graphql',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFiles: ['./setupJest.ts'],
};

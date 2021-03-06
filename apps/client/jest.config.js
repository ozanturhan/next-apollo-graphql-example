module.exports = {
  coverageDirectory: '../../coverage/apps/client',
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '@components': '<rootDir>/components',
    '@queries': '<rootDir>/graphql/queries',
    '@state-management/(.*)$': '<rootDir>/state-management/$1',
    '@lib': '<rootDir>/lib',
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  setupFiles: ['./setupJest.ts'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};

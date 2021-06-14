module.exports = {
  preset: 'ts-jest',
  testTimeout: 30000,
  testEnvironment: 'jsdom',
  testRegex: 'src/.*spec.[jt]sx?$',
  transform: {
    'src/.*.[jt]sx?$': '<rootDir>/__fileTransformer__.js',
  },
  maxWorkers: 4,
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // static file mocks
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/_mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/_mocks/styleMock.js',
  },
  setupFilesAfterEnv: ['./src/_tests/__setup__.ts'],
};

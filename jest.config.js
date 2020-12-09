module.exports = {
  globals: {
    __TEST__: true
  },
  rootDir: '.',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.js']
};

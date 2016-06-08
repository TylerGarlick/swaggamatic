module.exports = (wallaby) => ({
  files: [
    'src/**/*',
    'test/**/*',
    '!test/**/*.test.js'
  ],
  tests: [
    'test/**/*.test.js'
  ],
  env: {
    type: 'node',
    // env: {
    //   params: 'DEBUG=*;'
    // }
  },
  compilers: {
    '**/*.js': wallaby.compilers.babel()
  },
  testFramework: 'ava'
});

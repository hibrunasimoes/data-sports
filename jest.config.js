module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/*.spec.js'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    }

};

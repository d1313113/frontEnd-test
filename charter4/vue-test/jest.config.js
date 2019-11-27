module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // moduleFileExtensions: ['js', 'jsx', 'vue'],
  // snapshotSerializers: [
  //   'jest-serializer-vue'
  // ],
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1'
  // },
  testMatch: ['**/__tests__/**/*.spec.js'],
  // transformIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ["src/**/*.{js,vue}", "!src/main.js", "!**/node_modules/**"]
}

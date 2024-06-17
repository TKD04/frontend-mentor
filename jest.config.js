/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  coverageProvider: "v8",
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  preset: "ts-jest",
};

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  coveragePathIgnorePatterns: [
    "/.*/",
    "/.*\\.js$/",
    "material",
    "src",
    "setupTests.ts",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/dist/", 
  ],
};

export default config;
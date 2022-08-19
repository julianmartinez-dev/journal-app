import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.ts']
};
export default config;
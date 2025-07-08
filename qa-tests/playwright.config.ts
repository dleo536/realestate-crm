import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv'; dotenv.config();

export default defineConfig({
  testDir: 'tests',
  timeout: 30_000,
  use: {
    baseURL: "https://flow-power-7349-dev-ed.scratch.my.salesforce-setup.com/lightning/setup/SetupOneHome/home",
    storageState: 'auth/sf.json',
    viewport: { width: 1280, height: 720 }
  }
});

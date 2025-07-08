// qa-tests/tests/.utils/login.js
const { chromium } = require('@playwright/test');
const fs = require('fs/promises');

(async () => {
  // Hard-code for troubleshooting
  const BASE = 'https://flow-power-7349-dev-ed.scratch.my.salesforce-setup.com/lightning/setup/SetupOneHome/home';
  const USER = 'test-llkkezv8r8qh@example.com';
  const PASS = 'xw#ce0xrMsuai';

  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();

  // Use the hard-coded values
  await page.goto(BASE);
  await page.fill('#username', USER);
  await page.fill('#password', PASS);
  await page.click('#Login');

  //  Wait for *any* Lightning URL so first-login redirects don’t time out
  await page.waitForURL('**/lightning/**', { timeout: 60000 });

  //  Save cookie / storage state
  await fs.mkdir('auth', { recursive: true });
  await page.context().storageState({ path: 'auth/sf.json' });
  console.log('  auth/sf.json written');
  await browser.close();
})();


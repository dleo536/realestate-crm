// qa-tests/tests/inline-edit-stage.spec.ts
import { test, expect } from '@playwright/test';

test('inline-edit Stage to Closed Won', async ({ page }) => {
  /* 1 ────────────────────────────────────────────────────────────
     Open a list view that always has rows (avoid “Recent” filter) */
  await page.goto('/lightning/o/Deal__c/list?filterName=All');
  await page.waitForSelector('table tbody tr', { state: 'visible' });

  /* 2 ────────────────────────────────────────────────────────────
     Open the first Deal record */
  await page.locator('table tbody tr').first().locator('a').first().click();

// wait until the record page is ready

// wait until the Stage combobox is visible
const stage = page.getByRole('combobox', { name: 'Stage' });
await stage.waitFor({ state: 'visible' });

// open dropdown, choose Closed Won, save
await stage.click();
await page.getByRole('option', { name: 'Closed Won' }).click();
await page.getByRole('button', { name: 'Save' }).click();

// assertion
await expect(stage).toContainText('Closed Won');



});

import { test, expect } from '@playwright/test';

test('check', async ({ page }) => {
  await page.goto('https://https://www.google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://https://www.google.com/');
});

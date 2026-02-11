const { test, expect } = require('@playwright/test');
const { baseTextInputTest } = require('../utils/actions');

test('repeat', async ({ page }) => {
    await baseTextInputTest(page, 'TestTestTest');
    await await page.locator('.form-control').click();
    await page.locator('.form-control').press('Enter');
    await expect(page.locator('.btn.btn-primary')).toContainText("Button That Should Change it's Name Based on Input Value");
});


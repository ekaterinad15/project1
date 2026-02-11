const { test, expect } = require('@playwright/test');

test('press', async ({page}) => {
    await page.goto('http://uitestingplayground.com/textinput');
    //await page.locator('.form-control').click();
    await page.locator('.form-control').fill('TestTestTest');
    await page.locator('.btn.btn-primary').click();
    await expect(page.locator('.btn.btn-primary')).toContainText('TestTestTest');
});


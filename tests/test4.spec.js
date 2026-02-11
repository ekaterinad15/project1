const { test, expect } = require('@playwright/test');

test('click login', async ({page}) => {
    await page.goto('http://uitestingplayground.com/sampleapp');
    await page.locator('[name="UserName"]').fill('User1');
    await page.locator('[name="Password"]').fill('pwd');
    await page.locator('#login').click();
    await expect(page.locator('.text-success')).toHaveClass(/text-success/);
});
const { test, expect } = require('@playwright/test');

test('get image', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
   const image =  page.locator(".figure").nth(1);
   await image.hover();
   await expect(image.locator(".figcaption")).toBeVisible();
});
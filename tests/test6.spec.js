const { test, expect } = require('@playwright/test');

test('get image caption', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    await page.locator(".figure").nth(1).hover();
   // await expect(page.locator(".figure").nth(1)).toHaveClass('.figcaption');
   // await expect(page.locator(".figcaption")).toBeVisible(); 
   await expect(page.locator(".figure").nth(1)).toContainText('user2');
});
import { test, expect } from '@playwright/test';

test('form', async ({ page }) => {
    await page.goto('https://ya.ru/');
    await page.getByRole('link', { name: 'Войти' }).click();
      // 1. ПРОВЕРИТЬ URL (самый надежный)
      await expect(page).toHaveURL(/passport.yandex/);
      console.log('✅ Новый URL:', page.url());
      
    });
import { test, expect } from '@playwright/test';

test('form', async ({ page }) => {
    await page.goto('https://ya.ru/');
    await page.getByRole('button', { name: 'Войти' }).click();
      // 1. ПРОВЕРИТЬ URL (самый надежный)
      await expect(page).toHaveURL(/passport.yandex/);
      console.log('✅ Новый URL:', page.url());
      
      // 2. ПРОВЕРИТЬ появление поля логина
      await expect(page.getByLabel(/Логин/i)).toBeVisible();
      
      // 3. ПРОВЕРИТЬ заголовок формы
      await expect(page.getByRole('heading', { name: 'Вход в аккаунт' })).toBeVisible();
      
      // 4. ПРОВЕРИТЬ исчезновение главной страницы
      await expect(page.getByRole('link', { name: 'Поиск' })).not.toBeVisible();
      
      // 5. СКРИНШОТ для отчета (bonus)
      await expect(page).screenshot({ path: 'login-form.png' });
  });
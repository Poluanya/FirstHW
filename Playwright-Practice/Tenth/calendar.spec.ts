import { test, expect } from '@playwright/test';
test('Календари', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Datepicker/index.html');
  await page.locator('.input-group-addon').click();
  await page.locator('.datepicker-dropdown .next').filter({ visible: true }).click();
  await page.locator('.day').filter({ hasText: /^15$/ }).click();

  await expect(page.locator('.form-control')).toHaveValue(/15/);
});

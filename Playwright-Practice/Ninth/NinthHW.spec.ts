import { test, expect } from '@playwright/test';

test('Переход на сайт DemoQA', async ({ page }) => {
  await page.goto('https://demoqa.com/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle('demosite');

});
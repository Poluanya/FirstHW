import { test, expect } from '@playwright/test';

test('Кастомные timeout', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/ajax');
  await page.locator('#ajaxButton').click();

  await expect(page.locator('.bg-success')).toBeVisible({ timeout: 20000 });
  await expect(page.locator('.bg-success')).toHaveText('Data loaded with AJAX get request.');
});

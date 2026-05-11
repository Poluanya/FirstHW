import { test, expect } from '@playwright/test';

test('DemoQA Checkbox (клик по тексту)', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');
  await page.locator('.rct-collapse-btn').first().click();
  await page.locator('span.rct-title', { hasText: 'Desktop' }).click();
  await expect(page.locator('#result')).toBeVisible();
  await expect(page.locator('#result')).toContainText('desktop');
  await expect(page.locator('#result')).toContainText('notes');
  await expect(page.locator('#result')).toContainText('commands');
});

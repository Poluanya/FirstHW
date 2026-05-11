import { test, expect } from '@playwright/test';

test('DemoQA Checkbox (Победа через DevTools)', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');
  await page.locator('.rc-tree-switcher').first().click();

  await page.locator('span[aria-label="Select Desktop"]').dispatchEvent('click');

  await expect(page.locator('#result')).toBeVisible({ timeout: 10000 });
  await expect(page.locator('#result')).toContainText('desktop');
  await expect(page.locator('#result')).toContainText('notes');
  await expect(page.locator('#result')).toContainText('commands');
});

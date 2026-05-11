import { test, expect } from '@playwright/test';
test('ShadowDOM', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/shadowdom');
  await page.locator('#buttonGenerate').click();
  await expect(page.locator('#editField')).toHaveValue(/.+/);
});

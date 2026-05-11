import { test, expect } from '@playwright/test';
test('Радио-баттоны и классические Dropdown', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
  await page.locator('#dropdowm-menu-1').selectOption('python');
  await page.locator('input[value="yellow"]').check();

  await expect(page.locator('#dropdowm-menu-1')).toHaveValue('python');
  await expect(page.locator('input[value="yellow"]')).toBeChecked();
  await expect(page.locator('input[value="cabbage"]')).toBeDisabled();
});

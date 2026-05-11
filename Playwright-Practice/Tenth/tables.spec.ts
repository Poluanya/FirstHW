import { test, expect } from '@playwright/test';
test('Охота в Web-таблицах', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');
  await expect(
    page
      .locator('table#table1 tbody tr')
      .filter({ hasText: 'Doe' })
      .getByRole('cell', { name: 'Jason' }),
  ).toBeVisible();
  await expect(
    page
      .locator('table#table1 tbody tr')
      .filter({ hasText: 'Doe' })
      .getByRole('cell', { name: '$100.00' }),
  ).toBeVisible();
});

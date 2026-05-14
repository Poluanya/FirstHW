import { test, expect } from '@playwright/test';

test('Искусство исчезновения', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  await page.getByRole('button', { name: 'Remove' }).click();

  await expect(page.locator('#loading')).toBeHidden();
  await expect(page.locator('#message')).toHaveText("It's gone!");
});

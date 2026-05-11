import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('логин под standard_user', async ({ page }) => {
  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/.*inventory.html/);

  const productsTitle = page.locator('.header_secondary_container');
  await expect(productsTitle).toBeVisible();
});


test('kогин с неверным паролем', async ({ page }) => {
  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('rarara_password');

  await page.locator('[data-test="login-button"]').click();

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toContainText('Username and password do not match any user in this service');
});
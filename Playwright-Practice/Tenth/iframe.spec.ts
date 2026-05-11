import { test, expect } from '@playwright/test';

test('Работа с iframe', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  await page
    .frameLocator('#mce_0_ifr')
    .locator('#tinymce')
    .evaluate((el) => {
      el.setAttribute('contenteditable', 'true');
    });

  await page.frameLocator('#mce_0_ifr').locator('#tinymce').fill('Hello from the inside!');

  await expect(page.frameLocator('#mce_0_ifr').locator('#tinymce')).toContainText(
    'Hello from the inside!',
  );
});

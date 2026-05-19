import { test, expect } from '../fixtures';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { AlertsPage } from '../pages/AlertsPage';

test('Базовый POM', async ({ loginPage, inventoryPage }) => {
  await loginPage.navigate();
  await loginPage.fillUsername('standard_user');
  await loginPage.fillPassword('secret_sauce');
  await loginPage.submit();

  await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(inventoryPage.pageTitle).toHaveText('Products');

  const initialCount = await inventoryPage.header.getCartItemsCount();
  expect(initialCount).toBe('0');

  await inventoryPage.addFirstItemToCart();

  const updatedCount = await inventoryPage.header.getCartItemsCount();
  expect(updatedCount).toBe('1');
});

test('Работа с модальным окном', async ({ alertsPage }) => {
  await alertsPage.navigate();
  await alertsPage.openModal();

  const modalText = await alertsPage.getModalText();

  expect(modalText).toContain('We can inject and use JavaScript code');

  await alertsPage.closeModal();
  await expect(alertsPage.modalWindow).toBeHidden();
});

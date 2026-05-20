import { test, expect } from '@playwright/test';
import { ShopFacade } from '../facades/ShopFacade';

test('Тест корзины с использованием Фасада', async ({ page }) => {
  const shopFacade = new ShopFacade(page);

  await shopFacade.loginAndAddItemToCart('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  console.log('тест сработал');
});

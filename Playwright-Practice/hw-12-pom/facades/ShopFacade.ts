import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

export class ShopFacade {
  private readonly loginPage: LoginPage;
  private readonly inventoryPage: InventoryPage;

  constructor(public readonly page: Page) {
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
  }

  async loginAndAddItemToCart(username: string, password: string): Promise<void> {
    await this.loginPage.navigate();
    await this.loginPage.fillUsername(username);
    await this.loginPage.fillPassword(password);
    await this.loginPage.submit();
    await this.inventoryPage.addFirstItemToCart();
    await this.inventoryPage.header.clickCartIcon();
  }
}

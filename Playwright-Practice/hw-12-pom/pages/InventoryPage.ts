import { Page, Locator } from '@playwright/test';
import { Header } from '../components/Header';

export class InventoryPage {
  readonly page: Page;
  readonly header: Header;
  readonly firstItemAddToCartButton: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.firstItemAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.pageTitle = page.locator('.title');
  }

  async addFirstItemToCart(): Promise<void> {
    await this.firstItemAddToCartButton.click();
  }
}

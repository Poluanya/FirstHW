import { Page, Locator } from '@playwright/test';
export class Header {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async getCartItemsCount(): Promise<string> {
    if (await this.cartBadge.isVisible()) {
      return await this.cartBadge.innerText();
    }
    return '0';
  }

  async clickCartIcon(): Promise<void> {
    await this.cartIcon.click();
  }
}

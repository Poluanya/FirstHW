import { Page, Locator } from '@playwright/test';

export class AlertsPage {
  readonly page: Page;
  readonly openModalButton: Locator;
  readonly modalWindow: Locator;
  readonly modalTitle: Locator;
  readonly modalBody: Locator;
  readonly closeModalButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.openModalButton = page.locator('#button2');
    this.modalWindow = page.locator('#myModal');
    this.modalTitle = page.locator('#myModal .modal-title');
    this.modalBody = page.locator('#myModal .modal-body p');
    this.closeModalButton = page.locator('#myModal .modal-footer [data-dismiss="modal"]');
  }
  async navigate(): Promise<void> {
    await this.page.goto('https://webdriveruniversity.com/Popup-Alerts/index.html');
  }
  async openModal(): Promise<void> {
    await this.openModalButton.click();
  }
  async getModalText(): Promise<string> {
    await this.modalWindow.waitFor({ state: 'visible' });
    await this.modalBody.waitFor({ state: 'visible' });
    return await this.modalBody.innerText();
  }
  async closeModal(): Promise<void> {
    await this.closeModalButton.waitFor({ state: 'visible' });
    await this.closeModalButton.click();
  }
}

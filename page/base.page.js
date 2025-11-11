class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '/') {
    await this.page.goto(path);
  }

  async waitForVisible(locator) {
    await locator.waitFor({ state: 'visible' });
  }

  async waitAndClick(locator) {
    await this.waitForVisible(locator);
    await locator.click();
  }
}

module.exports = { BasePage };

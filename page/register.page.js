require('dotenv').config();

class RegisterPage {
  constructor(page) {
    this.page = page;
    this.signupLink = page.locator('#signin2');
    this.usernameInput = page.locator('#sign-username');
    this.passwordInput = page.locator('#sign-password');
    this.signupBtn = page.locator('button[onclick="register()"]');
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL, { waitUntil: 'load' });
  }

  async openSignupModal() {
    await this.signupLink.click();
    await this.usernameInput.waitFor({ state: 'visible' });
  }

  async register({ username, password }) {
    await this.usernameInput.fill(username || '');
    await this.passwordInput.fill(password || '');
    await this.signupBtn.click();
  }
}

module.exports = { RegisterPage };

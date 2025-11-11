require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../page/register.page');
const { randomUsername } = require('../utils/helpers');
const testData = require('../data/registrationData.json');

test.describe('Demoblaze Registration Test Cases:', () => {

  // Positive Test Cases
  const positiveTests = testData.filter(t => t.type === 'positive');
  positiveTests.forEach(t => {
    test(`${t.id} - Positive: register with username='${t.username}' password='${t.password}'`, async ({ page }) => {
      const register = new RegisterPage(page);
      await register.goto();
      await register.openSignupModal();

      // Use random username for uniqueness
      const username = (!t.username || t.username.startsWith('qauser')) ? randomUsername() : t.username;

      const user = {
        username,
        password: t.password
      };

      page.once('dialog', async dialog => {
        const msg = dialog.message();
        await dialog.accept();
        expect(msg).toMatch(/Sign up successful/);
      });
      await register.register(user);
    });
  });

  // Negative Test Cases
  const negativeTests = testData.filter(t => t.type === 'negative');
  negativeTests.forEach(t => {
    test(`${t.id} - Negative: register with username='${t.username}' password='${t.password}'`, async ({ page }) => {
      const register = new RegisterPage(page);
      await register.goto();
      await register.openSignupModal();

      const user = {
        username: t.username,
        password: t.password
      };

      page.once('dialog', async dialog => {
        const msg = dialog.message();
        await dialog.accept();

        // Verify error message
        expect(msg).toMatch(/Please fill out Username and Password|This user already exists/);
      });
      await register.register(user);
    });
  });
});

# Registration Automation - Playwright

## 🧩 Project Overview
This project automates the **user registration flow** on [DemoBlaze](https://www.demoblaze.com) using **Playwright**.  
It includes both **local test execution** and **CI/CD pipeline** setup through **GitHub Actions**.

---

## 📂 Project Structure

```
registration-automation-playwright/
├── .github/workflows/ci.yml         # GitHub Actions pipeline configuration
├── data/registrationData.json        # Test data for registration
├── page/
│   ├── base.page.js                  # Common page methods and selectors
│   ├── register.page.js              # Page Object for registration page
├── playwright-report/                # Auto-generated Playwright HTML reports
├── setup/
│   ├── globalSetup.js                # Global setup before tests run
│   ├── globalTeardown.js             # Cleanup after test execution
├── test/
│   ├── registration.spec.js          # Main Playwright test specification
├── test-results/                     # Test result logs (JSON/HTML)
├── utils/
│   ├── helpers.js                    # Utility functions
│   ├── logger.js                     # Logging helper
├── .env                              # Environment variables
├── package.json                      # Project dependencies and scripts
├── playwright.config.js              # Playwright configuration
└── README.md                         # Project documentation
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Configure Environment Variables
Create a `.env` file in the project root:
```bash
BASE_URL=https://www.demoblaze.com
USERNAME=testuser
PASSWORD=testpassword
```

---

## 🧪 Run Tests Locally

Run the registration test:
```bash
npx playwright test test/registration.spec.js --headed
```

To run all tests:
```bash
npx playwright test
```

Generate and open report:
```bash
npx playwright show-report
```

---

## 🚀 Continuous Integration (GitHub Actions)

The pipeline is defined in `.github/workflows/ci.yml`.

### CI Workflow Steps:
1. Checkout repository
2. Install dependencies
3. Run Playwright tests
4. Upload Playwright report as GitHub artifact

### Trigger:
- On push or pull request to `main` branch

---

## 🔐 GitHub Environment Variables

To configure GitHub Secrets (used in the workflow):

1. Go to your repository → **Settings → Secrets and variables → Actions**
2. Add the following secrets:
   - `BASE_URL` → `https://www.demoblaze.com`
   - `USERNAME`
   - `PASSWORD`
3. These secrets will be injected during the CI run automatically.

---

## 📊 Reading the Report

After the test run (locally or via CI):

- Local report path: `playwright-report/index.html`
- GitHub CI report: Available as an artifact in workflow run summary.

To open report manually:
```bash
npx playwright show-report
```

---

## 🌐 Test Target

**Website:** [https://www.demoblaze.com](https://www.demoblaze.com)

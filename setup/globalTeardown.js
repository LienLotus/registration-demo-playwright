/**
 * Global teardown script for Playwright
 * Runs once after all tests - cleanup or revoke tokens.
 */

module.exports = async (config) => {
  console.log('Global teardown: cleaning up test environment...');
};

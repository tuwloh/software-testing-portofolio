const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile:"D:/hidtesting/cypress/portofolio/cypress/e2e/cypress/support/e2e.js",
    defaultCommandTimeout:30000,
    baseUrl:"https://opensource-demo.orangehrmlive.com"
  },
});

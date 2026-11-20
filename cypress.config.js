const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // env: {
  //   "USERNAME_REAL": "Admin",
  //   "PASSWORD_REAL": "admin123"
  // },
  allowCypressEnv: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,

  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

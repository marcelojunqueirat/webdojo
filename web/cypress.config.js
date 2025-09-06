const { defineConfig } = require("cypress");
const { readPdf } = require('./cypress/support/helper')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        readPdf
      })
    },
    // defaultCommandTimeout: 10000
    experimentalStudio: true,
    video: false
  },
});

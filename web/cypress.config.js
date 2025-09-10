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
    video: false,
    baseUrl: 'http://localhost:3000',

    //comentado pois caso tentado rodar via linha de comando com outra resolução, essa configuração sobrescreve
    // viewportWidth: 1440,
    // viewportHeight: 900
  },
});

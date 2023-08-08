const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: "cypress-multi-reporters",

  // reporterOptions: {
  //   reporterEnabled: "mochawesome",
  //   mochawesomeReporterOptions: {
  //     reportDir: "cypresstest/reports",
  //     overwrite: false,
  //     html: true,
  //     json: true,
  //   },
  // },

  e2e: {
    baseUrl: 'http://www.google.com',
  },
});

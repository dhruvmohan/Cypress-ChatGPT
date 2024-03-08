const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: true,
    screenshotOnRunFailure: true,
    watchForFileChanges: false,
    screenshotsFolder: "cypress/results/mochawesome-report/assets",
    env: {
      log: {
        level: "warn" // Set the log level globally to "warn"
      }
    },
    // retries: {
    //  runMode: 1,
    //  openMode: 1,
    //},
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 120000,
    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      reportDir: "cypress/results",
      reportFilename: "report",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    video: true,
 //   specPattern: ["**/*.feature", "cypress/e2e/*.cy.{js,jsx,ts,tsx}"],

    async setupNodeEvents(on, config) {


      on("task", {

       

      });


     

    },



  },


});


/*

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
*/



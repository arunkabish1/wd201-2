const { defineConfig } = require("cypress");

module.exports = defineConfig({
  integration: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-json-results")({
        on,
        filename: "my-result.json",
      });
    },
  },
});

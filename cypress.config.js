const { defineConfig } =
  require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/index.html",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: false,
  },
});


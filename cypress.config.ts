import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,//needed for Salesforce login issues
    experimentalSkipDomainInjection: ['*.salesforce.com', '*.force.com'],//needed for Salesforce login issues
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //environmental variables setup
    env: {
      username: 'defaultUser',
      password: 'defaultPass',
    },
  },
});
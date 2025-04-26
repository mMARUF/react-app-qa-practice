import './commands';
import '@shelex/cypress-allure-plugin';


Cypress.on('uncaught:exception', (err) => {
    // Ignore the "INVALID USER" exception and "Cannot read properties of undefined" exception
    if (
      err.message.includes('INVALID USER') || 
      err.message.includes("Cannot read properties of undefined (reading 'password')")
    ) {
      return false; // Prevent Cypress from failing the test
    }
  });
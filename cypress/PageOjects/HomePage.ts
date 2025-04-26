export class HomePage {
    // Home Page Page Objects
    greetingMessageDiv = '.sc-bdVaJa.cCkHTg';
    logoutButton = '.sc-bxivhb.fqCnAP';
  
    logoutOperation() {
      cy.get(this.logoutButton).click();
    }

    loginSuccessVerification(expectedMessage: string) {
      cy.get(this.greetingMessageDiv).contains(expectedMessage).should('be.visible');
    }
  }


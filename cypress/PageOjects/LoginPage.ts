export class LoginPage {
  // Login Page Page Objects
  usernameInput = "input[placeholder='Enter Username']";
  passwordInput = "input[placeholder='password']";
  loginButton = ".sc-bZQynM.cGmBje";
  loginPageMainDiv = '.sc-bdVaJa.cCkHTg';
  loginPageInfoMessageDiv = '.sc-ifAKCX > div';

  loginOperation(username: string, password: string) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }

  userPresentOnLogInPage(expectedMessage: string) {
    cy.get(this.loginPageMainDiv).contains(expectedMessage).should('be.visible');
    cy.get(this.loginPageInfoMessageDiv).contains('If you do not have an account, contact an admin').should('be.visible');
  }

}



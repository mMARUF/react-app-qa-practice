import { HomePage } from '../PageOjects/HomePage';
import { LoginPage } from '../PageOjects/LoginPage';


describe('Login Functionality', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  beforeEach(() => {
    cy.visit('/');
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('login').then((data) => {
      cy.login(data.validUser.username, data.validUser.password);
      homePage.loginSuccessVerification(`Hello ${data.validUser.nameInDashboard}`);

    });
  });

  it('should show error for invalid credentials', () => {
    cy.fixture('login').then((data) => {
      cy.login(data.invalidUser.username, data.invalidUser.password);
      loginPage.userPresentOnLogInPage('qa.code-quiz.dev');
    });
  });

  it('should show validation error for empty fields', () => {
    cy.get(loginPage.loginButton).click();
    loginPage.userPresentOnLogInPage('qa.code-quiz.dev');
  });


  it('Logout Verification', () => {
    cy.fixture('login').then((data) => {
      cy.login(data.validUser.username, data.validUser.password);
      homePage.loginSuccessVerification(`Hello ${data.validUser.nameInDashboard}`);
      homePage.logoutOperation();
      loginPage.userPresentOnLogInPage('qa.code-quiz.dev');      

    });
  });

});
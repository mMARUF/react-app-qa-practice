/// <reference types="cypress" />
import { LoginPage } from '../PageOjects/LoginPage';
import { HomePage } from '../PageOjects/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();

Cypress.Commands.add('login', (username: string, password: string) => {
    loginPage.loginOperation(username, password);
  });


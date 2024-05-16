import LoginPage from "../../pages/LoginPage";

describe('Login Test Suite', () => {
  const loginPage = new LoginPage();

  it('should login successfully with valid credentials', () => {
    loginPage.visit("https://www.saucedemo.com/");
    loginPage.enterUsername('standard_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.submit();

    cy.url().should('include', '/');
  });

  it('should fail to login with invalid credentials', () => {
    loginPage.visit("https://www.saucedemo.com/");
    loginPage.enterUsername('invalidUser');
    loginPage.enterPassword('invalidPass');
    loginPage.submit();

    cy.xpath('//button[@class="error-button"]').should('be.visible');
  });
});
/*
describe('Login Test Suite improved', () => {
    const loginPage = new LoginPage();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
  
    it('should login successfully with valid credentials', () => {
      loginPage.visit();
      loginPage.enterUsername(username);
      loginPage.enterPassword(password);
      loginPage.submit();
  
      cy.url().should('include', '/dashboard');
    });
  
    // Other tests...
  });*/

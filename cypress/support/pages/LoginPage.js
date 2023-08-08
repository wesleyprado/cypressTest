class LoginPage {
  visit() {
    cy.visit('https://www.demoblaze.com/');
  }

  login(username, password) {
    cy.contains('Log in').click();
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);
    cy.get('#logInModal .modal-footer button.btn-primary').click();
  }

  signUp(username, password) {
    cy.contains('Sign up').click();
    cy.get('#sign-username').type(username);
    cy.get('#sign-password').type(password);
    cy.get('#signInModal .modal-footer button.btn-primary').click();
  }

  logIn(username, password) {
    cy.contains('Log in').click();
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);
    cy.get('#logInModal .modal-footer button.btn-primary').click();
  }
  
  logOut() {
    cy.contains('Log out').click();
  }

  InvalidlogIn() {
    cy.contains('Log in').click();
    cy.get('#loginusername').type("TEST");
    cy.get('#loginpassword').type("123456");
    cy.get('#logInModal .modal-footer button.btn-primary').click();
  }

}

export default new LoginPage();
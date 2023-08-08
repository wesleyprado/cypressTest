describe('DemoBlaze Test Suite', () => {
  it('Test 1: Sign Up, Log In, Log Out, Invalid Login', () => {
    // Visit the website
    cy.visit('https://www.demoblaze.com/');

    // Sign Up as a new user
    cy.contains('Sign up').click();
    cy.get('#sign-username').type('newuser123');
    cy.get('#sign-password').type('password123');
    cy.get('#signInModal .modal-footer button.btn-primary').click();

    // Validate if trying to sign up with the same user shows a modal
    cy.contains('Sign up').click();
    cy.get('#sign-username').type('newuser123');
    cy.get('#sign-password').type('differentpassword');
    cy.get('#signInModal .modal-footer button.btn-primary').click();
    cy.get('.modal-content').should('contain', 'This user already exist.');

    // Log In
    cy.contains('Log in').click();
    cy.get('#loginusername').type('newuser123');
    cy.get('#loginpassword').type('password123');
    cy.get('#logInModal .modal-footer button.btn-primary').click();

    // Log Out
    cy.contains('Log out').click();

    // Try logging in with invalid user
    cy.contains('Log in').click();
    cy.get('#loginusername').type('invaliduser');
    cy.get('#loginpassword').type('invalidpassword');
    cy.get('#logInModal .modal-footer button.btn-primary').click();
    cy.get('.modal-content').should('contain', 'User does not exist.');
  });
});
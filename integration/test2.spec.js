describe('DemoBlaze Test Suite', () => {
  it('Test 2: Add Phones to Cart, Remove Item, Place Order', () => {
    // Log In
    cy.visit('https://www.demoblaze.com/');
    cy.contains('Log in').click();
    cy.get('#loginusername').type('newuser123');
    cy.get('#loginpassword').type('password123');
    cy.get('#logInModal .modal-footer button.btn-primary').click();

    // Go to Phones
    cy.contains('Phones').click();

    // Click on Any phone and add to cart
    cy.get('.card').first().contains('Add').click();
    cy.get('#navbarCart').click();

    // Go to another phone and add it to cart
    cy.contains('Phones').click();
    cy.get('.card').eq(1).contains('Add').click();
    cy.get('#navbarCart').click();

    // Go to cart and remove one item
    cy.get('.success > .btn').first().click();

    // Place order and populate modal
    cy.contains('Place Order').click();
    cy.get('#name').type('John Doe');
    cy.get('#country').type('United States');
    cy.get('#city').type('New York');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');
    cy.get('#orderModal .modal-footer button.btn-primary').click();

    // Check if the order was placed successfully
    cy.get('.confirm').should('contain', 'Thank you for your purchase!');
  });
});

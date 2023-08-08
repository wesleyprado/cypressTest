class ProductPage {

  goToPhones() {
    // Go to Phones
    cy.contains('Phones').click();
  }

  addProductToCart() {
    // Click on Any phone and add to cart
    cy.get('.card').first().contains('Add').click();
    cy.get('#navbarCart').click();
  }

  goToAnothePhoneAndAddItToCart() {
    // Go to another phone and add it to cart
    cy.contains('Phones').click();
    cy.get('.card').eq(1).contains('Add').click();
    cy.get('#navbarCart').click();
  }

  removeItem() {
    // Go to cart and remove one item
    cy.get('.success > .btn').first().click();
  }

  populateModal() {
    // Place order and populate modal
    cy.contains('Place Order').click();
    cy.get('#name').type('John Doe');
    cy.get('#country').type('United States');
    cy.get('#city').type('New York');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');
    cy.get('#orderModal .modal-footer button.btn-primary').click();
  }

  checkOrder() {
    // Check if the order was placed successfully
    cy.get('.confirm').should('contain', 'Thank you for your purchase!');
  }

  getProductTitle() {
    return cy.get('.card-title');
  }
}

export default new ProductPage();
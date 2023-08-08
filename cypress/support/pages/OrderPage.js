class OrderPage {
  placeOrder(name, country, city, card, month, year) {
    cy.contains('Place Order').click();
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
    cy.get('#orderModal .modal-footer button.btn-primary').click();
  }

  validateConfirmationMessage(message) {
    cy.get('.confirm').should('contain', message);
  }
  
}

export default new OrderPage();
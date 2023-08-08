class CartPage {
  goToCart() {
    cy.get('#navbarCart').click();
  }

  goToOrderPage() {
    cy.contains('Place Order').click();
  }

  removeItem() {
    cy.get('.success > .btn').first().click();
  }
}

export default new CartPage();
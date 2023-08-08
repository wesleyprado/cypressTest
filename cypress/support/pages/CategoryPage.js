class CategoryPage {
  goToMainCategoryPage() {
    cy.get('.list-group > :nth-child(1) > .list-group-item').click();
  }

  goToSubCategory(subCategoryIndex) {
    cy.get('.list-group > .list-group-item').eq(subCategoryIndex).click();
  }

  getMainCategoryItems() {
    return cy.get('.card-title');
  }
}

export default new CategoryPage();
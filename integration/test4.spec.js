describe('DemoBlaze Test Suite', () => {
  it('Test 4: Validate Main Category Contains Items from Subcategories', () => {
    // Log In
    cy.visit('https://www.demoblaze.com/');
    cy.contains('Log in').click();
    cy.get('#loginusername').type('newuser123');
    cy.get('#loginpassword').type('password123');
    cy.get('#logInModal .modal-footer button.btn-primary').click();

    // Go to main categories level page
    cy.get('.list-group > :nth-child(1) > .list-group-item').click();

    // Get list of main category items
    cy.get('.card-title').then(mainCategoryItems => {
      const mainCategoryItemNames = Array.from(mainCategoryItems).map(item => item.innerText);

      // Go to each sub-category level
      cy.get('.list-group > .list-group-item').each(subCategory => {
        cy.wrap(subCategory).click();

        // Validate that main category level page contains all items from subcategory
        cy.get('.card-title').should(subCategoryItems => {
          const subCategoryItemNames = Array.from(subCategoryItems).map(item => item.innerText);
          expect(mainCategoryItemNames).to.include.members(subCategoryItemNames);
        });

        // Go back to main category level
        cy.go('back');
      });
    });
  });
});

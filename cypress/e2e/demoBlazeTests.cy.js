import LoginPage from '../../cypress/support/pages/LoginPage';
import CategoryPage from '../../cypress/support/pages/CategoryPage';
import ProductPage from '../../cypress/support/pages/ProductPage';
import CartPage from '../../cypress/support/pages/CartPage';
import OrderPage from '../../cypress/support/pages/OrderPage';

describe('DemoBlaze Test Suite', () => {
  before(() => {
    LoginPage.visit();
    LoginPage.login('newuser123', 'password123');
  });

  it('Test 1: Sign Up, Log In, Log Out, Invalid Login', () => {
    LoginPage.signUp('newuser123', 'password123');
    LoginPage.logIn('newuser123', 'password123');
    LoginPage.logOut();
    LoginPage.InvalidlogIn();
  });

  it('Test 2: Add Phones to Cart, Remove Item, Place Order', () => {
    ProductPage.goToPhones();
    ProductPage.addProductToCart();
    ProductPage.goToAnothePhoneAndAddItToCart();
    ProductPage.removeItem();
    ProductPage.populateModal();
    ProductPage.checkOrder();
  });

  it('Test 3: Add Phones to Cart, Remove Item, Place Order and Validate Information', () => {
    ProductPage.goToPhones();
    ProductPage.addProductToCart();
    ProductPage.goToAnothePhoneAndAddItToCart();
    CartPage.removeItem();
    OrderPage.placeOrder('John Doe', 'United States', 'New York', '1234567890123456', '12', '2025');
    OrderPage.validateConfirmationMessage('Thank you for your purchase!');
    OrderPage.validateConfirmationMessage('Amount: 1200 USD');
    OrderPage.validateConfirmationMessage('Card Number: **** **** **** 3456');
    OrderPage.validateConfirmationMessage('Name: John Doe');
    OrderPage.validateConfirmationMessage('City: New York');
  });

  it('Test 4: Validate Main Category Contains Items from Subcategories', () => {

    CategoryPage.goToMainCategoryPage();

    CategoryPage.getMainCategoryItems().then(mainCategoryItems => {
      const mainCategoryItemNames = Array.from(mainCategoryItems).map(item => item.text());

      cy.get('.list-group > .list-group-item').each((subCategory, index) => {
        CategoryPage.goToSubCategory(index);

        ProductPage.getProductTitle().should(subCategoryItems => {
          const subCategoryItemNames = Array.from(subCategoryItems).map(item => item.text());
          expect(mainCategoryItemNames).to.include.members(subCategoryItemNames);
        });

        cy.go('back');
      });
    });
  });
});

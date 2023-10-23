class SearchPage {
    visit() {
      cy.visit('http://demo-store.seleniumacademy.com/');
    }
  
    searchForProduct(productName) {
      cy.get('input[name="q"]').type(productName);
      cy.get('input[name="q"]').type('{enter}');
    }
  
    getSearchResults() {
      return cy.get('h2.product-name a');
    }
  }
  
  export default new SearchPage();
  
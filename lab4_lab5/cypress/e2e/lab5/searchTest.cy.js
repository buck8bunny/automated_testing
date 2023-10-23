import SearchPage from "./searchPage";

describe('SearchTest', () => {
  before(() => {
    SearchPage.visit();
  })

  it('test_search_returns_results', () => {
    const searchTerm = 'Shirts'; // задаэмо групу товарів для пошуку
    SearchPage.searchForProduct(searchTerm);
    SearchPage.getSearchResults().should('have.length.greaterThan', 0);
  })
})

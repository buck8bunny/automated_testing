describe('SearchTest', () => {
  before(() => {
    cy.visit('http://demo-store.seleniumacademy.com/')
  })

  it('test_search_returns_results', () => {
    cy.get('input[name="q"]').type('Shirts') // будь яка група товарів
    cy.get('input[name="q"]').type('{enter}')
    cy.get('h2.product-name a').should('have.length.greaterThan', 0)
  })
})

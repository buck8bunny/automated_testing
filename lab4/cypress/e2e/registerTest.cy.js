describe('RegistrationAndLoginTest', () => {
  before(() => {
    cy.visit('http://demo-store.seleniumacademy.com/customer/account/create/')
  })

  it('test_registration_and_login', () => {
    // Registration
    const name = 'Artem'
    const lastName = 'Kh.'
    const email = `${Cypress._.random(0, 1e5)}@gmail.com`
    const password = 'Test.1337'

    cy.get('#firstname').type(name)
    cy.get('#lastname').type(lastName)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#confirmation').type(password)
    cy.get('button[title="Register"]').click()
    
    cy.visit('http://demo-store.seleniumacademy.com/customer/account/')
    cy.wait(1000) 
    cy.get('div.page-title h1').should('have.text', `My Dashboard`)

    // Login
    cy.visit('http://demo-store.seleniumacademy.com/customer/account/logout/')
    cy.wait(1000) 
    cy.visit('http://demo-store.seleniumacademy.com/customer/account/login/')
    cy.get('input#email').type(email)
    cy.get('input#pass').type(password)
    cy.get('button[title="Login"]').click()


    cy.get('input#email').type(email)
    cy.get('input#pass').type(password)
    cy.get('button[title="Login"]').click()   

    cy.get('div.page-title h1').should('have.text', 'My Dashboard')
  })
})

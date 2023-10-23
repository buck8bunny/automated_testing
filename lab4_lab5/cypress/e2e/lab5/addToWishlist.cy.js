describe("Wishlist Test", function () {
    before(function () {
        cy.visit("http://demo-store.seleniumacademy.com/");
    });
  
    it("Add to Wishlist", function () {
        cy.visit("http://demo-store.seleniumacademy.com/customer/account/login/");
        cy.get('[name="login[username]"]').type("yourmail@gmail.com");
        cy.get('[name="login[password]"]').type("yourpassword");
        cy.get('#send2').click();
        cy.get('[name="q"]').type("Shirts").type("{enter}");
        cy.get('ul.products-grid li.item').first().find('a.product-image').click();

        // Знаходимо першу кнопку кольору
        cy.get("#configurable_swatch_color li").first().find("a").click();
        // Знаходимо першу кнопку розмір
        cy.get("#configurable_swatch_size li").first().find("a").click();
        // Знаходимо кнопку "Add to Cart" 
        cy.get('button[title="Add to Cart"]').eq(1).click({ force: true });
        //Перевіряємо доданий товар
        cy.get('tbody').find('tr').should('have.length.gt', 0);
    });
  });
  
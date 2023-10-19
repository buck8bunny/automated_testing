describe("Math Test", function () {
  it("Solve the math problem", function () {
    cy.visit("http://suninjuly.github.io/math.html");

    // Ждем, пока #input_value появится и станет видимым
    cy.get("#input_value").should("be.visible").then(($input) => {
      const x = parseInt($input.text());
      const f = Math.log(Math.abs(12 * Math.sin(x)));

      // Взаимодействуем с #answer
      cy.get("#answer")
        .clear()
        .type(f);

      cy.get("#robotCheckbox").check();
      cy.get("#robotsRule").check();
    
    cy.get(".btn.btn-default").click();
    });

    
// Ожидаем появления алерта и получаем его текст
cy.on("window:alert", (alertText) => {
  // Выводим текст алерта в консоль
  console.log("Alert Text: " + alertText);
});
// Завершаем выполнение теста
cy.end();
    
  });
  

});


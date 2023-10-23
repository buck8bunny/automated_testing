import MathPage from "./mathPage";

describe("Math Test", function () {
  it("Solve the math problem", function () {
    MathPage.visit();
    MathPage.solveMathProblem();

    cy.on("window:alert", (alertText) => {
      console.log("Alert Text: " + alertText);
    });
  });
});

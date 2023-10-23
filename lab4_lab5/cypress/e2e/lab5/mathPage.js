class MathPage {
    visit() {
      cy.visit("http://suninjuly.github.io/math.html");
    }
  
    getInputValue() {
      return cy.get("#input_value");
    }
  
    getAnswerInput() {
      return cy.get("#answer");
    }
  
    getRobotCheckbox() {
      return cy.get("#robotCheckbox");
    }
  
    getRobotsRuleCheckbox() {
      return cy.get("#robotsRule");
    }
  
    getSubmitButton() {
      return cy.get(".btn.btn-default");
    }
  
    solveMathProblem() {
      this.getInputValue().should("be.visible").then(($input) => {
        const x = parseInt($input.text());
        const f = Math.log(Math.abs(12 * Math.sin(x)));
        this.getAnswerInput().clear().type(f);
        this.getRobotCheckbox().check();
        this.getRobotsRuleCheckbox().check();
        this.getSubmitButton().click();
      });
    }
  }
  
  export default new MathPage();
  
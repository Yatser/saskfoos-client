/// <reference types="Cypress" />

describe("Current event", () => {
  beforeEach(() => {
    cy.visit("/event");
  });
});

describe("KOH event", () => {
  beforeEach(() => {
    cy.visit("/event");
  });

  it("shows the correct <h1>", () => {
    cy.contains("h1", "KOH");
  });

  it("shows a list of the players in the event", () => {
    cy.get("[data-cy=teams] [data-cy=team]")
      .should("have.length", 3)
      .and(($teams) => {
        expect($teams.get(0).textContent).to.equal("Brent");
        expect($teams.get(1).textContent).to.equal("Barry");
        expect($teams.get(2).textContent).to.equal("Jeremy");
      });
  });

  it("shows a list of the first called matches", () => {
    cy.get("[data-cy=matches]").contains("[data-cy=match]", "Brent");
    cy.get("[data-cy=matches]").contains("[data-cy=match]", "Barry");
  });

  it("enters the result when the button is clicked", () => {
    cy.get("[data-cy=matches]")
      .get("[data-cy=match]")
      .get("button")
      .contains("Enter Result")
      .click();
      // TODO: Use the application API to find that the result was recorded
  });

  describe("when a match is recorded", () => {
    beforeEach(() => {
      // TODO: Refactor this to use the application API
      cy.get("[data-cy=matches]")
      .get("[data-cy=match]")
      .get("button")
      .contains("Enter Result")
      .click();
    });

    it("should show the next match", () => {
      cy.get("[data-cy=matches] [data-cy=match]").should("have.length", 2);
    });

    describe("the finished match", () => {
      it("should remove the option to enter a result", () => {});
    });

    describe("the new match", () => {
      it("should contain the winning team from the last match, and the first team in the waiting list", () => {
        cy.get("[data-cy=matches]").contains("Brent");
        cy.get("[data-cy=matches]").contains("Jeremy");
      });
    });
  });

  describe("when undo is clicked", () => {
    it("should cancel the last match", () => {});
  });
});

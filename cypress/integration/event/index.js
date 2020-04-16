/// <reference types="Cypress" />
describe("Current event", () => {
  beforeEach(() => {
    cy.visit("/event");
  });
});

describe("KOH event", () => {
  beforeEach(() => {
    cy.task('seedMatches');
    cy.visit("/event");
  });

  it("shows the correct <h1>", () => {
    cy.contains("h1", "KOH");
  });

  it("shows a list of the players in the event", () => {
    cy.window().then(win => {
      cy.get("[data-testid=teams] [data-testid=team]")
        .should("have.length", 3)
        .and(($teams) => {
          expect($teams.map(t => {debugger; return ''})).to.deep.eq(win.teams);
        });
    });
  });

  it("shows a list of the first called matches", () => {
    cy.get("[data-testid=matches]").contains("[data-testid=match]", "Brent");
    cy.get("[data-testid=matches]").contains("[data-testid=match]", "Barry");
  });

  it("enters the result when the button is clicked", () => {
    cy.get("[data-testid=enter-result]")
      .click();
    cy.window().then(win => {
      expect(win.matches.length).to.equal(2);
    });
  });

  describe("when a match is recorded", () => {
    beforeEach(() => {
      cy.window().invoke('enterResult')
    });

    it("should show the next match", () => {
      cy.get("[data-testid=matches] [data-testid=match]").should("have.length", 2);
    });

    describe("the finished match", () => {
      it("should remove the option to enter a result", () => {});
    });

    describe("the new match", () => {
      it("should contain the winning team from the last match, and the first team in the waiting list", () => {
        cy.get("[data-testid=matches]").contains("Brent");
        cy.get("[data-testid=matches]").contains("Jeremy");
      });
    });
  });

  describe("when undo is clicked", () => {
    it("should cancel the last match", () => {});
  });
});

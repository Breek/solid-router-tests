describe("Navigating", () => {
  it("using regular <a> tags", () => {
    cy.visit("/");
    cy.get(`[data-test="index"]`).click();
    cy.get(`h1`).should("have.text", "Hello world!");
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 0");
    cy.get(`[data-test="counter"]`).click();
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 1");

    cy.visit("/");
    cy.get(`[data-test="about"]`).click();
    cy.get(`h1`).should("have.text", "About");
  });
});

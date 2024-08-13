describe("Rewriting", () => {
  it("should lead to proper route and hydrate server-side", () => {
    cy.visit("/keyboards/ergo.html");
    cy.get(`h1`).should("have.text", "Product 1");
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 0");
    cy.get(`[data-test="counter"]`).click();
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 1");

    cy.visit("/pointing-devices/mouse.html");
    cy.get(`h1`).should("have.text", "Product 2");
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 0");
    cy.get(`[data-test="counter"]`).click();
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 1");

    cy.visit("/monitors/big-screen.html");
    cy.get(`h1`).should("have.text", "Product 3");
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 0");
    cy.get(`[data-test="counter"]`).click();
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 1");
  });

  it("should lead to proper route and hydrate client-side", () => {
    // With client side navigation we keep state of counter
    cy.visit("/");

    cy.contains("Ergo keyboard").click();
    cy.get(`h1`).should("have.text", "Product 1");
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 0");
    cy.get(`[data-test="counter"]`).click();
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 1");

    cy.contains("Mouse").click();
    cy.get(`h1`).should("have.text", "Product 2");
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 1");
    cy.get(`[data-test="counter"]`).click();
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 2");

    cy.contains("Big screen").click();
    cy.get(`h1`).should("have.text", "Product 3");
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 2");
    cy.get(`[data-test="counter"]`).click();
    cy.get(`[data-test="counter"]`).should("include.text", "Clicks: 3");
  });
});

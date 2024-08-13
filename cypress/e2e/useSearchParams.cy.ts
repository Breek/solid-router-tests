describe("useSearchParams", () => {
  it("update URL", () => {
    /////////////////////////////
    // Keyboard (server-side navigation)
    cy.visit("/keyboards/ergo.html");
    cy.url().should("include", "/keyboards/ergo.html");

    // By default no search params
    cy.get(`[data-test="sort"]`).should("include.text", "Sort: none");

    cy.get(`button`).contains("Sort by rating").click();
    cy.get(`[data-test="sort"]`).should("include.text", "Sort: rating");
    cy.url()
      .should("not.include", "/product/1")
      .should("include", "/keyboards/ergo.html")
      .and("include", "sort=rating");

    cy.get(`button`).contains("Sort by relevance").click();
    cy.get(`[data-test="sort"]`).should("include.text", "Sort: relevance");
    cy.url()
      .should("not.include", "/product/1")
      .should("include", "/keyboards/ergo.html")
      .and("include", "sort=relevance");

    /////////////////////////////
    // Mouse
    cy.contains("Mouse").click();
    cy.url().should("include", "/pointing-devices/mouse.html");

    // By default no search params
    cy.get(`[data-test="sort"]`).should("include.text", "Sort: none");

    cy.get(`button`).contains("Sort by rating").click();
    cy.get(`[data-test="sort"]`).should("include.text", "Sort: rating");
    cy.url()
      .should("not.include", "/product/2")
      .should("include", "/pointing-devices/mouse.html")
      .and("include", "sort=rating");

    cy.get(`button`).contains("Sort by relevance").click();
    cy.get(`[data-test="sort"]`).should("include.text", "Sort: relevance");
    cy.url()
      .should("not.include", "/product/2")
      .should("include", "/pointing-devices/mouse.html")
      .and("include", "sort=relevance");

    /////////////////////////////
    // Display
    cy.contains("Big screen").click();
    cy.url().should("include", "/monitors/big-screen.html");

    // By default no search params
    cy.get(`[data-test="sort"]`).should("include.text", "Sort: none");

    cy.get(`button`).contains("Sort by rating").click();
    cy.get(`[data-test="sort"]`).should("include.text", "Sort: rating");
    cy.url()
      .should("not.include", "/product/3")
      .should("include", "/monitors/big-screen.html")
      .and("include", "sort=rating");

    cy.get(`button`).contains("Sort by relevance").click();
    cy.get(`[data-test="sort"]`).should("include.text", "Sort: relevance");
    cy.url()
      .should("not.include", "/product/3")
      .should("include", "/monitors/big-screen.html")
      .and("include", "sort=relevance");
  });
});

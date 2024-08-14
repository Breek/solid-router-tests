describe("useLocation", () => {
  it("should match browser URL", () => {
    /////////////////////////////
    // Keyboard (server-side navigation)
    cy.visit("/keyboards/ergo.html");
    cy.url().should("include", "/keyboards/ergo.html");

    // By default no search params
    cy.get(`[data-test="location"]`).should(
      "include.text",
      "/keyboards/ergo.html"
    );

    /////////////////////////////
    // Mouse
    cy.contains("Mouse").click();
    cy.url().should("include", "/pointing-devices/mouse.html");

    cy.url()
      .should("not.include", "/product/2")
      .should("include", "/pointing-devices/mouse.html");

    cy.get(`[data-test="location"]`).should(
      "include.text",
      "/pointing-devices/mouse.html"
    );

    /////////////////////////////
    // Display
    cy.contains("Big screen").click();
    cy.url().should("include", "/monitors/big-screen.html");

    cy.url()
      .should("not.include", "/product/3")
      .should("include", "/monitors/big-screen.html");

    cy.get(`[data-test="location"]`).should(
      "include.text",
      "/monitors/big-screen.html"
    );
  });
});

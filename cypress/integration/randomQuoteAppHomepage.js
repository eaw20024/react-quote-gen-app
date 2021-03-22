describe("Renders the Random Quote Gen App Homepage", () => {
  it("renders the homepage correctly", () => {
    cy.visit("/");
    cy.get(".random-quote-app").should("exist");
  });
});

describe("Testing the Quote Garden API", () => {
  it("GET - read", () => {
    cy.request(
      "GET",
      "https://quote-garden.herokuapp.com/api/v3/quotes/random?&count=5"
    ).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
      expect(response.body.data).to.have.length(5);
    });
  });
});

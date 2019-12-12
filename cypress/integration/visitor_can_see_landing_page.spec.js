describe('Visitor can see landing page', () => {
  it('visitor can see content when loading landing page', () => {
    cy.visit('/')

    cy.get(".divTop")
        .should("contain", "Rock Paper Scissors")      
  });
})
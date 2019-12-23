describe('Visitor can see landing page', () => {
  it('visitor can see content when loading landing page', () => {
    cy.visit('/')

    cy.get(".divTop")
        .should("contain", "Rock Paper Scissors")    
        .and("contain", "Play the game")  

    cy.get("#toBack")
      .should("contain", " Choose your Weapon")
      .and("contain", "is waiting... TO DESTROY YOU")

    cy.get("#toBack").contains("Rock").click()
    cy.get("#toBack").contains("Paper").click()
    cy.get("#toBack").contains("Scissors").click()
    
    cy.get(".divbottom")
      .should("contain", "Computer's Score!")
      .and("contain", "Your Score!")

    cy.get(".divbottom").contains("Reset").click()

    cy.get(".divbottom")
      .should("contain", "Computer's Score! 0")
      .and("contain", "Your Score! 0")

  });
})
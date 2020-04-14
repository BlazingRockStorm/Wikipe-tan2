describe('My First Test', () => {
  it('Visits the Wikpedia viewer', () => {
    cy.visit('/')

    cy.get('a[href="https://en.wikipedia.org/wiki/Special:Random"]').should('have.attr', 'target', 'blank')

    cy.get('#searchTerm')
      .type('X Japan')
      .get('#search')
      .click()

    cy.get('.out-result')
      .should('contain', 'li')
      .should('contain','X Japan')
  })
})
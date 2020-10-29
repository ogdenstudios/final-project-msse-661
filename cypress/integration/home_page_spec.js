describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8910')
  })
  it('has a link to sign in', () => {
    cy.get('[data-cy=signInLink]').should('exist')
  })
  it('has a link to sign up'),
    () => {
      cy.get('[data-cy=signUpLink]').should('exist')
    }
})

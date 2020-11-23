/* eslint-disable no-undef */

const getIframeDocument = () => {
  return cy
    .get('#netlify-identity-widget')
    .its('0.contentDocument')
    .should('exist')
}

const getIframeBody = () => {
  return getIframeDocument()
    .its('body')
    .should('not.be.undefined')
    .then(cy.wrap)
}
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  it('takes user input', () => {
    cy.visit('/')
    window.localStorage.setItem(
      'netlifySiteURL',
      'https://tyler-williams-msse661-final-project.netlify.app'
    )
    cy.get('[data-cy=homePageAuthButton]').click()
    getIframeBody().find('[name=email]').type('tyler@ogdenstudios.xyz')
    getIframeBody().find('[name=password]').type('password')
    getIframeBody().find('[type=submit]').click()
    cy.get('[data-cy=potOdds]').type('50')
    cy.get('[data-cy=handStrength]').type('50')
    cy.get('[data-cy=submitAnswer]').click()
  })
})

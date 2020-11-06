/* eslint-disable no-undef */

describe('The sign in button', () => {
  // Netlify Identity runs in an iframe, so I used this article to add some custom functions to Cypress: https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/

  const getIframeDocument = () => {
    return (
      cy
        .get('#netlify-identity-widget')
        // Cypress yields jQuery element, which has the real
        // DOM element under property "0".
        // From the real DOM iframe element we can get
        // the "document" element, it is stored in "contentDocument" property
        // Cypress "its" command can access deep properties using dot notation
        // https://on.cypress.io/its
        .its('0.contentDocument')
        .should('exist')
    )
  }

  const getIframeBody = () => {
    // get the document
    return (
      getIframeDocument()
        // automatically retries until body is loaded
        .its('body')
        .should('not.be.undefined')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        .then(cy.wrap)
    )
  }

  it('works', () => {
    cy.visit('/')
    window.localStorage.setItem(
      'netlifySiteURL',
      'https://tyler-williams-msse661-final-project.netlify.app'
    )
    cy.get('[data-cy=homePageAuthButton]').click()
    getIframeBody().find('[name=email]').type('tyler@ogdenstudios.xyz')
    getIframeBody().find('[name=password]').type('password')
    getIframeBody().find('[type=submit]').click()
    cy.get('[data-cy=homePageAuthButton]').should('contain', 'Log out')
  })
})

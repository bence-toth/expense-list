/* global context, cy */
/* eslint-disable sonarjs/no-duplicate-string */

context('Settings', () => {
  beforeEach(() => {
    cy.viewport(1200, 1000)
    cy.visit('https://localhost:8080/')
  })

  it('Can change language', () => {
    cy.get('.toolbarButton.settings')
      .click()
    cy.get('.modal .language')
      .contains('Danish')
      .click()
    cy.get('.modal .language')
      .contains('Danish')
      .should('not.exist')
    cy.get('.modal .language')
      .contains('Dansk')
      .should('exist')
    cy.get('.modal .language')
      .contains('UK')
      .click()
  })

  it('Can change preferred currency', () => {
    cy.get('.toolbarButton.settings')
      .click()
    cy.get('.modal .currency')
      .contains('DKK')
      .click()
    cy.get('.closeModalButton')
      .click()
    cy.get('.expenses .expenseButton .amount.converted')
      .should(([node]) => {
        expect(node.textContent.startsWith('DKK')).to.equal(true)
      })
    cy.get('.toolbarButton.settings')
      .click()
    cy.get('.modal .currency')
      .contains('EUR')
      .click()
  })
})

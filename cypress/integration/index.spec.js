/* global context, cy */
/* eslint-disable sonarjs/no-duplicate-string */

context('Expenses', () => {
  beforeEach(() => {
    cy.viewport(1200, 1000)
    cy.visit('https://localhost:8080/')
  })

  it('Shows expenses on page load', () => {
    cy.get('.expenses .expenseButton')
      .should('exist')
    cy.get('.expenses .expenseButton')
      .first()
      .as('ExpenseSummary')
    cy.get('@ExpenseSummary')
      .find('.category')
      .should('exist')
    cy.get('@ExpenseSummary')
      .find('.merchant')
      .should('exist')
    cy.get('@ExpenseSummary')
      .find('.user')
      .should('exist')
    cy.get('@ExpenseSummary')
      .find('.date')
      .should('exist')
    cy.get('@ExpenseSummary')
      .find('.amount')
      .should('exist')
  })

  it('Loads more expenses on scroll to bottom', () => {
    const pageSize = 15
    cy.get('.expenses .expenseButton')
      .its('length')
      .should('be', pageSize)
    cy.get('.expenses')
      .scrollTo('bottom')
    cy.wait(100)
    cy.get('.expenses .expenseButton')
      .its('length')
      .should('be.gt', pageSize)
  })

  // Opens modal (also check modal content)
  // Upload receipt
  // Update comment
  // Apply filters (also check empty state)
  // Change settings
})

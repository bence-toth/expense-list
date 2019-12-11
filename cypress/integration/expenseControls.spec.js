/* global context, cy */
/* eslint-disable sonarjs/no-duplicate-string */

context('Expense controls', () => {
  beforeEach(() => {
    cy.viewport(1200, 1000)
    cy.visit('https://localhost:8080/')
  })

  it('Applies search query', () => {
    cy.get('#expenseSearch')
      .clear()
      .type('ab')
    cy.wait(200)
    cy.get('.expenses .expenseButton')
      .each(button => {
        cy.wrap(button)
          .contains(/ab/i)
          .should('exist')
      })
  })

  it('Applies amount filters', () => {
    cy.get('#maxAmount')
      .clear()
      .type(1000)
      .type('{home}{del}')
    cy.get('#minAmount')
      .clear()
      .type(500)
      .type('{home}{del}')
    cy.wait(200)
    cy.get('.expenses .expenseButton')
      .each(button => {
        cy.wrap(button)
          .get('.amount.converted')
          .should(([node]) => {
            const amount = +(node.textContent.substring(1))
            expect(amount).to.be.at.least(500)
            expect(amount).to.be.at.most(1000)
          })
      })
  })

  it('Applies currency filters', () => {
    cy.get('.currencyFilter > .filterButtonGroup > :nth-child(1)')
      .click()
    cy.get('.currencyFilter > .filterButtonGroup > :nth-child(2)')
      .click()
    cy.wait(200)
    cy.get('.expenses .expenseButton')
      .each(button => {
        cy.wrap(button)
          .get('.amount.converted')
          .should('not.exist')
      })
  })

  it('Applies category filters', () => {
    cy.get('.filterButtonGroup > .transport')
      .click()
    cy.get('.filterButtonGroup > .plane')
      .click()
    cy.get('.filterButtonGroup > .hotel')
      .click()
    cy.get('.filterButtonGroup > .unknown')
      .click()
    cy.wait(200)
    cy.get('.expenses .expenseButton')
      .each(button => {
        cy.wrap(button)
          .get('.food')
          .should('exist')
      })
    cy.reload()
    cy.get('.filterButtonGroup > .transport')
      .click()
    cy.get('.filterButtonGroup > .plane')
      .click()
    cy.get('.filterButtonGroup > .food')
      .click()
    cy.get('.filterButtonGroup > .unknown')
      .click()
    cy.wait(200)
    cy.get('.expenses .expenseButton')
      .each(button => {
        cy.wrap(button)
          .get('.hotel')
          .should('exist')
      })
  })

  it('Shows empty state if there are no matches', () => {
    cy.get('#expenseSearch')
      .clear()
      .type('not gonna find me')
    cy.wait(200)
    cy.get('.expenses .expenseButton')
      .should('not.exist')
    cy.get('.emptyState')
      .should('exist')
  })
})

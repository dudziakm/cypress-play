/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('login', () => {
    beforeEach(() => {
        visitLoginPage()
    })

    it('visit login page', () => {

    })

    it('forget my password - fake email', () => {
        cy.get('.login__forgot-password').click()
        cy.get('#PasswordReset_email').type('test11111@xd.xd.pl')
        cy.get('.btn').click()
        cy.contains('No user corresponding to that email address could be found.')
    })

/*     it('login', () => {
        cy.get('#username').type('auto_tests_cm')
        cy.get('#password').type('  ')
        cy.get('.login__submit').click()
    }) */
})


const visitLoginPage = () => {
    cy.visit('https://dev.ionoview.com/site/login')
}
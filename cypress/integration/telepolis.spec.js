/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('login', () => {
    beforeEach(() => {
        visitLoginPage()
    })

    it('forget my password - fake email', () => {
        cy.get('.menu-burger').click()
        cy.get('#navigation-navbar > nav > :nth-child(1) > :nth-child(2)').click()
        cy.url().should('include', 'wiadomosci')
        cy.contains('TikTok w Orange Flex bez limitu GB').click({force: true})
        cy.url().should('include', 'tiktok-w-orange-flex-bez-limitu-gb-efekt-wspolpracy-z-tworcami-aplikacji') 
        cy.contains('Aplikacje i rozrywka')
        cy.contains('Jak mówi Artur Stankiewicz, dyrektor Marketingu Rynku Konsumenckiego Orange:')
    })
})


const visitLoginPage = () => {
    cy.visit('https://www.telepolis.pl/wiadomosci')
    cy.get('.button').click()
}
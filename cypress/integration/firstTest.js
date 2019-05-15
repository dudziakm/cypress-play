describe('My first Test', function(){
    it('Visit the Kitchen Sink', function(){
        cy.visit('https://example.cypress.io')    

        cy.contains('type').click()
        
        // should be on a new URL which includes commands/actions:
        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
            .type('tesst@email.com')
            .should('have.value', 'tesst@email.com')
    })
})
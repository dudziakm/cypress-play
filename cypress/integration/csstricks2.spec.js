/// <reference types="Cypress" />

describe('test css tricks page', ()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.viewport(1500,700)
    })

    describe('site search', ()=>{
        beforeEach(()=>{
            cy.get('.search-field').type('flexbox{enter}')
        })

        it('request the results', function() {
            //cy.get('.icon-burger').should('be.visible');
            cy.url().should('include', '?s=flexbox')
        })
        describe('Search results page', function() {
            beforeEach(()=>{
                cy.visit('/?s=flexbox');
            })

            it('displays search results', ()=>{
                cy.get('.search-grid-list li').should('exist');
            })


        });
    })

})
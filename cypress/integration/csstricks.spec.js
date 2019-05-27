/// <reference types="Cypress" />

describe('test css tricks page', ()=>{
    beforeEach(()=>{
        cy.visit('https://css-tricks.com/');
    })
    
/*     it('should be true', ()=>
    {
        expect(1).to.equal(1)
    })
 */
    it('contains "CSS-Tricks" in the title', ()=>{
        cy.title().should('contain', 'CSS-Tricks')
    })
    it('has a visible star logo', ()=>{
        cy.get('.icon-logo-star').should('be.visible')
    })


    describe('with a 320x568 viewport', ()=>{
        beforeEach(()=>{
            cy.viewport(320,568)
        })

        it('has a visible mobile menu toggle', function() {
            cy.get('.icon-burger').should('be.visible');
          })
    })

    describe('with a 1085 viewport', function() {
        beforeEach(function() {
          cy.viewport(500, 660);
        });
      
        it('has a visible mobile menu toggle', function() {
            cy.get('.icon-burger').should('be.visible');
        });
      })

})
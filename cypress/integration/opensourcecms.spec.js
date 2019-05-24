/// <reference types="Cypress" />

before(()=>{

})

describe('login and add new post', () => {
    it('should login', ()=>{
        // given
        visitLoginPage()
        loginAsAdmin()

        //when
        cy.get('[aria-haspopup="true"] > .ab-label').click()
        cy.get('.components-popover__content > .components-icon-button').click()
        cy.get('#post-title-0').type('test post')
        cy.get('.editor-post-publish-panel__toggle').click()
        cy.get('.editor-post-publish-panel__header-publish-button > .components-button').click()
        //then
        cy.contains('Post published.')

        //and
        cy.get('.components-notice__content > .components-button').click()
        //then
        cy.url().should('contains', '/test-post-')

        //and
        cy.get('#comment').type('My first comment')
        cy.get('#submit').click()
        //then
        cy.url().should('contains', '/test-post-').should('contains', '/#comment-')
        cy.contains('My first comment')


    })
    it('should add new post', ()=>{

    })
})

const visitLoginPage = () => {
    cy.visit('https://s1.demo.opensourcecms.com/wordpress/wp-login.php')
}

const loginAsAdmin = () => {
    cy.wait(1)
    cy.get('#user_login').click().type('opensourcecms')
    cy.wait(1)
    cy.get('#user_pass').type('opensourcecms')
    cy.get('#wp-submit').click()
    cy.url().should('contains', 'wordpress/wp-admin/')
}
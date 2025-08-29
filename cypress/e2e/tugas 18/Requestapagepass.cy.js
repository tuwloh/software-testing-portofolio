/// <reference types="cypress" />

describe('API Testing', () => {
    it('Request a page',() => {
        cy.request({
            url: 'http://reqres.in',
        followRedirect: false,
        }).then((resp) =>{
            expect(resp.status).to.eq(301)  
        })       
    })
})
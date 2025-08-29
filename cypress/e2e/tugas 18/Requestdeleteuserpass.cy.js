/// <reference types="cypress" />

describe('API Testing', () => {
    it('Request delete data',() => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/6',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
    }).its('status').should('equal',204) 
    })
})
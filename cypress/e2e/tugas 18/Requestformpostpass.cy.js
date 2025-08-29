/// <reference types="cypress" />

describe('API Testing', () => {
    it('Request html form submissions',() => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            form: true,
            body: {
                'email': 'eve.holt@reqres.in',
                'password': 'cityslicka',
            },
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
    }).its('status').should('equal',200) 
    })
})
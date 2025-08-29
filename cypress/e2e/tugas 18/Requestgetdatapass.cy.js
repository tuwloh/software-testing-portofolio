/// <reference types="cypress" />

describe('API Testing', () => {
    it('Request data users',() => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
    }).then((resp) => {
        expect(resp.body).to.have.property('data')
        expect(resp.body.data).to.be.an('array')
    })
    })
})
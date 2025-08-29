/// <reference types="cypress" />

describe('API Testing', () => {
    it('Request single user data',() => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/7',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
    }).then((resp) => {
        expect(resp.body).to.have.property('data')
        expect(resp.body.data).to.have.property('last_name', 'Lawson')
        expect(resp.body.data).to.have.property('id')
    })
    })
})
/// <reference types="cypress" />

describe('API Testing', () => {
    it('Request download pdf file',() => {
        cy.request({
            url: 'https://www.dropbox.com/s/2w7gaeydx02qs40/Reqres_Advertising_Proposal.pdf',
            encoding: 'binary',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
    }).then((resp) =>{
        cy.writeFile('C:/Users/ASUS/Downloads/Reqres_Advertising_Proposal.pdf', resp.body, 'binary')
    })
    })
})
/// <reference types="cypress" />

describe('API Testing', () => {
    it('Request data url',() => {
        cy.request({
            url: 'https://reqres.in/img/faces/10-image.jpg',
            encoding: 'base64',
        }).then((response) =>{
            const base64Content = response.body
            const mime = response.headers['content-type']
            const imageDataUrl = 'data:${mime};base64,${base64Content}'
        })       
    })
})
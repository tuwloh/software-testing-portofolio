describe('fitur intercept untuk menyelidiki serangan siber', () => {
  it('intercept click menggunakan password yang tidak terdaftar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="username"]').should('have.value', 'Admin')
    cy.get('[name="password"]').type('lahirtahun1985')
    cy.get('[name="password"]').should('have.value', 'lahirtahun1985')
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('login');
    cy.get('[type="submit"]').click();
    cy.wait('@login').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(304);
    })
  })
})
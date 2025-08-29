describe('case_login', () => {
  it('passes tidak input apapun di kolom password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="username"]').should('have.value', 'Admin')
    cy.get('[name="password"]').should('be.empty')
    cy.get('[type="submit"]').click();
  })
})
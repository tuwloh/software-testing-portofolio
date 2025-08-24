describe('case_login', () => {
  it('passes menggunakan username yang tidak terdaftar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('deyede')
    cy.get('[name="username"]').should('have.value', 'deyede')
    cy.get('[name="password"]').type('admin123')
    cy.get('[name="password"]').should('have.value', 'admin123')
    
  })
})
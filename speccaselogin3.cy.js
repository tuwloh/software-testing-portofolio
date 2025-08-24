describe('case_login', () => {
  it('passes menggunakan username dan password yang sudah terdaftar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="username"]').should('have.value', 'Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[name="password"]').should('have.value', 'admin123')
    cy.get('[type="submit"]').click();
  })
})
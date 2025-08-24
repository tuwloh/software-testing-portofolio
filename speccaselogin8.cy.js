describe('case_login', () => {
  it('passes tidak input apapun di kolom username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').should('be.empty')
    cy.get('[name="password"]').type('admin123')
    cy.get('[name="password"]').should('have.value', 'admin123')
    
  })
})
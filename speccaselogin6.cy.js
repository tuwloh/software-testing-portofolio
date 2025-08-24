describe('case_login', () => {
  it('passes menggunakan password yang tidak terdaftar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="username"]').should('have.value', 'Admin')
    cy.get('[name="password"]').type('lahirtahun1985')
    cy.get('[name="password"]').should('have.value', 'lahirtahun1985')
    
  })
})
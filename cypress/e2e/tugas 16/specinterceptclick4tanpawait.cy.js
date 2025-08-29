describe('fitur intercept untuk menyelidiki serangan siber', () => {
  it('intercept click tidak input apapun di kolom username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').should('be.empty')
    cy.get('[name="password"]').should('be.empty')
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('login');
    cy.get('[type="submit"]').click();
    
  
  })
})
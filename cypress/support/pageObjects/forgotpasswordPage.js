class forgotpasswordPage{
    visit(){ cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')}
    
    intercept(alias="Requestreset"){
        cy.intercept("GET","**/auth/requestPasswordResetCode").as('Requestreset');
        return this;
    }
    tekantombolForgotyourpassword(){cy.request('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')}
    inputResetUsername(username){
        cy.get('[name="username"]').type(username)
        cy.get('[name="username"]').should('have.value', username)
    }
    tekantombolresetPassword(){cy.get('[type="submit"]').click()}
    tekantombolCancel(){cy.request('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')}
}
export default new forgotpasswordPage()
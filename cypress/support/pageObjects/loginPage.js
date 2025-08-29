class loginPage{
    visit(){ cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')}
    inputUsername(username){
        cy.get('[name="username"]').type(username)
        cy.get('[name="username"]').should('have.value', username)
    }
    inputPassword(password){
        cy.get('[name="password"]').type(password)
        cy.get('[name="password"]').should('have.value', password)
    }
    intercept(alias="pomlogin"){
        cy.intercept("GET","**/auth/validate").as('pomlogin');
        return this;
    }
    tekantombolLogin(){cy.get('[type="submit"]').click()}
    verifyLoginSuccess(){cy.url().should("include","/dashboard")}
    verifyUsernamePasswordError(){}
    verifyUsernameRequiredError(){}
    verifyPasswordRequiredError(){}
}
export default new loginPage()
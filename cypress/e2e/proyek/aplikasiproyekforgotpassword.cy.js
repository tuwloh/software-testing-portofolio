import forgotpasswordPage from "D:/hidtesting/cypress/portofolio/cypress/e2e/cypress/support/pageObjects/forgotpasswordPage";
import loginPage from "D:/hidtesting/cypress/portofolio/cypress/e2e/cypress/support/pageObjects/loginPage";
import loginData from "D:/hidtesting/cypress/portofolio/cypress/e2e/cypress/fixtures/loginData.json"

describe('case tidak mengingat password pom',() =>{
    beforeEach(() =>{
        loginPage.visit();
    })
    it('Kendala password - permintaan ubah password',() =>{
            forgotpasswordPage.tekantombolForgotyourpassword();
            forgotpasswordPage.inputResetUsername(loginData.validUsername);
            forgotpasswordPage.tekantombolresetPassword();
    });
    it('Kendala password - tidak jadi',() =>{
        forgotpasswordPage.tekantombolForgotyourpassword();
        forgotpasswordPage.tekantombolCancel();
    })
})
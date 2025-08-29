import loginPage from "D:/hidtesting/cypress/portofolio/cypress/e2e/cypress/support/pageObjects/loginPage";
import loginData from "D:/hidtesting/cypress/portofolio/cypress/e2e/cypress/fixtures/loginData.json"

describe('case login pom',() =>{
    beforeEach(() =>{
        loginPage.visit();
    });
    it('loginBisa',() =>{
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.tekantombolLogin()
        loginPage.verifyLoginSuccess()
    })
    it('loginTidakbisa - invalidUsername',() =>{
        loginPage.inputUsername(loginData.invalidUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.tekantombolLogin()
        loginPage.verifyUsernamePasswordError()
    })
    it('loginTidakbisa - invalidPassword',() =>{
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.invalidPassword)
        loginPage.tekantombolLogin()
        loginPage.verifyUsernamePasswordError()
    })
    it('loginTidakbisa - emptyUsername',() =>{
        loginPage.inputUsername(loginData.emptyUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.tekantombolLogin()
        loginPage.verifyUsernameRequiredError()
    })
    it('loginTidakbisa - emptyPassword',() =>{
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.emptyPassword)
        loginPage.tekantombolLogin()
        loginPage.verifyPasswordRequiredError()
    })
})
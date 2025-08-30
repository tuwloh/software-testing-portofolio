import sidebarMenu from "D:/hidtesting/cypress/portofolio/cypress/e2e/cypress/support/pageObjects/sidebarMenu";
import loginPage from "D:/hidtesting/cypress/portofolio/cypress/e2e/cypress/support/pageObjects/loginPage";
import loginData from "D:/hidtesting/cypress/portofolio/cypress/e2e/cypress/fixtures/loginData.json"

describe('case login pom',() =>{
    beforeEach(() =>{
        loginPage.visit();
    });
    it('Menu di sebelah kiri - lihat',() =>{
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.tekantombolLogin()
        loginPage.verifyLoginSuccess()
        sidebarMenu.tekanburgerTiga();
    })
    it('Menu di sebelah kiri - sembunyikan',() =>{
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.tekantombolLogin()
        loginPage.verifyLoginSuccess()
        sidebarMenu.tekantandaX();
    })
})
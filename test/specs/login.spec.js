import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import dashboardPage from '../pageobjects/dashboard.page.js'

describe('My Login application', () => {
    const email = "matej.vitkovic@live.com"
    const password = "matejmatej"
    const wrongEmail = "matej.vitkovic123@live.com"
    before(async () => {
        await browser.url(loginPage.loginUrl);
    });

    it('should login with invalid credentials', async () => {
        await loginPage.doLogin(wrongEmail, password)
        await expect(loginPage.validationError).toExist()
    })

    it('should login with valid credentials', async () => {
        await loginPage.doLogin(email, password)
        await expect(dashboardPage.userDropdown).toExist()
    })
    it('should log out', async () => {
        browser.setWindowSize(1920, 1080);
            await dashboardPage.userDropdown.click();
            await dashboardPage.logoutButton.click();
        
        await expect(loginPage.inputEmail).toExist()
    })
})
const loginPage = require('../../pages/login/loginPage');
const { loginData } = require('../../data/login/loginData');
const { loginLocator } = require('../../locator/login/loginLocator');
const { email, password } = loginData;
const { emailLocator, passwordLocator } = loginLocator;

Given('User hits marketcube url', () => {
    loginPage.openApp();
});

When('User verifies the label of all fields', () => {
    loginPage.verifyLabel();
});

When('User verifies the signIn button', () => {
    loginPage.verifyButton();
});

When('User enters the email', () => {
    loginPage.enterDetails(email, emailLocator);
});

When('User enters the password', () => {
    loginPage.enterDetails(password, passwordLocator);
});

Then('User clicks on signIn button', () => {
    loginPage.clickButton();
});

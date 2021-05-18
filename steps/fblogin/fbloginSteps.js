const fbloginPage = require('../../pages/fblogin/fbloginPage');
const { fbLoginData } = require('../../data/fblogin/loginData');
const { fbloginLocator } = require('../../locator/fblogin/fbloginLocator');
const { email, password } = fbLoginData;
const { emailLocator, passwordLocator } = fbloginLocator;

Given('User hits facebook url', () => {
    fbloginPage.openApp();
});

When('User verifies the label of all fields', () => {
    fbloginPage.verifyLabel();
});

When('User verifies the signIn button', () => {
    fbloginPage.verifyButton();
});

When('User enters the email', () => {
    fbloginPage.enterDetails(email, emailLocator);
});

When('User enters the password', () => {
    fbloginPage.enterDetails(password, passwordLocator);
});

Then('User clicks on signIn button', () => {
    fbloginPage.clickButton();
});
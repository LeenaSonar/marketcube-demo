const I = require('../../customStep');
const { fbLoginData } = require('../../data/fblogin/loginData');
const { fbloginLocator } = require('../../locator/fblogin/fbloginLocator');

module.exports = {
    openApp() {
        I.amOnPage('https://www.facebook.com/login');
    },

    verifyLabel() {
        I.seeTextEquals(fbLoginData.usernameLabl, fbloginLocator.usernameLabel);
    },

    verifyButton() {
        I.seeTextEquals(fbLoginData.buttonLabel, fbloginLocator.buttonLabel);
    },

    enterDetails(data, locators) {
        I.fillField(locators, data);
    },

    clickButton() {
        I.waitForElement(fbloginLocator.loginButton, 10)
        I.click(fbloginLocator.loginButton);
    },
}
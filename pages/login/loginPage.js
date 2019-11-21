const I = require('../../customStep');
const { loginData } = require('../../data/login/loginData');
const { loginLocator } = require('../../locator/login/loginLocator');

module.exports = {
    openApp() {
        I.amOnPage('https://test.marketcube.io/login');
    },

    verifyLabel() {
        I.seeTextEquals(loginData.usernameLabel, loginLocator.usernameLabel);
    },

    verifyButton() {
        I.seeTextEquals(loginData.buttonLabel, loginLocator.buttonLabel);
    },

    enterDetails(data, locators) {
        I.fillField(locators, data);
    },

    clickButton() {
        I.waitForElement(loginLocator.loginButton, 10)
        I.click(loginLocator.loginButton);
        I.wait(12);
    },
}


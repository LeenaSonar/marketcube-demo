const I = require('../../customStep');
const { venderData } = require('../../data/venderdata/venderData');
const { venderLocator } = require('../../locator/venderlocator/venderLocator');

module.exports = {
    openLink() {
        I.amOnPage('https://test.marketcube.io/?tabKey=suppliers');
        I.wait(12);
    },
}



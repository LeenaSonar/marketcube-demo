const I = require('../../customStep');
const { vendorData } = require('../../data/vendordata/vendorData');
const { vendorLocator } = require('../../locator/vendorlocator/vendorLocator');
const { VendorLocator } = vendorLocator
module.exports = {
    clickVendor(locator) {
        I.click(locator);
        I.wait(10);
    },

    selectChoice(selectLocator, optionToSelect) {
        I.selectOption(selectLocator, optionToSelect);
        I.wait(10);
    },
    fillInputField(fieldLocator, fieldText) {
        I.fillField(fieldLocator, fieldText)
    },

    searchVendor() {
        I.fillField(vendorLocator.searchFieldLocator, vendorData.brandName);
        I.seeTextEquals(vendorData.brandName, vendorLocator.searchedItemLocator);
    }



}
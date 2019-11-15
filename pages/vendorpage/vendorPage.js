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
    submit(locator) {
        I.click(locator);
        I.see('This Field is Required');
        I.see('This Field is Required');
        I.see('This Field is Required');
        I.see('Please enter a valid email');
        I.see('This Field is Required');
        I.see('This Field must be 7 Characters long');
        I.see('Brand Name is Required');
        I.see('Street Address is Required');
        I.see('City is Required');
        I.see('Country is Required');
        I.see('User registered successfully');
    }


}
const vendorPage = require('../../pages/vendorpage/vendorPage');
const { vendorData } = require('../../data/vendordata/vendorData');
const { vendorLocator } = require('../../locator/vendorlocator/vendorLocator');

When('User goes on vendor page', () => {
    vendorPage.clickVendor(vendorLocator.VendorLocator);
});

Then('User goes to Add vendor page', () => {
    vendorPage.clickVendor(vendorLocator.AddVendorLocator);
});

When('User select the create vendor yourself using form option', () => {
    vendorPage.selectChoice(vendorLocator.selectVendorLocator, vendorData.selectVendor);
})
When('User enters first name', () => {
    vendorPage.fillInputField(vendorLocator.firstNameLocator, vendorData.firstName);
});

When('User enters last name', () => {
    vendorPage.fillInputField(vendorLocator.lastNameLocator, vendorData.lastName);
});

When('User enters email', () => {
    vendorPage.fillInputField(vendorLocator.emailLocator, vendorData.email);
});

When('User enters phone number', () => {
    vendorPage.fillInputField(vendorLocator.phoneNumberLocator, vendorData.phoneNumber);
});

When('User enters brand name', () => {
    vendorPage.fillInputField(vendorLocator.brandNameLocator, vendorData.brandName);
});

When('User enters address', () => {
    vendorPage.fillInputField(vendorLocator.streetAddressLocator, vendorData.streetAddress);
});

When('User enters city', () => {
    vendorPage.fillInputField(vendorLocator.cityLocator, vendorData.city);
});

When('User enters country', () => {
    vendorPage.fillInputField(vendorLocator.countryLocator, vendorData.country);
});

When('User enters postal code', () => {
    vendorPage.fillInputField(vendorLocator.postalCodeLocator, vendorData.postalCode);
});

When('User should clicks on submit button to get success ', () => {
    vendorPage.clickVendor(vendorLocator.submitForm);
});

// Then(' User click to view vendor ', () => {
//     vendorPage.clickVendor(vendorLocator.submitForm);
// });
// Then('check if vendor add successfully or not .', () => {
//     vendorPage.submit(vendorLocator.verifyLocator);
// })






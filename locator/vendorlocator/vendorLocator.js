module.exports = {
    vendorLocator: {
        VendorLocator: '(//span[@class="Polaris-Tabs__Title"][contains(.,"Vendors")])[1]',
        AddVendorLocator: '//button//span[contains(text(),"Add Vendor")]',
        firstNameLocator: '#firstName',
        lastNameLocator: '#lastName',
        emailLocator: '#email',
        phoneNumberLocator: '#phoneNumber',
        brandNameLocator: '#brandName',
        streetAddressLocator: '#address',
        cityLocator: '#city',
        countryLocator: '#country',
        postalCodeLocator: '#pinCode',
        buttonSubmitLocator: '#createSubmitButton',
        bannerContentLocator: '#Banner5Content',
        submitForm: '//button//span//span[text()="Submit"]',
        selectVendorLocator: '#createVendorType',
        verifyLocator: '//*[@id="Banner3Content"]/p',
        viewVendorLocator: '//span[@class="Polaris-Button__Text"][contains(.,"Click here to view Vendors.")]',
        searchFieldLocator: '//input[contains(@placeholder,"Search vendors")]',
        searchedItemLocator: '(//button[@type="button"][contains(.,"Leey3")])[1]',
    }
}
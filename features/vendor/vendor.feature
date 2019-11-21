Feature: Allow user to create vendor into marketcube

    As a user,
    I want to create vendor into marketcube

    Background:
        Given User hits marketcube url
        When User enters the email
        When User enters the password
        Then User clicks on signIn button

    Scenario: Seller - User create vender.
        When User goes on vendor page
        Then User goes to Add vendor page
        And User select the create vendor yourself using form option
        When User enters first name
        And User enters last name
        And User enters email
        And User enters phone number
        And User enters brand name
        And User enters address
        And User enters city
        And User enters country
        And User enters postal code
        When User click on Submit Button and user get message
        And User goes on View Vendor
        And User goes on search tab to search vender

    Scenario: User invite vendor in bulk
        When User goes on vendor page
        Then User goes to Add vendor page
        And User select Bulk create vendors yourself using a CSV
        And User will select CSV file
        And User enter subject
        And User write message





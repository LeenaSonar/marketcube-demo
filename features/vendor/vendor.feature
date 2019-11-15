Feature: Allow user to create vendor into marketcube

    As a user,
    I want to create vendor into marketcube

    Background:
        Given User hits marketcube url
        When User enters the email
        When User enters the password
        Then User clicks on signIn button

    Scenario: Seller - User redirect create vendor page
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
        And User clicks on submit button get success message


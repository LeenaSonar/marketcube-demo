Feature: Allow user to login into marketcube

    As a user,
    I want to login into marketcube

    Background: Seller- User goes to marketcube url
        Given User hits marketcube url

    Scenario: Seller-User verify the components
        When User verifies the label of all fields
        And User verifies the signIn button

    Scenario:  Seller-User logins into marketcube
        When User enters the email
        And User enters the password
        Then User clicks on signIn button

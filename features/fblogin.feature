Feature: Allow user to login into Facebook
    As a user,
    I want to login into Facebook

    Background: User goes to facebook url
        Given User hits facebook url

    Scenario:  User logins into facebook
        When User enters the email
        And User enters the password
        Then User clicks on signIn button

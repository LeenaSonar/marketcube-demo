Feature: Allow user to login into marketcube

    AS a user,
    I want to login into marketcube

    # Background: Seller-user goes to marketcube login page


    Scenario: Seller-User verify the components
        Given User hits marketcube url
        When User verifies the label of all fields
        And User verifies the signIn button

    Scenario:  Seller-User logins into marketcube
        When User enters the email
        And User enters the password
        Then User clicks on signIn button

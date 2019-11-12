Feature: Allow user to create vender into marketcube

    As a user,
    I want to create vender into marketcube

    Scenario: Seller - User redirect create vender page
        When User clicks on vender link
        Then User goes to vender page
        Then User clicks on Add vender link
        Then User goes to add products page

    Scenario: Seller-User verify the components
        When User verifies the label of all fields
        And User verifies dropdown list

    Scenario: Seller- User redirect to create vender form
        When User select create vender option from dropdown to create vender
        And User select option from dropdown
        Then User get redirect to form for create vender

    Scenario: Seller - User filled all the fields
        When User enters first name
        And User enters last name
        And User enters email
        And User enters phone number
        And User enters brand name
        And User enters address
        And User enters city
        And User enters country
        And User enters postal code
        Then User clicks on submit button

    Scenario: Seller- User verify required feilds
        When User filled all mandatory field
        And User click on submit button
        And Verifies that click on submit option
        Then submits the data to the server.

    Scenario: Seller- User verify required feilds
        When User leave feild blank
        And User click on submit button
        Then validation message get automatically generates by system
        Then Verifies that system shows error message.



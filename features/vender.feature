    Feature : Allow user to create vender into marketcube

    As a user,
    I want to create vender into marketcube

    Scenario: Seller - User redirect to dashboard of marketcube page
        When User clicks on vender
        Then User goes to vender page
        When User clicks on Add vender link
        Then User goes to add products page

    Scenario: Seller- User verify dropdown field
        When User verifies label of create vender field
        And User verifies dropdown list

    Scenario: Seller- User redirect to create vender form
        When User select create vender option from dropdown to create vender
        And User select option from dropdown
        And User get redirect to form s

    Scenario: Seller - User verifies all the fields
        When User verifies label of all the field
        And User Verifies first name
        And User verifies last name
        And User verifies email
        And User verifies phone number
        And User verifies brand name
        And User verifies address
        And User verifies city
        And User verifies country
        And User verifies postal code

    Scenario: Seller- User verify required feilds
        When User filled all mandatory field
        And User click on submit button
        Then Verifies that click on submit option
        And  submits the data to the server.

    Scenario: Seller- User verify required feilds
        When User leave feild blank
        And User click on submit button
        Then validation message get automatically generates by system
        And Verifies that system shows error message.



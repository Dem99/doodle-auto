Feature: Login

  Scenario: Login with rigth password and email 
    Given I open "Login" page
    When I fill out "email" and "password" fields with following data on "Login" page
      | email             | password          | 
      | cityfoggy@mail.ru | kokkekkak228322   |
    And I click on "Log in" button on "Login" page
    Then I should be on "Dashboard" page

    Scenario: Login with wrong password
    Given I open "Login" page
    When I fill out "email" and "password" fields with following data on "Login" page
      | email             | password          |
      | cityfoggy@mail.ru | kokkekkak         | 
    And I click on "Log in" button on "Login" page
    Then I should see "Invalid password" text on "Login" page
    And I should be on "Login" page
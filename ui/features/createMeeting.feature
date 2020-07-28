Feature: Create meeting

  Scenario: Create 1-hour group meeting 
    Given I login as User 1 
    And I open "Create group meeting" page
    When I fill out "title" and "note" fields with following data on "Create group meeting" page 
      | title          | note          |
      | first meeting  | meeting       | 
    And I click on "Continue" button on "Create group meeting" page
    And I click on "9:45" button on "Calendar" page 
    And I click on "Continue" button on "Calendar" page 
    And I click on "Finish" button on "Pool settings" page
    Then I should see "first meeting" title on "Pool" page
    And I should see "meeting" note on "Pool" page
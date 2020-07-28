Feature: Settings

  Scenario: Change account name
    Given I login as user 1 
    And I open "Settings" page
    When I write "Andrey" to "Name" field on "Settings" page
    And I click on "Save" button on "Settings" page
    Then I should see "Changes were saved" text on "Settings" page
    And I should be on "Settings" page

  Scenario: Change english language to deustch
    Given I login as user 1 
    And I open "Settings" page
    When I click on "English" button on "Settings" page
    And I click on "Deustch" button on "Settings" page
    And I click "Save" button on "Settings" page
    Then I should see "Die Änderungen wurden gespeichert" text on "Settings" page
    And I should be on "Settings" page
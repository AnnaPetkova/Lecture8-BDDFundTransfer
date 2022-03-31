Feature: Customer Transfer's Fund
  As a customer,
  I want to transfer funds
  so that I can send money to my friends and family

  @regression @JIRA-3322
  Scenario: Valid Payee
    Given the user is on the Fund Transfer page
    When the user enters "Jim" as payee name
    And  the user enters "100" as amount
    And the user submit request for Fund transfer
    Then ensure the fund transfer is complete with "$100 transferred successfully to Jim!!" message

  @regression @sanity
  Scenario: nov test case
    Given the user is on the Fund Transfer page
    When the user enters "Tim" as payee name
    And the user enters "10" as amount
    And the user submit request for Fund transfer
    Then ensure the fund transfer is complete with "$10 transferred successfully to Tim!!" message

  @sanity @regression  @JIRA-2342
  Scenario: Invalid Payee1
    Given the user is on the Fund Transfer page
    When the user enters "John" as payee name
    And the user enters "100" as amount
    And the user submit request for Fund transfer
    Then ensure a transaction failure message "Transfer failed!! 'John' is not approved. Please contact your branch" is displayed

  @regression
  Scenario: Account is overdrawn past the overdraft limit
    Given the user is on the Fund Transfer page
    When the user enters "Tim" as payee name
    And the user enters "1000000" as amount
    And the user submit request for Fund transfer
    Then ensure a transaction failure message "Transfer failed!! account cannot be overdrawn" is displayed

  @fundTransferTest @regression
  Scenario Outline: datadriven negative
    Given the user is on the Fund Transfer page
    When the user enters "<payeeName>" as payee name
    And  the user enters "<amount>" as amount
    And the user submit request for Fund transfer
    Then ensure the fund transfer is complete with "<expectedMessage>" message
    Examples:
    | payeeName           | amount               | expectedMessage |
    | Jim                 | 100                  | $100 transferred successfully to Jim!! |
    | Tim                 | 10                   | $10 transferred successfully to Tim!! |
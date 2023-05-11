Feature: [KELONTONG] 03. Open Voucher

  Scenario Outline: As a user, I can open voucher to check if I have voucher

    Given I am on the Home page
    When I click Voucher
    Then I should be able to see my existing voucher

Feature: [KELONTONG] 08. Redeem Keping

  Scenario Outline: As a user, I can redeem keping

    Given I am on the Home page
    When I click Keping
    Then system should be leading to Keping Screen

    When I click card Voucher Belanja and click button Tukar
    Then I should be able to redeem keping
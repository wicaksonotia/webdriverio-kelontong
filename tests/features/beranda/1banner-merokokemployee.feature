Feature: [KELONTONG] 01. Banner: Smoker and Employee

  Scenario Outline: As a smoker and employee user, I can get pop-up notification and see banner 'Merokok dan Employee'

    Given I am on the Login page
    When I login with smoker and employee account
    Then system should be able to show pop-up notification and banner 'Merokok dan Employee'
Feature: [KELONTONG] 02. Banner: Non-Smoker and Non-Employee

  Scenario Outline: As a non-smoker and non-employee user, I can't get pop-up notification and can't see banner 'Merokok dan Employee'

    Given I am on the Login page
    When I login with non-smoker and non-employee account
    Then system should be leading to Beranda page without or with banner except 'Merokok dan Employee'
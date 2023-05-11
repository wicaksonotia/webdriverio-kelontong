Feature: [KELONTONG] 04. Hiburan, Peluang, Terdekat

  Scenario Outline: As a user, I can open hiburan, peluang and find my nearest store

    Given I am on the Home page
    When I click menu Hiburan
    Then I should be able to see my hiburan

    When I click menu Peluang
    Then I should be able to see my peluang

    When I click menu Terdekat
    Then I should be able to see my nearest store

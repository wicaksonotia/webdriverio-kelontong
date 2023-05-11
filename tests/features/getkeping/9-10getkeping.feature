Feature: [KELONTONG] 09 and 10. Get Keping form Pesan Antar or Belanja Lansung

  Scenario Outline: As a user, I can get keping form pesan antar or belanja lansung

    Given I am on the Home page
    When I click Keping
    Then system should be leading to Keping Screen

    When I click tab Keping Masuk
    Then I should be able to check keping masuk from pesan antar or belanja lansung
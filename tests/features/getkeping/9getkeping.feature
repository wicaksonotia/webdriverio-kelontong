Feature: [KELONTONG] 09. Get Keping form Pesan Antar

  Scenario Outline: As a user, I can make an order and confirm order

    Given I am on the Home page
    When I click menu Pesan Antar
    Then I should be able to make an order

    When I click Lihat Detail Pembelian
    Then I should be able confirm that the order was accepted
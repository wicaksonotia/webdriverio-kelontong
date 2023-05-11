Feature: [KELONTONG] 07. Create an Account

  Scenario Outline: As a user, I can create new account

    Given I am on the Home page
    When I click tab Akun Saya
    Then system should be leading to Akun Saya page

    Given I am on the Akun Saya page
    When I delete my account
    Then system should be leading to Login page

    Given I am on the Login page
    When I click link Buat akun di sini
    Then system should be leading to form Daftar

    Given I am on the form Daftar
    When I complete the data and click button Daftar
    Then I should be able to get a new account

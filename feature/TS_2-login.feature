Feature: Login(02)

  Scenario: User logs in with a existing account

    Given User goes to Homepage
    Then User tries to Autenicate
    Then User enters the login details and logs in
    Then Verify user lands in My Account Page showing user name and logout
    Then User logs out
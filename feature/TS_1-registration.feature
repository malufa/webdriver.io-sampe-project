Feature: Registration(01)

  Scenario: User registers a new account and logs in

    Given User goes to Homepage
    Then User tries to Autenicate
	Then User registers with a new email id
	Then User fills the form and creates a new account   
	Then Verify user lands in My Account Page showing user name and logout
	Then User logs out
Feature: Checkout(03)

  Scenario: User logs in with a existing account and buys a product

    Given User goes to Homepage
    Then User tries to Autenicate
    Then User enters the login details and logs in
    Then Verify user lands in My Account Page showing user name and logout
    Then User navigates to women tab
    Then User selects the product with name “Faded Short Sleeve T-shirts”
    Then User adds the product to the cart
    Then User proceeds to checkout
    Then User agrees to the terms of service
    Then User selects pay by bank wire payment method and confirms the order
    Then User successfully placed the order

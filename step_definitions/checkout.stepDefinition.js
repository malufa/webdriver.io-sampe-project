import { When, Then } from 'cucumber';
import checkoutPage from '../functions/checkout.page';
  
Then(/^User navigates to women tab$/, () => {
  checkoutPage.goToWomenTab();
});

Then(/^User selects the product with name “Faded Short Sleeve T-shirts”$/, () => {
  checkoutPage.selectProduct();
});

Then(/^User adds the product to the cart$/, () => {
  checkoutPage.addToCart(); 
});

Then(/^User proceeds to checkout$/, () => {
  checkoutPage.proceedToCheckout();
});

Then(/^User agrees to the terms of service$/, () => {
  checkoutPage.agreeTermsOfService();
});

Then(/^User selects pay by bank wire payment method and confirms the order$/, () => {
  checkoutPage.selectPayment();
});

Then(/^User successfully placed the order$/, () => {
  checkoutPage.verifyOrderComplete();
});

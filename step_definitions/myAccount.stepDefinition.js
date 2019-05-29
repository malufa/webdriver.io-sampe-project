import { When, Then } from 'cucumber';
import myAccountPage from '../functions/myAccount.page';

Then(/^Verify user lands in My Account Page showing user name and logout$/, () => {
  myAccountPage.validateMyAccountPage();
});

Then(/^User logs out$/, () => {
  myAccountPage.logout();
});
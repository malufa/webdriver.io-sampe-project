import { When, Then } from 'cucumber';
import authenticationPage from '../functions/authentication.page';
import newUserGenerator from '../data/user';

When(/^User goes to Homepage$/, () => {
  authenticationPage.open();
});

When(/^User tries to Autenicate$/, () => {
  authenticationPage.goToAuthentication();
});

When(/^User registers with a new email id$/, { retry: 2 }, () => {
  const email = newUserGenerator.valid.new[0].email;
  authenticationPage.enterEmail(email);
});

When(/^User fills the form and creates a new account$/, () => {
  const userData = newUserGenerator.valid.new[0];
  authenticationPage.fillForm(userData);
  authenticationPage.submit();
});

Then(
  /^User enters the login details and logs in*$/, () => {
    const userData = newUserGenerator.valid.existing[0];
    browser.params.user = userData;
    authenticationPage.login(userData);   
  }
);
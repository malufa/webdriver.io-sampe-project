import Page from './page';
/**
 * Autentication Page Object
 *
 * @class functions/Autentication
 * @type {Page}
 */
class AuthenticationPage extends Page {
  /**
   * Define Elements
   * */
  get SignInButton() {
    return browser.element('//a[@class="login"]');
  }
  get emailId() {
    return browser.element('//input[@id="email_create"]');
  }
  get createAccount() {
    return browser.element('//button[@id="SubmitCreate"]');
  }
  get firstName() {
    return browser.element('//input[@id="customer_firstname"]');
  }
  get lastName() {
    return browser.element('//input[@id="customer_lastname"]');
  }
  get password() {
    return browser.element('//input[@id="passwd"]');
  }
  get dayDOB() {
    return browser.element('//select[@id="days"]');
  }
  get monthDOB() {
    return browser.element('//select[@id="months"]');
  }
  get yearDOB() {
    return browser.element('//select[@id="years"]');
  }
  get address() {
    return browser.element('//input[@id="address1"]');
  }
  get city() {
    return browser.element('//input[@id="city"]');
  }
  get state() {
    return browser.element('//select[@id="id_state"]');
  }
  get postalCode() {
    return browser.element('//input[@id="postcode"]');
  }
  get country() {
    return browser.element('//select[@id="id_country"]');
  }
  get phoneNumber() {
    return browser.element('//input[@id="phone_mobile"]');
  }
  get register() {
    return browser.element('//button[@id="submitAccount"]');
  }   
  get existingUserEmail() {
    return browser.element('//input[@id="email"]');
  } 
  get signIn() {
    return browser.element('//button[@id="SubmitLogin"]');
  }  
  /* Overridden open function.
   * Opens / application page
   */
  open() {
    browser.url('http://automationpractice.com/index.php');
  }
  /**
   * User goes to Login/Rgister
   */
  goToAuthentication() {
    this.SignInButton.waitForVisible();
    this.SignInButton.click();
  }
  /**
   * User enters mail id
   */
  enterEmail(email) {
    this.emailId.waitForVisible();
    this.emailId.setValue(email);
    this.createAccount.click();
  }
  /**
   * User fills the form
   */
  fillForm(user) {
    browser.waitUntil(
      () => browser.url().value.includes('authentication'),
      5000
    );    
    browser.params.user = user;
    this.firstName.waitForVisible();
    console.log(`User with email: ${user.email} is created.`);
    this.firstName.setValue(user.firstName);
    this.lastName.setValue(user.lastName);
    this.password.setValue(user.password);
    this.dayDOB.selectByValue(user.dayDOB);
    this.monthDOB.selectByValue(user.monthDOB);
    this.yearDOB.selectByValue(user.yearDOB);
    this.address.setValue(user.address);
    this.city.setValue(user.city);
    this.state.selectByVisibleText(user.state);
    this.postalCode.setValue(user.postalCode);
    this.country.selectByVisibleText(user.country);
    this.phoneNumber.setValue(user.phone);
  }

  /**
   * Submits the registration form
   */
  submit() {
    this.register.waitForVisible();
    this.register.click();
  }

  /**
   * Validates My Account Page
   */
  validateMyAccountPage() {
    browser.waitUntil(
      () => browser.url().value.includes('my-account'),
      5000
    );
    expect(this.navigatedPage.getAttribute('innerHTML')).to.include('My account');
    expect(this.logoutButton.isVisible()).to.equal(true);
    expect(this.accountName.getAttribute('innerHTML')).to.include(`${browser.params.user.firstName} ${browser.params.user.lastName}`);
  }
  /**
   * User logs out
   */
  logout() {
    this.logoutButton.waitForVisible();
    this.logoutButton.click();
    browser.waitUntil(
      () => browser.url().value.includes('authentication'),
      5000
    );
    expect(this.navigatedPage.getAttribute('innerHTML')).to.include('Authentication');
    expect(this.SignInButton.isVisible()).to.equal(true);
  }
  /**
   * User logs out
   */
  login(user) {
    this.existingUserEmail.waitForVisible();
    this.existingUserEmail.setValue(user.email);
    this.password.setValue(user.password);
    this.signIn.click();
  }

}

export default new AuthenticationPage();

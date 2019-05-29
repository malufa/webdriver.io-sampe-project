import Page from './page';

/**
 * MyAccout Page Object
 *
 * @class functions/MyAccout
 * @type {Page}
 */
class MyAccountPage extends Page {
  /**
   * Define Elements
   * */

  get navigatedPage() {
    return browser.element('//span[@class="navigation_page"]');
  }
  get logoutButton() {
    return browser.element('//a[@class="logout"]');
  }
  get accountName() {
    return browser.element('//a[@class="account"]');
  } 
  get SignInButton() {
    return browser.element('//a[@class="login"]');
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
}

export default new MyAccountPage();

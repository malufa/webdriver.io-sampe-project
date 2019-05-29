import Page from './page';

/**
 * Checkout Page Object
 *
 * @class functions/Checkout
 * @type {Page}
 */

class CheckoutPage extends Page {
  /**
   * Define Elements
   * */

  get womenTab() {
    return browser.element('//a[@title="Women"]');
  }
  get product() {
    return browser.element('//img[@title="Faded Short Sleeve T-shirts"]');
  }
  get addToCartButton() {
    return browser.element('//p[@id="add_to_cart"]/button');
  }
  get checkout() {
    return browser.element('//a[@title="Proceed to checkout"]');
  }
  get processAddress() {
    return browser.element('//button[@name="processAddress"]');
  }
  get termsOfService() {
    return browser.element('//input[@name="cgv"]');
  }
  get processCarrier() {
    return browser.element('//button[@name="processCarrier"]');
  }
  get bankWire() {
    return browser.element('//a[@class="bankwire"]');
  }
  get confirmOrder() {
    return browser.element('//span[contains(text(),"confirm")]');
  }
  get navigatedPage() {
    return browser.element('//span[@class="navigation_page"]');
  }
  get cartQuantity() {
    return browser.element('//span[@class="ajax_cart_quantity"]');
  }
  get proceed() {
    return browser.element('//a[contains(@href,"order&step=1")]');
  }

  /**
   * Navigates to Women Tab
   */
  goToWomenTab() {
    this.womenTab.waitForVisible();
    this.womenTab.click();
    browser.waitUntil(
      () => browser.url().value.includes('category=3'),
      8000
    );
  }
  /**
   * Selects a product
   */
  selectProduct() {
    this.product.waitForVisible();
    this.product.click();
  }
  /**
   * Adds the product to te cart
   */
  addToCart() {
    browser.waitUntil(
      () => browser.url().value.includes('product'),
      8000
    );
    this.addToCartButton.waitForVisible();
    this.addToCartButton.click();
  }
  /**
   * User proceeds to Checkout
   */
  proceedToCheckout() {
   this.checkout.waitForVisible();
   this.checkout.click();
   browser.waitUntil(
      () => browser.url().value.includes('order'),
      8000
   );
   browser.pause(2000);
   this.proceed.waitForVisible();
   this.proceed.click();
   browser.waitUntil(
      () => browser.url().value.includes('order&step=1'),
      8000
   );
   const processAddressPos = browser.elementIdLocation(this.processAddress.value.ELEMENT);
   browser.scroll(processAddressPos.value.x, processAddressPos.value.y);
   this.processAddress.waitForVisible();
   this.processAddress.click();
  }
  /**
   * User Agree's terms of service
   */
  agreeTermsOfService() {
    const termsOfServicePos = browser.elementIdLocation(this.termsOfService.value.ELEMENT);
    browser.scroll(termsOfServicePos.value.x, termsOfServicePos.value.y);
    this.termsOfService.click();
    this.processCarrier.click();
  }

  /**
   * selects payment method
   */
  selectPayment() {
    this.bankWire.waitForVisible();
    this.bankWire.click();
    this.confirmOrder.waitForVisible();
    this.confirmOrder.click();
  }
  /**
   * Verifies order complete page
   */
  verifyOrderComplete() {
   browser.waitUntil(
      () => browser.url().value.includes('order-confirmation'),
      8000
   );
   expect(this.navigatedPage.getAttribute('innerHTML')).to.include('Order confirmation');
   expect(this.cartQuantity.getAttribute('innerHTML')).to.include('0');
  }
  
}

export default new CheckoutPage();

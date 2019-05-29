/**
 * Constructor for abstract Page class
 * @constructor
 */

export default class Page {
  open(path) {
    browser.url(path);
  }
}

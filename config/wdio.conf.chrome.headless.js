let merge = require('deepmerge');
let wdioConfBase = require('./wdio.conf.base.js');

exports.config = merge(wdioConfBase.config, {

  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  capabilities: [{
    browserName:   'chrome',
    chromeOptions: {
      args: ['headless', '--reduce-security-for-testing', '--auto-open-devtools-for-tabs'],
    }
  }],

  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  before: function (capabilities, specs) {
    /**
     * Setup the Chai assertion framework
     */
    let chai = require('chai');
    global.expect = chai.expect;

    console.log('Starting Test Case: -', specs[0].replace(/^.*[\\\/]/, ''));

    browser.timeouts('page load', 60000);
    browser.params = this.params = [];
  },

});

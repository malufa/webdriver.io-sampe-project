/**
 *
 * wdio.conf.base.js
 * Basic test configuration file that will be extended by specific environment test configuration files
 *
 */
exports.config = {
  //
  //==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //

  suites: {

    testcase: [
      './feature/TS_1-registration.feature',
      './feature/TS_2-login.feature',
      './feature/TS_3-checkout.feature',
    ],

  },

  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //

  //
  // First, you can define how many instances should be started at the same time.
  // The property handles how many capabilities from the same test should run tests.
  //

  maxInstances: process.env.instance || 3,

  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //

  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,

  //
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'silent',

  //
  // Enables colors for log output.
  coloredLogs: true,

  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 60000,

  //
  // Default timeout in milliseconds for request if Selenium Grid doesn't send response
  connectionRetryTimeout: 60000,

  //
  // Default request retries count
  connectionRetryCount: 3,

  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  reporters: ['spec', 'junit'],

  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  baseUrl: 'http://automationpractice.com/index.php',

  //
  // Some reporter require additional information which should get defined here
  reporterOptions: {
    junit: {
      outputDir: './reports/'
    }
  },

  plugins: {
    'wdio-screenshot': {}
  },

  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  // services: ['sauce','appium','selenium-standalone'],
  //
  // services: ['selenium-standalone'],
  // seleniumLogs: './reports/',
  // seleniumArgs: [{'version': '3.0.1'}, {'drivers.chrome.version': '2.30'}, {'drivers.chrome.arch': 'x64'}],
  //
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: http://webdriver.io/guide/testrunner/frameworks.html
  framework: 'cucumber',

  cucumberOpts: {
    require: [
      './step_definitions/authentication.stepDefinition.js',
      './step_definitions/myAccount.stepDefinition.js',
      './step_definitions/checkout.stepDefinition.js',
    ],
    compiler: ['js:babel-core/register'], // <string[]> filetype:compiler used for processing required features
    failFast: true,
    dryRun: false,
    colors: true,
    timeout: 60000
  },

  onPrepare: function () {
    let fs = require('fs');
    if (!fs.existsSync(__dirname + '/reports/screenshots')) {
      if (!fs.existsSync(__dirname + '/reports')) {
        fs.mkdirSync(__dirname + '/reports');
      }
      fs.mkdirSync(__dirname + '/reports/screenshots');
    }
  },

  afterStep: function (step) {
    if (step.isFailed()) {
      const stepName = step.step.name;
      const featureName = step.step.scenario.feature.name;
      const screenShot = `./reports/screenshots/${Date.now()}-${featureName}-${stepName}.png`;
      console.log('Adding screenshot: ' + screenShot);
      browser.saveScreenshot(screenShot);
    }
  }
};

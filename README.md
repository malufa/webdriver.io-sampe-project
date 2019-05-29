# Sample Webdriver.io Project

## Setup environment

### Setup local test environment

Clone `https://github.com/malufa/webdriver.io-sampe-project.git`
- Issue `npm i` command.
- Install chrome driver using the command `npm run webdriver-install`
- Ensure you have the minimum required Java version(minimum required version is 8).

## Run automated tests

### Start selenium server

- Open a terminal and issue  `npm run webdriver-start` command.

### Commands to be used in terminal for executing test cases

- `npm run test`


For running headless automation 
- `npm run test-headless`

## Concepts and Stack

### Behaviour Driven Development

  Behavior-driven development (BDD) is a software development methodology in which an application is specified and designed by describing how its behavior should appear to an outside observer.

### Cucumber

  Cucumber is a tool for running automated tests written in plain language. Cucumber.js is the JavaScript implementation of Cucumber.

### WebdriverIO

  WebdriverIO is an open source testing utility for NodeJS. It basically sends requests, wrapped in useful commands, to a Selenium server via the WebDriver Protocol and handles its response.

### Report Generation

  * After running test cases, the test case reports are generated and stored in  `reports` folder.
  * In case of test case failures, the screenshots are taken and are saved in  `screenshots` folder inside the   `reports` folder.

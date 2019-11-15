exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      restart: false,
      smartWait: 10000,
      waitForTimeout: 60000,
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--window-size=1200,1000", "--no-sandbox", "incognito"]
        }
      }
    }
  },
  include: {
    I: 'customStep.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'marketcube-demo',
  gherkin: {
    features: './features/*/vendor.feature',

    steps: [
      './steps/login/loginSteps.js',
      './steps/vendorstep/vendorSteps.js',
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
  },
}
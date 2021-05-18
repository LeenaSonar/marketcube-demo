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
    }
  },
  include: {
    I: 'customStep.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'marketcube-demo',
  gherkin: {
    // features: './features/fblogin.feature',
    // features: './features/*.feature',
    features: './features/login.feature',
    steps: [
      // './steps/fblogin/fbloginSteps.js',
      './steps/login/loginSteps.js',
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